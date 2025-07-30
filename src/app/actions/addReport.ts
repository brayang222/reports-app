"use server";
import { PrismaClient } from "@/generated/prisma";
import { NewExpense } from "@/types/expense";

const prisma = new PrismaClient();

export default async function addReport(formData: NewExpense, userId: string) {
  try {
    const data = await prisma.report.create({
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
