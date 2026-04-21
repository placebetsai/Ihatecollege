import Layout from "../components/Layout";

const SHOP = "https://fashionistas.ai";
const COLLECTION = "ihatecollege-merch";

const SUBSECTIONS = [
  { tag: "work-boots", title: "Blue-Collar Work Gear", blurb: "Steel-toe boots, first-job picks, and trade-friendly items tied to the no-degree workforce lane." },
  { tag: "study-supplies", title: "Study Supplies", blurb: "Planners, notebooks, and desk helpers for students who still need to get through class without overspending." },
  { tag: "dorm-decor", title: "Dorm Decor", blurb: "Wall decor, room accents, and low-cost dorm upgrades that fit the college audience." },
  { tag: "greek-life", title: "Greek Life", blurb: "Sorority and campus-style accessories that fit IHateCollege's social and campus culture traffic." },
];

function ProductCard({ p }) {
  const variant = p.variants[0] || {};
  const image = (p.images || [])[0]?.src;
  const compareAt = variant.compare_at_price && parseFloat(variant.compare_at_price) > parseFloat(variant.price)
    ? variant.compare_at_price
    : null;

  return (
    <a
      href={`${SHOP}/products/${p.handle}?ref=ihatecollege`}
      target="_blank"
      rel="noopener nofollow"
      className="block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-red-500/50 transition-all"
    >
      <div className="aspect-[4/5] bg-black/30 overflow-hidden">
        {image ? (
          <img src={image} alt={p.title} loading="lazy" className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-xs uppercase tracking-[0.2em] text-slate-500">No image</div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 min-h-[2.8rem]">{p.title}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-red-400 font-black">${variant.price || "?"}</span>
          {compareAt && <span className="text-slate-500 text-xs line-through">${compareAt}</span>}
          <span className="ml-auto text-[10px] uppercase tracking-[0.18em] text-slate-400">Shop →</span>
        </div>
      </div>
    </a>
  );
}

export default function ShopPage({ subsections, totalCount, lastUpdated }) {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-20">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-[0.2em] text-red-400 bg-red-500/10 mb-4">
            Shop
          </div>
          <h1 className="text-4xl md:text-6xl font-black italic tracking-tight text-white leading-none">
            Blue-Collar, Dorm, Study, and Greek Life Picks
          </h1>
          <p className="mt-5 text-slate-300 text-base md:text-lg leading-8 max-w-3xl">
            This is the commerce lane for IHateCollege.com. Every item lives in the Fashionistas.ai catalog,
            but this page filters the inventory down to what actually fits the audience: work boots, dorm decor,
            study gear, and Greek-life accessories.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            <span>{totalCount} live items</span>
            <span>Fashionistas.ai inventory</span>
            <span>last refresh {lastUpdated}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-8 mb-10">
          {subsections.filter((s) => s.products.length > 0).map((s) => (
            <a key={s.tag} href={`#${s.tag}`} className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 hover:text-white hover:border-red-500/50 transition-all">
              {s.title} ({s.products.length})
            </a>
          ))}
        </div>

        {subsections.map((section) => section.products.length === 0 ? null : (
          <section key={section.tag} id={section.tag} className="mb-14 scroll-mt-24">
            <div className="flex items-end justify-between gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-black text-white">{section.title}</h2>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-500">{section.products.length} items</span>
            </div>
            <p className="text-slate-400 max-w-3xl leading-7 mb-6">{section.blurb}</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {section.products.map((p) => <ProductCard key={p.id} p={p} />)}
            </div>
          </section>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  let products = [];
  try {
    const res = await fetch(`${SHOP}/collections/${COLLECTION}/products.json?limit=250`);
    if (res.ok) {
      const data = await res.json();
      products = data.products || [];
    }
  } catch {
    products = [];
  }

  products = products.filter((p) => Array.isArray(p.variants) && p.variants.some((v) => v.available));

  const subsections = SUBSECTIONS.map((section) => ({
    ...section,
    products: products.filter((p) => (p.tags || []).includes(section.tag)),
  }));

  return {
    props: {
      subsections,
      totalCount: products.length,
      lastUpdated: new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC",
    },
    revalidate: 3600,
  };
}
