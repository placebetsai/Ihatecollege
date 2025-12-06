import Navbar from "../components/Navbar";
import colleges from "../public/colleges.json";

export default function LiberalVsConservative() {
  const liberal = colleges.filter(c => c.political === "liberal");
  const conservative = colleges.filter(c => c.political === "conservative");

  return (
    <>
      <Navbar />
      <main className="page-main">
        <h1>Liberal vs Conservative Colleges</h1>

        <section>
          <h2>Liberal Colleges</h2>
          <ul>
            {liberal.map(col => (
              <li key={col.name}>
                <strong>{col.name}</strong> — {col.state}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Conservative Colleges</h2>
          <ul>
            {conservative.map(col => (
              <li key={col.name}>
                <strong>{col.name}</strong> — {col.state}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
