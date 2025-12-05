import { alternatives } from "../data/alternatives";

export default function AlternativesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-white">
      <h1 className="text-4xl font-extrabold mb-10 tracking-tight">
        Real Alternatives to the 4-Year Trap
      </h1>

      <p className="text-neutral-300 max-w-2xl mb-12">
        College isn't the only path. Here are legitimate options people actually use to build
        careers without drowning in debt. Real programs. Real training. Real paychecks.
      </p>

      <div className="space-y-12">
        {alternatives.map((section, index) => (
          <section key={index} className="space-y-6">
            <h2 className="text-2xl font-bold border-l-4 border-amber-400 pl-3">
              {section.category}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-neutral-900 rounded-2xl border border-neutral-700 hover:border-amber-400 hover:bg-neutral-800 transition-all shadow-lg hover:shadow-amber-400/20"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>

                  <div className="mt-4 text-amber-400 text-sm font-medium">
                    Visit resource →
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
