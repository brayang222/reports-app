"use server";
import { PrismaClient } from "@/generated/prisma";
import { NewExpense } from "@/types/expense";

const prisma = new PrismaClient();

export default async function updateUser(userData: any, userId: string) {
  try {
    const data = await prisma.user.update({
      where: { id: userId },
      data: {
        name: userData.name,
        role: userData.role,
      },
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
