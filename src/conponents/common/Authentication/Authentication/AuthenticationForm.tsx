import type { PaperProps } from "@mantine/core";
import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useMediaQuery, useToggle } from "@mantine/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { GoogleButton } from "@/conponents/ui/GoogleButton/GoogleButton";
import { TwitterButton } from "@/conponents/ui/TwitterButton/TwitterButton";
import { getUser } from "@/redux/selectors";
import { signInWithGoogle } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) => (val.length <= 6 ? "Password should include at least 6 characters" : null)
    }
  });

  const user = useAppSelector(getUser);

  const navigate = useNavigate();
  const dispach = useAppDispatch();

  const googleAuth = () => {
    dispach(signInWithGoogle());
  };

  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <Paper
      radius="md"
      w={matches ? 400 : "90%"}
      p="lg"
      // style={{ transform: "translate(-50%, -50%)" }}
      withBorder
      {...props}>
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl" onClick={googleAuth}>
          Google
        </GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form onSubmit={form.onSubmit(() => {})}>
        <Stack>
          {type === "register" && (
            <TextInput
              label="Name"
              placeholder="Your name"
              value={form.values.name}
              onChange={(event) => form.setFieldValue("name", event.currentTarget.value)}
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            value={form.values.email}
            onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
            error={form.errors.email && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
            error={form.errors.password && "Password should include at least 6 characters"}
            radius="md"
          />

          {type === "register" && (
            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue("terms", event.currentTarget.checked)}
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor component="button" type="button" c="dimmed" onClick={() => toggle()} size="xs">
            {type === "register"
              ? "Already have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
