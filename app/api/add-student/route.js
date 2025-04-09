import { db } from "../../../lib/db";

export async function POST(request) {
  const { name, className } = await request.json();
  await db.query("INSERT INTO students (name, class) VALUES (?, ?)", [
    name,
    className,
  ]);
  return new Response(JSON.stringify({ message: "Student added" }), {
    status: 200,
  });
}
