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
import { useAddExpenseDialog } from "@/hooks/useAddExpenseDialog";
import { NewExpense } from "@/types/expense";

export interface AddExpenseDialogProps {
  onAddExpense: () => void;
}

export const AddExpenseDialog = ({ onAddExpense }: AddExpenseDialogProps) => {
  const {
    setIsAddDialogOpen,
    isAddDialogOpen,
    handleSubmit,
    formData,
    setFormData,
  } = useAddExpenseDialog({ onAddExpense });

  return (
    <>
      <Button onClick={() => setIsAddDialogOpen(true)}>Nuevo Movimiento</Button>
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
                  setFormData((prev: NewExpense) => ({
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
                  setFormData((prev: NewExpense) => ({
                    ...prev,
                    concept: e.target.value,
                  }))
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
                  setFormData((prev: NewExpense) => ({
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
                  setFormData((prev: NewExpense) => ({
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
