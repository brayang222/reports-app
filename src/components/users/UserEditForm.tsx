import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Save, X } from "lucide-react";
import updateUser from "@/app/actions/updateUsers";
import { User } from "@/types/user";

interface UserEditFormProps {
  user: User;
  onSave: () => void;
  onCancel: () => void;
}

export const UserEditForm = ({ user, onSave, onCancel }: UserEditFormProps) => {
  const [formData, setFormData] = useState({
    name: user.name,
    role: user.role,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateUser(formData, user.id as string);
    onSave();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Ingrese el nombre del usuario"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Rol</Label>
          <Select
            value={formData.role}
            onValueChange={(value) => handleInputChange("role", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Seleccionar rol" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="USER">Usuario</SelectItem>
              <SelectItem value="ADMIN">Administrador</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex items-center gap-2 border-border/50 hover:bg-destructive/50 cursor-pointer transition-all duration-200"
        >
          <X className="h-4 w-4" />
          Cancelar
        </Button>
        <Button
          type="submit"
          className="flex items-center gap-2 bg-black hover:from-primary/90 shadow-md transition-all duration-200 cursor-pointer"
        >
          <Save className="h-4 w-4" />
          Guardar Cambios
        </Button>
      </div>
    </form>
  );
};
