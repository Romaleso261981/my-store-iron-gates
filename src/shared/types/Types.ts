import type { ConfirmationResult } from "firebase/auth";

import type { Status } from "./enums";

export type StateAuth = {
  status: Status;
  captchaFetch: ConfirmationResult;
  user: User | null;
};

export type LanguagePickerProps = {
  label: string;
  image: string;
};

export interface GateWithCorrugatedBoard extends Product {
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
}

export type Product = {
  image: string;
  title: string;
  label: string;
  id: string;
  code: string;
  cost: number;
  category: string;
  date: string;
};

export type MessagesData = {
  id: string;
  first_name?: string;
  last_name?: string;
  message: string;
  title?: string;
  icon?: string;
};

export type Job = {
  id: string;
  owner: string;
  date: string;
  title: string;
  description: string;
  quantity: number;
  price: number;
  gotSalary: number;
  dateAdded: number;
  advance: number;
};

export type Expenses = {
  title: string;
  description: string;
  owner: string;
  id: string;
  date: string;
  price: number;
  dateAdded: number;
};

export type JobTypes = {
  jobs: Job[];
  lastId: string;
};

export type ExpensesTypes = {
  expenses: Expenses[];
  lastId: string;
};

export type UserCredentials = {
  nickName?: string;
};
export type UserRequest = {
  code?: string;
  message?: string;
  user?: User;
};
export type UserReq = {
  code?: string;
  message?: string;
  user?: User;
};
export type NewUser = User & UserCredentials;

export type AuthError = {
  code: string;
  message: string;
  errors: AuthErrors[];
};
export type AuthErrors = {
  domain: string;
  message: string;
  reason: string;
};

export type User = {
  nickName: string;
  password: string;
  phoneNumber: string;
  verificationId: string;
  email: string;
};
