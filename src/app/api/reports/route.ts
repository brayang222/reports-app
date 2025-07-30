import getReports from "@/app/actions/getReports";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await getReports();
  return NextResponse.json(users);
}
