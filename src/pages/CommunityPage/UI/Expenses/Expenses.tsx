import { Button, Flex, Group, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import * as dayjs from "dayjs";
import type { FC } from "react";

import { addExpenses } from "@/redux/slices/expensesSlice";
import { useAppDispatch } from "@/redux/store";
import type { Expenses } from "@/shared/types/Types";

import s from "./Expenses.module.css";

type FormValues = {
  expenses: Expenses;
};

type ExpensesProps = {
  owner: string;
  toggleExpenses: () => void;
};

const ExpensesPage: FC<ExpensesProps> = ({ toggleExpenses, owner }) => {
  const dispatch = useAppDispatch();

  console.log(owner);

  const form = useForm<FormValues>({
    initialValues: {
      expenses: {
        title: "",
        description: "",
        owner: "",
        id: "",
        date: "",
        price: 0,
        dateAdded: 0
      }
    }
  });

  const submit = (values: FormValues) => {
    values.expenses.id = dayjs().toString();
    values.expenses.owner = owner;
    values.expenses.dateAdded = new Date().getTime();
    dispatch(addExpenses(values.expenses));
    form.reset();
  };

  return (
    <Flex className={s.cardWrapper}>
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <Flex p={20} direction="column" gap={10}>
          <TextInput label="Дата" placeholder="Дата" {...form.getInputProps("expenses.date")} />
          <Textarea size="lg" label="Description" {...form.getInputProps("expenses.description")} />
          <Group>
            <NumberInput size="xs" label="Price" {...form.getInputProps("expenses.price")} />
          </Group>
          <Group mt={20} display="flex" justify="space-around">
            <Button type="submit">Добавить</Button>
            <Button onClick={toggleExpenses}>Закрыть</Button>
          </Group>
        </Flex>
      </form>
    </Flex>
  );
};

export default ExpensesPage;
