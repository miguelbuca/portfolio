import fs from "fs";
import { NextResponse } from "next/server"

export async function GET(
  req: Request
) {
  const slug = req.url?.split('=')[1]

  if(!slug)return

  const text = fs.readFileSync(`src/app/api/docs/${slug}.md`);
  return NextResponse.json(text.toString());
}
