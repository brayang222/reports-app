"use client";
import { ExpensesRevenue } from "./ExpensesRevenue";
import { FinancialChart } from "./FinancialChart";
import { DownloadCSV } from "./DownloadCSV";
import { useExpenseTable } from "@/hooks/useExpenseTable";

export const ReportsData = () => {
  const { totalRevenue, totalExpenses, balance, expenses } = useExpenseTable();

  return (
    <>
      <ExpensesRevenue
        totalRevenue={totalRevenue}
        totalExpenses={totalExpenses}
        balance={balance}
      />
      <FinancialChart data={expenses} />
      <DownloadCSV data={expenses} />
    </>
  );
};
