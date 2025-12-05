import Head from 'next/head';
import Link from 'next/link';

const alternatives = [
  {
    title: 'Google Career Certificates',
    tags: ['Tech cert', 'Remote-friendly'],
    description:
      'Online certificates in IT support, data analytics, UX design, project management and more.',
    url: 'https://grow.google/certificates/',
  },
  {
    title: 'CompTIA A+ / Network+ / Security+',
    tags: ['IT', 'Cybersecurity'],
    description:
      'Industry-standard certs that can get you into help desk, networking, and security roles.',
    url: 'https://www.comptia.org/certifications',
  },
  {
    title: 'Community college → transfer route',
    tags: ['Cheaper path', '2+2'],
    description:
      'Do general education at a low-cost community college, then transfer to finish your bachelor’s.',
    url: 'https://www.aacc.nche.edu/college-central/choosing-a-community-college/',
  },
  {
    title: 'Apprenticeships.gov',
    tags: ['Paid training', 'Trades'],
    description:
      'US Department of Labor database of paid apprenticeships: electrician, plumbing, HVAC, tech, and more.',
    url: 'https://www.apprenticeship.gov/',
  },
  {
    title: 'Cybersecurity bootcamps (vetted list)',
    tags: ['Bootcamp', 'Tech'],
    description:
      'Independent reviews and outcomes data so you’re not just trusting bootcamp marketing.',
    url: 'https://www.coursereport.com/subjects/cyber-security',
  },
  {
    title: 'Western Governors University (WGU)',
    tags: ['Online degree', 'Self-paced'],
    description:
      'Accredited online university where you move as fast as you can prove competency.',
    url: 'https://www.wgu.edu/',
  },
];

export default function AlternativesPage() {
  return (
    <>
      <Head>
        <title>Alternatives to the 4-year debt trap – ihatecollege.com</title>
        <meta
          name="description"
          content="Real alternatives to the 4-year college trap: trades, tech certs, apprenticeships, online degrees, and bootcamps."
        />
      </Head>

      <div className="page-header">
        <div className="page-kicker">REAL ALTERNATIVES TO THE 4-YEAR TRAP</div>
        <h1 className="page-title">You&apos;re not a failure if you don&apos;t do a 4-year.</h1>
        <p className="page-subtitle">
          These are legit paths people are using right now to get skills and income without
          signing up for $200k in loans.
        </p>
      </div>

      <div className="resource-grid">
        {alternatives.map((alt) => (
          <article key={alt.title} className="resource-card">
            <div className="resource-tag-row">
              {alt.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{alt.title}</h3>
            <p>{
