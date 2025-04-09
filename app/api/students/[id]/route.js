// app/api/students/[id]/route.js
import { db } from "../../../../lib/db";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const [student] = await db.query("SELECT * FROM students WHERE id = ?", [
      id,
    ]);
    return new Response(JSON.stringify(student[0]), { status: 200 });
  } catch (error) {
    return new Response("Error fetching student", { status: 500 });
  }
}
