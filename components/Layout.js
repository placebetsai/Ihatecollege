// components/Layout.js
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-main">{children}</main>
    </div>
  );
}
