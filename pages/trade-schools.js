import Navbar from "../components/Navbar";

export default function TradeSchools() {
  const links = [
    { name: "Lincoln Tech", url: "https://www.lincolntech.edu/" },
    { name: "Universal Technical Institute", url: "https://www.uti.edu/" },
    { name: "Northeast Technical Institute", url: "https://www.ntinow.edu/" },
    { name: "Miami Technical Institute", url: "https://www.mtiinstitute.com/" },
  ];

  return (
    <>
      <Navbar />
      <main className="page-main">
        <h1>Top Trade Schools</h1>
        <p>Skip the $80k student loans. These programs lead to real jobs fast.</p>

        <ul>
          {links.map((t) => (
            <li key={t.name}>
              <a href={t.url} target="_blank" rel="noreferrer">
                {t.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
