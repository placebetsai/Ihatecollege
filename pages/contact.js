import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout title="Contact">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-lg mb-6">Send feedback or stories:</p>

      <a
        href="mailto:placebetsai@gmail.com"
        className="text-amber-400 underline text-lg"
      >
        placebetsai@gmail.com
      </a>
    </Layout>
  );
}
