"use client";
import { useState } from "react";
import Header from "../../components/Header";
import toast from "react-hot-toast";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/add-student", {
      method: "POST",
      body: JSON.stringify({ name, className }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    // alert(data.message);

    if (res.ok) {
      toast.success("Student added successfully!");
      setName(""); // ✅ Clear name field
      setClassName(""); // ✅ Clear class field

      setTimeout(() => {
        router.push("/students");
      }, 1000);
    } else {
      toast.error("Failed to add student.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="mb-3">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-2"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="form-control mb-2"
            placeholder="Class"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}
