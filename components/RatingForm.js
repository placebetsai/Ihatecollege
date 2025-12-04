import { useState } from "react";

export default function RatingForm() {
  const [status, setStatus] = useState("");

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    const res = await fetch("/api/submit-rating", {
      method: "POST",
      body: JSON.stringify(data)
    });

    if (res.ok) setStatus("Saved!");
  }

  return (
    <div className="card mt-8">
      <h2 className="text-xl font-bold mb-2">Rank My College</h2>

      <form onSubmit={submit} className="flex flex-col gap-3">
        <input name="college" placeholder="College" className="p-2 bg-gray-900 rounded" required />
        <input name="hateScore" type="number" min="1" max="10" placeholder="Hate Score" className="p-2 bg-gray-900 rounded" required />
        <textarea name="rant" placeholder="Your rant..." className="p-2 bg-gray-900 rounded" />
        <button className="bg-orange-500 text-black font-bold p-2 rounded">Submit</button>
      </form>

      {status && <p className="mt-2 text-green-400">{status}</p>}
    </div>
  );
    }
