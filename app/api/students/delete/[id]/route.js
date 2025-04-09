// app/api/students/delete/[id]/route.js
import { db } from "../../../../../lib/db";

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await db.query("DELETE FROM students WHERE id = ?", [id]);
    return new Response("Student deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting student", { status: 500 });
  }
}
