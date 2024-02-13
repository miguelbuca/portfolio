import fs from "fs";
import { NextResponse } from "next/server"

export async function GET(
) {
  const text = fs.readFileSync(`src/app/api/docs/mvvm-with-react-native.md`);
  return NextResponse.json(text.toString());
}
