import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error(error);
    return [];
  }
}
