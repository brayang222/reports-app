"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Search } from "lucide-react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { formatMoney } from "@/utils/formatMoney";
import { formatDate } from "@/utils/formatDate";
import { useExpenseTable } from "@/hooks/useExpenseTable";
import { AddExpenseDialog } from "./AddExpenseDialog";

export const ExpenseTable = () => {
  const { searchTerm, setSearchTerm, filteredExpenses, onAddExpense, session } =
    useExpenseTable();

  console.log(session?.user);

  return (
    <section className="space-y-6">
      <Card className="shadow-card">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <CardTitle className="text-xl font-semibold">Movimientos</CardTitle>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative flex flex-row items-center">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Buscar por concepto o usuario..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              {session?.user.role === "ADMIN" ? (
                <div className="flex gap-2">
                  <AddExpenseDialog onAddExpense={onAddExpense} />
                </div>
              ) : (
                <></>
              )}
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
                      <td className="py-3 px-4">{expense.user?.name}</td>
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
