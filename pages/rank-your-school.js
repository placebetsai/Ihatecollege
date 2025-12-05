import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – ihatecollege.com</title>
        <meta
          name="description"
          content="Got a story, idea, or collab pitch? Reach out to ihatecollege.com."
        />
      </Head>

      <div className="page-header">
        <div className="page-kicker">CONTACT</div>
        <h1 className="page-title">Got a story or idea?</h1>
        <p className="page-subtitle">
          This isn&apos;t a giant company. It&apos;s just people who think students deserve the real
          picture. Reach out if you want to contribute, send data, or partner.
        </p>
      </div>

      <div className="simple-form">
        <label>
          Your name (optional)
          <input type="text" placeholder="You can stay anonymous" />
        </label>

        <label>
          Email (if you want a reply)
          <input type="email" placeholder="you@example.com" />
        </label>

        <label>
          Message
          <textarea placeholder="Stories from campus, collab ideas, or anything else." />
        </label>

        <a
          href="mailto:placebetsai@gmail.com?subject=ihatecollege.com%20Contact"
          className="btn-secondary"
        >
          Open email app
        </a>

        <p style={{ fontSize: '0.8rem', marginTop: '0.6rem', color: '#9ca3af' }}>
          For now this just opens your email app. Future version: direct form submission.
        </p>
      </div>
    </>
  );
}
