import React, { useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import addReport from "@/app/actions/addReport";
import { authClient } from "@/lib/auth-client";
import { NewExpense } from "@/types/expense";
import { ReportType } from "@/generated/prisma";

interface AddExpenseDialogProps {
  onAddExpense?: (expense: NewExpense) => void;
}

export const AddExpenseDialog = ({ onAddExpense }: AddExpenseDialogProps) => {
  const [formData, setFormData] = useState<NewExpense>({
    concept: "",
    amount: 0,
    createdAt: new Date().toISOString().split("T")[0],
    type: ReportType.EXPENSE,
  });

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addReport(formData, session?.user?.id || "");

    if (isNaN(formData.amount) || formData.amount <= 0) {
      toast.error("El monto debe ser un número válido mayor a 0");
      return;
    }

    setFormData({
      concept: "",
      amount: 0,
      createdAt: new Date().toISOString().split("T")[0],
      type: "EXPENSE",
    });

    setIsAddDialogOpen(false);

    toast.success(
      `${
        formData.type === "REVENUE" ? "Ingreso" : "Gasto"
      } agregado correctamente`
    );
  };
  return (
    <>
      <Button onClick={() => setIsAddDialogOpen(true)} className="mb-4">
        Nuevo Movimiento
      </Button>
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Nuevo Movimiento
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="tipo">Tipo de Movimiento</Label>
              <Select
                value={formData.type}
                onValueChange={(value: "REVENUE" | "EXPENSE") =>
                  setFormData((prev) => ({
                    ...prev,
                    type: value === "REVENUE" ? "REVENUE" : "EXPENSE",
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="REVENUE">Ingreso</SelectItem>
                  <SelectItem value="EXPENSE">Gasto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="concept">Concepto</Label>
              <Input
                id="concept"
                placeholder="Ej: Salario, Compras, etc."
                value={formData.concept}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, concept: e.target.value }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Monto</Label>
              <Input
                id="amount"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                value={formData.amount}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    amount: Number(e.target.value),
                  }))
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="createdAt">Fecha</Label>
              <Input
                id="createdAt"
                type="date"
                value={formData.createdAt}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    createdAt: e.target.value,
                  }))
                }
                required
              />
            </div>

            <DialogFooter className="gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddDialogOpen(false)}
                className="cursor-pointer"
              >
                Cancelar
              </Button>
              <Button type="submit" className="bg-black cursor-pointer">
                Guardar Movimiento
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
