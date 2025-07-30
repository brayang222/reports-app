"use server";
import { NewExpense } from "@/types/expense";
import { PrismaClient } from "../../../prisma-generated/client";

const prisma = new PrismaClient();

export default async function addReport(formData: NewExpense, userId: string) {
  try {
    await prisma.report.create({
      data: {
        type: formData.type,
        concept: formData.concept,
        amount: formData.amount,
        createdAt: new Date(formData.createdAt),
        userId: userId,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
