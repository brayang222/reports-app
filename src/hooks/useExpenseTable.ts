import { authClient } from "@/lib/auth-client";
import { Expense } from "@/types/expense";
import { useEffect, useState } from "react";

export const useExpenseTable = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchExpenses = async () => {
    const res = await fetch("api/reports");
    const data = await res.json();
    setExpenses(data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const onAddExpense = () => {
    fetchExpenses();
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = expenses
    .filter((e) => e.type === "REVENUE")
    .reduce((sum, e) => sum + e.amount, 0);

  const totalExpenses = expenses
    .filter((e) => e.type === "EXPENSE")
    .reduce((sum, e) => sum + e.amount, 0);

  const balance = totalRevenue - totalExpenses;

  const { data: session } = authClient.useSession();

  return {
    searchTerm,
    setSearchTerm,
    filteredExpenses,
    totalRevenue,
    totalExpenses,
    balance,
    onAddExpense,
    expenses,
    session,
  };
};
