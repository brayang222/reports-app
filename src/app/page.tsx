import getReports from "./actions/getReports";
import { ExpenseTable } from "@/components/table/ExpenseTable";

export default async function Home() {
  const reports = await getReports();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Ingresos y Gastos
          </h1>
          <p className="text-muted-foreground">
            Gestiona tus finanzas de manera eficiente
          </p>
        </div>

        <ExpenseTable expenses={reports} />
      </main>
    </div>
  );
}
