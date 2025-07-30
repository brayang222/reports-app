import { PrismaClient } from "../../../prisma-generated/client";

const prisma = new PrismaClient();

export default async function getReports() {
  try {
    const reports = await prisma.report.findMany({
      include: { user: true },
    });
    return reports;
  } catch (error) {
    console.error(error);
    return [];
  }
}
