import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO
        title="Contact Us | IHateCollege.com"
        description="Got a story, idea, or want to vent about tuition? Reach us directly. We welcome tips, partnerships, and employer job postings."
      />

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4 text-center">Get In Touch</h1>
        <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">
          Got a story, a tip, or just want to vent about tuition? We read everything. Whether you want to share your experience, report an issue, or partner with us — we&apos;re here.
        </p>

        <div className="bg-green-900/20 border border-green-700/60 rounded-xl p-5 mb-8 text-center">
          <h2 className="text-green-400 font-bold text-lg mb-2">Fastest way to reach us</h2>
          <p className="text-green-200 text-sm">
            This form submits directly without needing app state or Supabase. If the thank-you redirect does not load,
            email <a href="mailto:info@ihatecollege.com" className="font-bold underline underline-offset-2">info@ihatecollege.com</a>.
          </p>
        </div>

        <form
          action="https://formsubmit.co/info@ihatecollege.com"
          method="POST"
          className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 mb-10"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://ihatecollege.com/contact" />
          <input type="hidden" name="_subject" value="IHateCollege Contact Form" />

          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-white font-semibold text-sm mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your name"
                autoComplete="name"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-semibold text-sm mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-white font-semibold text-sm mb-1.5">
                Subject
              </label>
              <select
                name="subject"
                id="subject"
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors appearance-none"
              >
                <option value="">Select a topic...</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Share My Story">Share My Story</option>
                <option value="Job Posting">Job Posting</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-semibold text-sm mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-vertical"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-xl transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </div>
        </form>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-2">General Inquiries</h2>
            <p className="text-slate-400 text-sm mb-3">Questions about the site, feedback, corrections, or just want to say what&apos;s on your mind about higher education.</p>
            <a href="mailto:info@ihatecollege.com" className="text-red-400 font-bold text-sm hover:text-red-300">info@ihatecollege.com</a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-2">Employers & Job Postings</h2>
            <p className="text-slate-400 text-sm mb-3">Hiring without degree requirements? Post your job on our board for free. Reach motivated candidates who chose skills over debt.</p>
            <a href="/job-board" className="text-red-400 font-bold text-sm hover:text-red-300">Post a Job (Free)</a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-2">Share Your Story</h2>
            <p className="text-slate-400 text-sm mb-3">Dropped out and thrived? Went to trade school? Have $200k in debt and regret it? Your story helps others make better decisions.</p>
            <a href="mailto:info@ihatecollege.com?subject=My Story" className="text-red-400 font-bold text-sm hover:text-red-300">Submit Your Story</a>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-white font-bold text-lg mb-2">Press & Partnerships</h2>
            <p className="text-slate-400 text-sm mb-3">Media inquiries, trade school partnerships, advertising opportunities, or content collaborations. We partner with organizations that promote career alternatives.</p>
            <a href="mailto:info@ihatecollege.com?subject=Partnership" className="text-red-400 font-bold text-sm hover:text-red-300">info@ihatecollege.com</a>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">
          <h2 className="text-white font-bold text-lg mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-white font-semibold text-sm">Is IHateCollege.com anti-education?</h3>
              <p className="text-slate-400 text-sm mt-1">No. We&apos;re pro-education, anti-debt. We believe there are multiple paths to a successful career, and a four-year degree is just one of them. Trade schools, apprenticeships, certifications, and self-education are all valid paths that we highlight.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">How do you rank colleges?</h3>
              <p className="text-slate-400 text-sm mt-1">Our rankings are based on data from the U.S. Department of Education&apos;s College Scorecard, including net cost, median debt, 10-year earnings, graduation rates, and repayment rates. We also incorporate community ratings from real students and graduates.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Can I post a job on the job board?</h3>
              <p className="text-slate-400 text-sm mt-1">Yes. Job postings are free and live for 30 days. We focus on jobs that don&apos;t require a four-year degree — government, trades, tech, healthcare, and business. Create a free account and post at our <a href="/job-board" className="text-red-400">job board</a>.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">How can I submit a rating for my school?</h3>
              <p className="text-slate-400 text-sm mt-1">Visit our <a href="/rank-your-school" className="text-red-400">Rate My School</a> page. You can rate anonymously or with your username. We collect data on debt pain levels, mental health impact, and overall satisfaction to help incoming students make informed decisions.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Where does your data come from?</h3>
              <p className="text-slate-400 text-sm mt-1">Financial data comes from the U.S. Department of Education College Scorecard API, which is updated annually. Student debt figures reference the Federal Reserve. Community ratings come from our users. All data sources are cited on relevant pages.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:info@ihatecollege.com"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-xl transition-colors"
          >
            Email Us Directly
          </a>
          <p className="text-slate-600 text-sm mt-4">info@ihatecollege.com</p>
          <p className="text-slate-700 text-xs mt-2">We typically respond within 24-48 hours.</p>
        </div>
      </div>
    </Layout>
  );
}
