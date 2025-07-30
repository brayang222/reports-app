import addReport from "@/app/actions/addReport";
import { AddExpenseDialogProps } from "@/components/table/AddExpenseDialog";
import { authClient } from "@/lib/auth-client";
import { NewExpense } from "@/types/expense";
import { useState } from "react";
import { toast } from "sonner";
import { ReportType } from "../../prisma-generated/client";

export const useAddExpenseDialog = ({
  onAddExpense,
}: AddExpenseDialogProps) => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState<NewExpense>({
    concept: "",
    amount: 0,
    createdAt: new Date().toISOString().split("T")[0],
    type: ReportType.EXPENSE,
  });

  const { data: session } = authClient.useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addReport(formData, session?.user?.id || "");
    onAddExpense();

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

  return {
    setIsAddDialogOpen,
    isAddDialogOpen,
    handleSubmit,
    formData,
    setFormData,
  };
};
