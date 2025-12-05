import Head from 'next/head';
import Link from 'next/link';

const cheats = [
  {
    title: 'Khan Academy',
    tags: ['Math', 'Science'],
    description: 'Free explanations for math, stats, econ, and more.',
    url: 'https://www.khanacademy.org/',
  },
  {
    title: 'Grammarly',
    tags: ['Writing', 'Papers'],
    description: 'Grammar checker and style suggestions so your essays don’t read like a text thread.',
    url: 'https://www.grammarly.com/',
  },
  {
    title: 'Notion college dashboard templates',
    tags: ['Organization', 'Dashboards'],
    description: 'Assignment trackers, calendars, and study hubs built by real students.',
    url: 'https://www.notion.so/templates/search?query=student',
  },
  {
    title: 'Pomofocus',
    tags: ['Focus', 'Time management'],
    description: 'Simple Pomodoro timer so you actually study in focused blocks.',
    url: 'https://pomofocus.io/',
  },
];

export default function CheatSheetsPage() {
  return (
    <>
      <Head>
        <title>Cheat sheet vault – ihatecollege.com</title>
        <meta
          name="description"
          content="Study tools, templates, and scripts that make class, assignments, and email easier."
        />
      </Head>

      <div className="page-header">
        <div className="page-kicker">CHEAT SHEET VAULT</div>
        <h1 className="page-title">Stuff that makes school suck less.</h1>
        <p className="page-subtitle">
          Real tools and templates you can use tonight — for essays, exams, and keeping your life
          from turning into 47 random tabs.
        </p>
      </div>

      <div className="resource-grid">
        {cheats.map((c) => (
          <article key={c.title} className="resource-card">
            <div className="resource-tag-row">
              {c.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{c.title}</h3>
            <p>{c.description}</p>
            <a href={c.url} target="_blank" rel="noopener noreferrer" className="resource-link">
              Open site →
            </a>
          </article>
        ))}
      </div>

      <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#9ca3af' }}>
        More is coming: email templates, “I need an extension” scripts, grade calculators, and more.
      </p>
    </>
  );
}
