import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export default async function getReports() {
  try {
    const reports = await prisma.report.findMany();
    return reports;
  } catch (error) {
    console.error(error);
    return [];
  }
}
