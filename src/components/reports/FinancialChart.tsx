"use client";
import { Expense } from "@/types/expense";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const FinancialChart = ({ data }: { data: Expense[] }) => {
  console.log(data);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Movimientos Financieros
        </CardTitle>
        <CardDescription>
          Gráfico de ingresos y gastos de los últimos 7 días
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="createdAt"
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) =>
                  new Date(value).toLocaleDateString("es-ES", {
                    month: "short",
                    day: "numeric",
                  })
                }
              />
              <YAxis
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value.toLocaleString("es-ES")}`}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `$${value.toLocaleString("es-ES")}`,
                  name.toLowerCase() === "ingresos" ? "Ingresos" : "Gastos",
                ]}
                labelFormatter={(value) =>
                  new Date(value).toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                }
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #000",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              />
              <Legend />
              <Bar
                dataKey="amount"
                fill="hsl(142.1 76.2% 36.3%)"
                radius={[4, 4, 0, 0]}
                name="Ingresos"
                data={data.filter(
                  (d: { type: string }) => d.type === "REVENUE"
                )}
              />
              <Bar
                dataKey="amount"
                fill="hsl(346.8 77.2% 49.8%)"
                radius={[4, 4, 0, 0]}
                name="Gastos"
                data={data.filter(
                  (d: { type: string }) => d.type === "EXPENSE"
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
