export type ExpenseType = "REVENUE" | "EXPENSE";

export interface Expense {
  id?: string;
  type: ExpenseType;
  concept: string;
  amount: number;
  createdAt: Date;
  userId: string;
}

export interface NewExpense {
  concept: string;
  amount: number;
  createdAt: string;
  type: ExpenseType;
}
