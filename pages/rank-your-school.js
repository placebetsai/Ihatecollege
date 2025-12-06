import Head from "next/head";
import RankCollege from "../components/RankCollege";

export default function RankYourSchoolPage() {
  return (
    <>
      <Head>
        <title>Rank Your School | IHATECOLLEGE.COM</title>
      </Head>

      <section className="section">
        <p className="eyebrow">Rank your school</p>
        <h1 className="section-title">How honest is your college?</h1>
        <p className="section-sub">
          See crowd-sourced scores on debt, outcomes, and campus reality. Then
          drop your own rating so other students don&apos;t get blindsided.
        </p>
      </section>

      {/* Your existing ranking component */}
      <section className="section">
        <RankCollege />
      </section>
    </>
  );
}
