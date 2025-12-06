import Navbar from "../components/Navbar";

export default function CivilService() {
  const federal = [
    { name: "USAJOBS (Federal Jobs)", url: "https://www.usajobs.gov" },
    { name: "TSA Hiring", url: "https://jobs.tsa.gov" },
    { name: "Postal Service", url: "https://www.usps.com/careers" },
  ];

  const florida = [
    { name: "State of Florida Jobs", url: "https://jobs.myflorida.com" },
    { name: "Palm Beach County Jobs", url: "https://www.pbcgov.jobs" },
    { name: "Miami-Dade County Jobs", url: "https://www.miamidade.gov/jobs" },
  ];

  return (
    <>
      <Navbar />
      <main className="page-main">
        <h1>Civil Service Careers</h1>
        <p>Stable jobs, pensions, health insurance, no degree required for many positions.</p>

        <h2>Federal Jobs</h2>
        <ul>
          {federal.map((job) => (
            <li key={job.name}>
              <a href={job.url} target="_blank" rel="noreferrer">
                {job.name}
              </a>
            </li>
          ))}
        </ul>

        <h2>Florida Jobs</h2>
        <ul>
          {florida.map((job) => (
            <li key={job.name}>
              <a href={job.url} target="_blank" rel="noreferrer">
                {job.name}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
