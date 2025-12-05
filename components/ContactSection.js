export default function ContactSection() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.contactName.value.trim() || "(not given)";
    const email = form.contactEmail.value.trim();
    const message = form.contactMessage.value.trim();
    const to = "placebetsai@gmail.com";
    const subject = encodeURIComponent("ihatecollege.com contact");
    const body = encodeURIComponent(
      "Name: " + name +
      "\nEmail: " + email +
      "\n\nMessage:\n" + message
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    form.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact (quietly)</h2>
        <p>
          Got a story, idea, or collab pitch? This doesn&apos;t post anywhere public – it opens email to us.
        </p>
      </div>

      <div className="contact-grid">
        <form className="card form-card" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="contactName">Name (optional)</label>
            <input id="contactName" name="contactName" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="contactEmail">Email (so we can reply)</label>
            <input id="contactEmail" name="contactEmail" type="email" required />
          </div>
          <div className="form-row">
            <label htmlFor="contactMessage">Message</label>
            <textarea id="contactMessage" name="contactMessage" required />
          </div>
          <button type="submit" className="btn btn-secondary">
            Send message
          </button>
          <p className="hint">
            This opens your email app pre-filled to <strong>placebetsai@gmail.com</strong>.
          </p>
        </form>

        <div className="card">
          <h3>What this inbox is for</h3>
          <ul className="list">
            <li>Reality checks about specific colleges or programs.</li>
            <li>Ideas for tools, cheat sheets, or comparison features.</li>
            <li>Collabs, sponsorships, or &quot;help me escape this place&quot; stories.</li>
          </ul>
        </div>
      </div>
    </section>
  );
    }
