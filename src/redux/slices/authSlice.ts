import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ConfirmationResult } from "firebase/auth";
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { getAllFirestoreData } from "@/shared/helpers/getData";
import { DataBasePath, Status } from "@/shared/types/enums";
import type { StateAuth } from "@/shared/types/Types";
import type { User } from "@/shared/types/Types";

import { auth, db, provider } from "../../integations/firebase";

const setupRecaptcha = (phoneNumber: string) => {
  const recapthca = new RecaptchaVerifier(auth, "sign-in-button", {
    size: "invisible"
  });
  return signInWithPhoneNumber(auth, phoneNumber, recapthca);
};

export const signIn = createAsyncThunk<ConfirmationResult, string, { rejectValue: string }>(
  "auth/signPhoneNumber",
  async (phoneNumber: string, { rejectWithValue }) => {
    try {
      const testObj = await setupRecaptcha(phoneNumber);
      return testObj;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, { rejectWithValue }) => {
  try {
    return localStorage.removeItem("user");
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const signInWithGoogle = createAsyncThunk("auth/logIn", async (_, { rejectWithValue }) => {
  try {
    const result = await signInWithPopup(auth, provider);

    const name = result.user.displayName;
    const { email } = result.user;
    const profilePic = result.user.photoURL;
    const data = await getAllFirestoreData<User>(DataBasePath.USERS, 20);
    const isExistUser = data.some((obj) => obj.email === email);

    console.log("Users", data);

    if (isExistUser) {
      const existedUser = data.find((obj) => obj.email === email);

      return existedUser;
    }

    const collectionRef = collection(db, DataBasePath.USERS);

    await addDoc(collectionRef, {
      profilePic,
      name,
      email,
      rule: "user"
    });

    const newdata = await getAllFirestoreData<User>(DataBasePath.USERS, 20);
    const newUser = newdata.find((obj) => obj.email === email) ?? null;

    return newUser;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const initialState = {
  status: Status.LOADING,
  user: null,
  captchaFetch: {}
} as StateAuth;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signIn.fulfilled, (state) => {
      state.status = Status.SUCCES;
    });

    builder.addCase(signIn.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(signInWithGoogle.pending, (state) => {
      state.status = Status.LOADING;
    });

    builder.addCase(signInWithGoogle.fulfilled, (state, action) => {
      state.status = Status.SUCCES;
      state.user = action.payload as User;
    });

    builder.addCase(signInWithGoogle.rejected, (state) => {
      state.status = Status.ERROR;
    });
  }
});

export default authSlice.reducer;
