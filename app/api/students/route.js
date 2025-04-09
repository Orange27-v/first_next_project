import { db } from "../../../lib/db"; // Assuming you have a database connection pool

// GET /api/students
export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM students");
    return Response.json(rows);
  } catch (error) {
    console.error("Database error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// POST /api/students
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, grade } = body;

    // Basic validation
    if (!name || !grade) {
      return Response.json(
        { error: "Name and grade are required" },
        { status: 400 }
      );
    }

    const [result] = await db.query(
      "INSERT INTO students (name, grade) VALUES (?, ?)",
      [name, grade]
    );

    return Response.json({ id: result.insertId, name, grade }, { status: 201 });
  } catch (error) {
    console.error("Database error:", error.message);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
