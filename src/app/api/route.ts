import fs from "fs";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest
) {
  const slug = req.url?.split('=')[1]

  if(!slug)return

  const text = fs.readFileSync(`src/app/api/docs/${slug}.md`);
  return NextResponse.json(text.toString());
}
