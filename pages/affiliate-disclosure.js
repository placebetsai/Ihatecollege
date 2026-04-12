import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function AffiliateDisclosurePage() {
  return (
    <Layout>
      <SEO
        title="Affiliate Disclosure | IHateCollege.com"
        description="Affiliate disclosure for IHateCollege.com — how we earn money through affiliate partnerships."
      />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-black text-white mb-2">Affiliate Disclosure</h1>
        <p className="text-slate-500 text-sm mb-10">Last updated: April 2026</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-black text-white mb-3">How We Make Money</h2>
            <p>
              IHateCollege.com is a free resource. To keep this site running, some of the links on
              our pages are affiliate links. This means that if you click on a link and sign up for a
              program, course, or service, we may receive a small commission at no extra cost to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">What This Means For You</h2>
            <p>
              Our affiliate relationships do not influence our editorial content. We recommend programs
              and resources that we believe provide genuine value as alternatives to traditional
              four-year college degrees. We will never recommend a program solely because it pays us
              a commission.
            </p>
            <p>
              You will never pay more for a product or service by using our affiliate links. In many
              cases, our partners offer the same price (or better) through our links.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">Our Partners</h2>
            <p>
              We may earn commissions from the following types of partners:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>Online learning platforms (Coursera, Skillshare, etc.)</li>
              <li>Coding bootcamps and tech training programs (Springboard, etc.)</li>
              <li>Trade schools and vocational programs</li>
              <li>Student loan refinancing services (SoFi, etc.)</li>
              <li>Certification programs (CompTIA, Google, etc.)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">FTC Compliance</h2>
            <p>
              In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that
              this site contains affiliate links. Pages with affiliate links include a disclosure
              notice at the top of the page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-white mb-3">Questions?</h2>
            <p>
              If you have questions about our affiliate relationships, contact us at{" "}
              <a href="mailto:hello@ihatecollege.com" className="text-sky-400 hover:text-sky-300">
                hello@ihatecollege.com
              </a>.
            </p>
          </section>

        </div>
      </div>
    </Layout>
  );
}
