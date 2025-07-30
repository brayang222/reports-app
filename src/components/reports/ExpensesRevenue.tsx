"use client";
import { formatMoney } from "@/utils/formatMoney";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ExpensesRevenueProps {
  totalRevenue: number;
  totalExpenses: number;
  balance: number;
}

export const ExpensesRevenue = ({
  totalRevenue,
  totalExpenses,
  balance,
}: ExpensesRevenueProps) => {
  return (
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
  );
};
