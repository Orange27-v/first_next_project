import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "School Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container mt-5">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
