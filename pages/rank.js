import Layout from "../components/Layout";

export default function Rank() {
  return (
    <Layout title="Rank Schools">
      <h1 className="text-4xl font-bold mb-6">Rate Your College</h1>

      <p className="text-lg mb-6">
        Full ranking system coming soon. For now, submit your experience:
      </p>

      <ul className="list-disc ml-6 space-y-2 text-lg">
        <li>Campus political bias</li>
        <li>Value for money</li>
        <li>Teaching quality</li>
        <li>Housing & safety</li>
        <li>Career outcomes</li>
      </ul>
    </Layout>
  );
}
