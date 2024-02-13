import fs from "fs";
import { NextResponse } from "next/server";
import type { NextApiRequest } from 'next'

export async function GET(
  req: NextApiRequest
) {
  const slug = req.url?.split('=')[1]

  if(!slug)return

  const text = fs.readFileSync(`src/app/api/docs/${slug}.md`);
  return NextResponse.json(text.toString());
}
