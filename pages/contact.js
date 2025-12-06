import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1>Contact Us</h1>
      <p>Questions? Ideas? Send a message.</p>

      <form
        action="https://formsubmit.co/placebetsai@gmail.com"
        method="POST"
        className="card"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <label>Your Name</label>
        <input className="input" name="name" required />

        <label>Your Email</label>
        <input className="input" type="email" name="email" required />

        <label>Message</label>
        <textarea className="input" name="message" rows="5" required />

        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </Layout>
  );
}
