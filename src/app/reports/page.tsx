import { ReportsData } from "@/components/reports/ReportsData";
import { Badge } from "@/components/ui/badge";

const Reports = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Reportes Financieros
            </h1>
            <p className="text-muted-foreground">
              Panel de control para administradores
            </p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Solo Administradores
          </Badge>
        </div>
        <ReportsData />
      </div>
    </div>
  );
};

export default Reports;
