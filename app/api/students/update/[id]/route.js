import { db } from "../../../../../lib/db";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const [rows] = await db.query("SELECT * FROM students WHERE id = ?", [id]);
    return Response.json(rows[0] || null);
  } catch (error) {
    console.error("Database error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
