"use server";
import { User } from "@/types/user";
import { PrismaClient } from "../../../prisma-generated/client";

const prisma = new PrismaClient();

export default async function updateUser(userData: User, userId: string) {
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        name: userData.name,
        role: userData.role,
      },
    });
  } catch (error) {
    console.error(error);
  }
}
