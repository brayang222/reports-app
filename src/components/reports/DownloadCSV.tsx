"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { Expense } from "@/types/expense";

export const DownloadCSV = ({ data }: { data: Expense[] }) => {
  const handleDownloadCSV = () => {
    const csvContent = [
      ["Fecha", "Tipo", "Concepto", "Monto"],
      ...data.map((item: Expense) => [
        new Date(item.createdAt).toLocaleDateString("es-ES"),
        item.type === "REVENUE" ? "Ingreso" : "Gasto",
        item.concept,
        `$${item.amount.toLocaleString("es-ES")}`,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reporte-financiero-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exportar Reporte</CardTitle>
        <CardDescription>
          Descarga el reporte completo en formato CSV
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleDownloadCSV} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Descargar Reporte CSV
        </Button>
      </CardContent>
    </Card>
  );
};
