export default function AffiliateDisclosure() {
  return (
    <div
      className="max-w-3xl mx-auto px-4 mt-4 mb-0"
      style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}
    >
      <p className="m-0">
        This page may contain affiliate links. We may earn a small commission at
        no extra cost to you.{" "}
        <a
          href="/affiliate-disclosure"
          style={{ color: "#64748b", textDecoration: "underline" }}
        >
          Learn more
        </a>
      </p>
    </div>
  );
}
