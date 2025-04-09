"use client"; // ✅ Must be at the top for any file using React hooks!

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ useRouter for App Router
import Header from "@/components/Header"; // ✅ Correct alias assuming jsconfig.json is configured
import toast from "react-hot-toast";

export default function UpdateStudent({ params }) {
  const [student, setStudent] = useState(null);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchStudent = async () => {
      const response = await fetch(`/api/students/${params.id}`);
      const data = await response.json();
      setStudent(data);
      setName(data.name);
      setStudentClass(data.class);
    };
    fetchStudent();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/students/update/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, class: studentClass }),
      headers: { "Content-Type": "application/json" },
    });

      if (res.ok) {
        toast.success("Student updated successfully!");
        setTimeout(() => {
          router.push("/students");
        }, 1000);
      } else {
        toast.error("Failed to update student.");
      }
  };

  
  if (!student) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2>Update Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="class" className="form-label">
              Class
            </label>
            <input
              type="text"
              className="form-control"
              id="class"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Student
          </button>
        </form>
      </div>
    </div>
  );
}
