import Layout from "../components/Layout";
import { useState } from "react";

export default function Cost() {
  const [tuition, setTuition] = useState("");
  const [housing, setHousing] = useState("");
  const [books, setBooks] = useState("");

  const total = Number(tuition) + Number(housing) + Number(books);

  return (
    <Layout title="Cost Calculator">
      <h1 className="text-4xl font-bold mb-6">College Cost Calculator</h1>

      <div className="space-y-4 max-w-md">

        <input
          className="w-full p-3 bg-white/10 rounded"
          placeholder="Tuition per year"
          onChange={(e) => setTuition(e.target.value)}
        />

        <input
          className="w-full p-3 bg-white/10 rounded"
          placeholder="Housing per year"
          onChange={(e) => setHousing(e.target.value)}
        />

        <input
          className="w-full p-3 bg-white/10 rounded"
          placeholder="Books & Fees"
          onChange={(e) => setBooks(e.target.value)}
        />

        <div className="text-2xl font-bold mt-4">
          Total: ${isNaN(total) ? 0 : total.toLocaleString()}
        </div>
      </div>
    </Layout>
  );
}
