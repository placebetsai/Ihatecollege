import { alternatives } from "../data/alternatives";

export default function AlternativesPage() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Real Alternatives to the 4-Year Trap</h1>

      {alternatives.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.category}</h2>

          <div className="space-y-4">
            {section.items.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                className="block p-4 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800"
              >
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-neutral-300">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
