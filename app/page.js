// app/page.js
import Header from "./components/Header.js";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h1>Welcome to the School Management System</h1>
        <a href="/" className="btn btn-primary mt-3">
          Home page
        </a>
        <a href="/students" className="btn btn-primary mt-3 ms-2">
          View Students
        </a>
        <a href="/students/add" className="btn btn-success mt-3 ms-2">
          Add Student
        </a>
      </div>
    </div>
  );
}
