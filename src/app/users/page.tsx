import { Settings, Shield } from "lucide-react";
import { UserTable } from "@/components/users/UserTable";

export default async function UsersPanel() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80">
              <Shield className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Panel de Administración
              </h1>
              <p className="text-muted-foreground flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Gestión de usuarios del sistema
              </p>
            </div>
          </div>
        </div>
        <UserTable />
      </div>
    </div>
  );
}
