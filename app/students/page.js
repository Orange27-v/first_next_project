"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Link from "next/link";
import { toast } from "react-hot-toast";


export default function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStudents(data);
    };
    fetchStudents();
  }, []);

 const deleteStudent = async (id) => {
   const res = await fetch(`/api/students/delete/${id}`, { method: "DELETE" });

   if (res.ok) {
     setStudents((prev) => prev.filter((student) => student.id !== id));
     toast.success("Student deleted successfully!");
   } else {
     toast.error("Failed to delete student.");
   }
 };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>List of Students</h2>
        <ul className="list-group">
          {students.map((student) => (
            <li
              key={student.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {student.name} - {student.class}
              <div>
                <Link
                  href={`/students/update/${student.id}`}
                  className="btn btn-warning btn-sm ms-2"
                >
                  Update
                </Link>
                <button
                  onClick={() => deleteStudent(student.id)}
                  className="btn btn-danger btn-sm ms-2"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
