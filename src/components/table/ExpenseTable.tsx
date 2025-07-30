"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Download, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { formatMoney } from "@/utils/formatMoney";
import { formatDate } from "@/utils/formatDate";
import { Expense } from "@/types/expense";
import { useExpenseTable } from "@/hooks/useExpenseTable";
import { AddExpenseDialog } from "./AddExpenseDialog";

export const ExpenseTable = ({ expenses }: { expenses: Expense[] }) => {
  const {
    searchTerm,
    setSearchTerm,
    filteredExpenses,
    totalRevenue,
    totalExpenses,
    balance,
  } = useExpenseTable(expenses);

  return (
    <section className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Ingresos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {formatMoney(totalRevenue)}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Gastos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatMoney(totalExpenses)}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${
                balance >= 0 ? "text-success" : "text-destructive"
              }`}
            >
              {formatMoney(balance)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table Controls */}
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-xl font-semibold">Movimientos</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por concepto o usuario..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                <AddExpenseDialog />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Concepto
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Monto
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Fecha
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Usuario
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-muted-foreground">
                    Tipo
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center py-8 text-muted-foreground"
                    >
                      No se encontraron movimientos
                    </td>
                  </tr>
                ) : (
                  filteredExpenses.map((expense) => (
                    <tr
                      key={expense.id}
                      className="border-b border-border hover:bg-muted/50 transition-colors"
                    >
                      <td className="py-3 px-4 font-medium">
                        {expense.concept}
                      </td>
                      <td
                        className={`py-3 px-4 font-semibold ${
                          expense.type === "REVENUE"
                            ? "text-success"
                            : "text-destructive"
                        }`}
                      >
                        {expense.type === "REVENUE" ? "+" : "-"}
                        {formatMoney(Math.abs(expense.amount))}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">
                        {formatDate(String(expense.createdAt))}
                      </td>
                      <td className="py-3 px-4">{expense.userId}</td>
                      <td className="py-3 px-4">
                        <Badge
                          variant={
                            expense.type === "REVENUE"
                              ? "default"
                              : "destructive"
                          }
                          className="capitalize"
                        >
                          {expense.type === "REVENUE" ? "Ingreso" : "Gasto"}
                        </Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
