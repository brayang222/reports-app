import { Expense } from "@/types/expense";
import { useState } from "react";

export const useExpenseTable = (expenses: Expense[]) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.user.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = expenses
    .filter((e) => e.type === "REVENUE")
    .reduce((sum, e) => sum + e.amount, 0);

  const totalExpenses = expenses
    .filter((e) => e.type === "EXPENSE")
    .reduce((sum, e) => sum + e.amount, 0);

  const balance = totalRevenue - totalExpenses;

  return {
    searchTerm,
    setSearchTerm,
    filteredExpenses,
    totalRevenue,
    totalExpenses,
    balance,
  };
};
