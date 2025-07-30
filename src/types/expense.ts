import { User } from "./user";

export type ReportType = "REVENUE" | "EXPENSE";

export interface Expense {
  id?: string;
  type: ReportType;
  concept: string;
  amount: number;
  createdAt: Date;
  userId: string;
  user: User;
}

export interface NewExpense {
  concept: string;
  amount: number;
  createdAt: string;
  type: ReportType;
}
