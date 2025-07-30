"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Edit, UserCheck, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { UserEditForm } from "./UserEditForm";
import { User } from "@/types/user";
import { useUserTable } from "@/hooks/useUserTable";

export const UserTable = () => {
  const {
    users,
    getRoleBadgeVariant,
    handleEditUser,
    editingUser,
    handleSaveUser,
    handleCancelEdit,
    setEditingUser,
  } = useUserTable();
  return (
    <div className="space-y-6">
      <Card className="shadow-elegant border-0 bg-gradient-to-br from-card via-card to-accent/20">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl font-semibold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="h-5 w-5 text-primary" />
            </div>
            Gestión de Usuarios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <UserCheck className="h-4 w-4" />
              Total de usuarios: {users.length}
            </div>
          </div>

          <div className="rounded-lg border bg-card/50 backdrop-blur-sm overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/50 transition-colors">
                  <TableHead className="font-semibold text-foreground">
                    Nombre
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Correo
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Teléfono
                  </TableHead>
                  <TableHead className="font-semibold text-foreground">
                    Rol
                  </TableHead>
                  <TableHead className="text-right font-semibold text-foreground">
                    Acciones
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user: User) => (
                  <TableRow
                    key={user.id}
                    className="hover:bg-muted/20 transition-colors"
                  >
                    <TableCell className="font-medium text-foreground">
                      {user.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.email}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {user.phone}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={getRoleBadgeVariant(user.role)}
                        className={
                          user.role === "ADMIN"
                            ? "bg-black text-white shadow-sm"
                            : "bg-secondary/80 text-secondary-foreground"
                        }
                      >
                        {user.role === "ADMIN" ? "Administrador" : "Usuario"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditUser(user)}
                        className="h-8 px-3 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-md"
                      >
                        <Edit className="h-3 w-3 mr-1" />
                        Editar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!editingUser} onOpenChange={() => setEditingUser(null)}>
        <DialogContent className="sm:max-w-md border-0 ">
          <DialogHeader className="pb-4">
            <DialogTitle className="flex items-center gap-3 text-xl font-semibold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Edit className="h-5 w-5 text-primary" />
              </div>
              Editar Usuario
            </DialogTitle>
          </DialogHeader>
          {editingUser && (
            <UserEditForm
              user={editingUser}
              onSave={handleSaveUser}
              onCancel={handleCancelEdit}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
