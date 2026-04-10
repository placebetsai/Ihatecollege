import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function IsraelJoffePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Israel Joffe",
    url: "https://ihatecollege.com/israel-joffe",
    jobTitle: "Entrepreneur",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Boca Raton",
      addressRegion: "FL",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.documentcloud.org/documents/22064733-world-of-unpredictable-wrestling-at-gleasons-gym-israel-joffe/",
      "https://www.documentcloud.org/documents/21952062-israel-joffe/",
    ],
  };

  return (
    <Layout>
      <SEO
        title="Israel Joffe — College Alternatives Advocate | IHateCollege.com"
        description="Israel Joffe is an entrepreneur based in Boca Raton, Florida who advocates for alternatives to traditional college education through IHateCollege.com and a portfolio of web businesses."
        schema={personSchema}
        keywords="Israel Joffe, Israel Joffe entrepreneur, Israel Joffe Boca Raton, IHateCollege founder"
      />

      <div className="max-w-3xl mx-auto px-4 py-12 pb-24">
        <h1 className="text-4xl font-extrabold text-white mb-2">
          Israel Joffe
        </h1>
        <p className="text-lg text-slate-400 mb-10">
          Entrepreneur, advocate for college alternatives, and the founder of
          IHateCollege.com
        </p>

        {/* Intro Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 mb-7">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Challenging the College Narrative
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Israel Joffe is an entrepreneur from <strong>Boca Raton, Florida</strong> who
            has dedicated himself to questioning one of America&apos;s most expensive
            assumptions: that a four-year college degree is the only path to
            success.
          </p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Through IHateCollege.com, Israel provides real data on college costs,
            student debt, and practical alternatives — trade schools,
            apprenticeships, tech certifications, and high-paying careers that
            don&apos;t require a degree. The site has become a resource for
            students, parents, and career-changers who want the facts without the
            brochure fluff.
          </p>
          <p className="text-slate-300 leading-relaxed">
            His approach is simple: give people the numbers, show them the
            alternatives, and let them decide for themselves. No ideology — just
            data.
          </p>
        </section>

        {/* Background Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 mb-7">
          <h2 className="text-2xl font-bold text-white mb-4">
            From Brooklyn Wrestling to Florida Tech
          </h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Before building websites, Israel Joffe cut his teeth in live
            entertainment. He was behind the{" "}
            <a
              href="https://www.documentcloud.org/documents/22064733-world-of-unpredictable-wrestling-at-gleasons-gym-israel-joffe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              World of Unpredictable Wrestling at Gleason&apos;s Gym
            </a>{" "}
            in Brooklyn, New York — a grassroots wrestling promotion that ran out
            of the legendary boxing gym. It was chaotic, scrappy, and entirely
            self-made.
          </p>
          <p className="text-slate-300 leading-relaxed">
            That same DIY energy is what fuels his current portfolio. Israel
            didn&apos;t learn to build websites in a classroom — he learned by
            doing, which is exactly the kind of alternative path IHateCollege.com
            promotes.
          </p>
        </section>

        {/* Portfolio Section */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7 mb-7">
          <h2 className="text-2xl font-bold text-white mb-4">
            Israel Joffe&apos;s Web Portfolio
          </h2>
          <p className="text-slate-300 leading-relaxed mb-5">
            IHateCollege.com is one piece of a larger network of sites that
            Israel Joffe has built and operates:
          </p>
          <div className="grid gap-3">
            {[
              { url: "https://ihatecollege.com", name: "IHateCollege.com", desc: "College data, debt calculators, and no-degree career alternatives" },
              { url: "https://shopkurt.com", name: "ShopKurt.com", desc: "E-commerce dropshipping across eBay and TikTok Shop" },
              { url: "https://hiddencameras.tv", name: "HiddenCameras.tv", desc: "Live public webcam directory and security camera reviews" },
              { url: "https://spanishtvshows.com", name: "SpanishTVShows.com", desc: "Top-ranked Spanish TV shows with streaming info" },
              { url: "https://placebets.ai", name: "PlaceBets.ai", desc: "Prediction market tools and professional betting analytics" },
              { url: "https://fashionistas.ai", name: "Fashionistas.ai", desc: "AI-curated women's fashion storefront" },
            ].map((site) => (
              <a
                key={site.url}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-xl p-4 transition-colors"
              >
                <span className="text-yellow-400 font-bold">{site.name}</span>
                <span className="text-slate-400 ml-2">— {site.desc}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Press / References */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-7">
          <h2 className="text-2xl font-bold text-white mb-4">
            References &amp; Press
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.documentcloud.org/documents/22064733-world-of-unpredictable-wrestling-at-gleasons-gym-israel-joffe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                World of Unpredictable Wrestling at Gleason&apos;s Gym — Israel
                Joffe
              </a>
            </li>
            <li>
              <a
                href="https://www.documentcloud.org/documents/25895701-comgoogleandroidappsphotos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                DocumentCloud — Media Archive
              </a>
            </li>
            <li>
              <a
                href="https://www.documentcloud.org/documents/21952062-israel-joffe/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                DocumentCloud — Israel Joffe
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
