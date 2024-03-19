import type { ConfirmationResult } from 'firebase/auth';

import type { Status } from './enums';

export type StateAuth = {
  status: Status;
  captchaFetch: ConfirmationResult;
};

export type User = {
  phoneNumber: string;
  verificationId: string;
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
