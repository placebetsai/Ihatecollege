import Layout from "../components/Layout";

export default function CheatSheets() {
  const sheets = [
    ["OverAPI Programming Sheets", "https://overapi.com/"],
    ["Codecademy Cheat Sheets", "https://www.codecademy.com/articles"],
    ["Math Reference Sheets", "https://www.mathsisfun.com/"],
    ["Essay Writing Guide", "https://owl.purdue.edu/"],
    ["Email Templates for Professors", "https://www.collegexpress.com/articles-and-advice/student-life/blog/how-email-your-professors-college/"]
  ];

  return (
    <Layout title="Cheat Sheets">
      <h1 className="text-4xl font-bold mb-6">Cheat Sheets</h1>

      <ul className="space-y-4">
        {sheets.map(([name, url]) => (
          <li key={name}>
            <a href={url} target="_blank" className="text-amber-400 underline text-lg">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
