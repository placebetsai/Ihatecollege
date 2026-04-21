import Layout from "../components/Layout";
import SEO from "../components/SEO";

const SHOP = "https://fashionistas.ai";
const CATALOG = "https://js0hy0-ux.myshopify.com";
const COLLECTION = "ihatecollege-merch";
const REF = "ihatecollege";
const THIN_SECTION_COUNT = 2;

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
      href={`${SHOP}/products/${p.handle}?ref=${REF}`}
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

function getProductHref(handle) {
  return `${SHOP}/products/${handle}?ref=${REF}`;
}

function getCollectionHref() {
  return `${CATALOG}/collections/${COLLECTION}`;
}

function getFullCatalogHref() {
  return `${CATALOG}/collections/all`;
}

export default function ShopPage({ subsections, lastUpdated, state, message, featuredFallbacks }) {
  const populatedSections = subsections.filter((section) => section.products.length > 0);
  const hasProducts = populatedSections.length > 0;
  const thinSections = populatedSections.filter((section) => section.products.length < THIN_SECTION_COUNT);
  const showCatalogNotice = state !== "ready" || thinSections.length > 0;
  const visibleCount = populatedSections.reduce((sum, section) => sum + section.products.length, 0);

  return (
    <Layout>
      <SEO
        title="Shop | I Hate College"
        description="Work boots, dorm decor, study supplies, and Greek-life picks for students and first-job workers. Curated from the Fashionistas.ai catalog — no brochure fluff."
        keywords="ihatecollege shop, dorm decor, work boots, study supplies, greek life, college merch, trade school gear, student essentials"
      />
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
          <span>{visibleCount} visible live items</span>
          <span>Fashionistas.ai inventory</span>
          <span>last refresh {lastUpdated}</span>
        </div>

        {showCatalogNotice && (
          <div className="mt-8 max-w-3xl rounded-2xl border border-amber-400/25 bg-amber-300/[0.08] p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">
              {state === "error" ? "Catalog connection issue" : state === "empty" ? "No tagged merch live" : "Lean inventory"}
            </p>
            <h2 className="mt-2 text-2xl font-black text-white">
              {state === "error"
                ? "The merch feed did not load cleanly."
                : state === "empty"
                  ? "This audience slice is empty right now."
                  : "Some IHateCollege sections only have one live item right now."}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {state !== "ready"
                ? `${message} We are only linking to live Fashionistas products and the storefront until the feed is healthy again.`
                : "Empty categories stay hidden on purpose. If a section looks light, that reflects the real live catalog instead of a fake filled-out grid."}
            </p>
          </div>
        )}

        {!hasProducts && (
          <div className="mt-8 max-w-3xl rounded-2xl border border-amber-400/25 bg-amber-300/[0.08] p-5">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">Catalog reroute</p>
            <h2 className="mt-2 text-2xl font-black text-white">This merch slice is empty right now.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Instead of sending people into dead collection paths, we are exposing only verified live product pages plus the working Fashionistas storefront.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {featuredFallbacks.map((product) => (
                <a
                  key={product.id}
                  href={getProductHref(product.handle)}
                  target="_blank"
                  rel="noopener nofollow"
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-[0.16em] text-slate-200 hover:text-white hover:border-red-500/50 transition-all"
                >
                  {product.title}
                </a>
              ))}
              <a
                href={getCollectionHref()}
                target="_blank"
                rel="noopener nofollow"
                className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-[0.16em] hover:bg-red-500 transition-colors"
              >
                Open collection
              </a>
              <a
                href={getFullCatalogHref()}
                target="_blank"
                rel="noopener nofollow"
                className="px-4 py-2 rounded-full bg-red-600 text-white text-xs font-black uppercase tracking-[0.16em] hover:bg-red-500 transition-colors"
              >
                Browse full catalog
              </a>
            </div>
          </div>
        )}
      </div>

        <div className="flex flex-wrap gap-2 mt-8 mb-10">
          {populatedSections.map((s) => (
            <a key={s.tag} href={`#${s.tag}`} className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold uppercase tracking-[0.16em] text-slate-300 hover:text-white hover:border-red-500/50 transition-all">
              {s.title} ({s.products.length})
            </a>
          ))}
          {showCatalogNotice && (
            <a
              href={getCollectionHref()}
              target="_blank"
              rel="noopener nofollow"
              className="px-4 py-2 rounded-full border border-red-500/40 bg-red-500/10 text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-red-500/60 transition-all"
            >
              Open live collection
            </a>
          )}
          {!hasProducts && (
            <a
              href={getFullCatalogHref()}
              target="_blank"
              rel="noopener nofollow"
              className="px-4 py-2 rounded-full border border-red-500/40 bg-red-500/10 text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-red-500/60 transition-all"
            >
              Browse full catalog
            </a>
          )}
        </div>

        {populatedSections.map((section) => (
          <section key={section.tag} id={section.tag} className="mb-14 scroll-mt-24">
            <div className="flex items-end justify-between gap-4 mb-3">
              <h2 className="text-2xl md:text-3xl font-black text-white">{section.title}</h2>
              <span className="text-xs uppercase tracking-[0.16em] text-slate-500">
                {section.products.length === 1 ? "1 live item" : `${section.products.length} live items`}
              </span>
            </div>
            <p className="text-slate-400 max-w-3xl leading-7 mb-6">{section.blurb}</p>
            {section.products.length < THIN_SECTION_COUNT && (
              <p className="mb-5 text-sm leading-6 text-amber-200">
                This section is thin right now, so we are only showing the live item we could verify.
              </p>
            )}
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
  let state = "ready";
  let message = null;
  try {
    const res = await fetch(`${CATALOG}/collections/${COLLECTION}/products.json?limit=250`);
    if (res.ok) {
      const data = await res.json();
      products = data.products || [];
    } else {
      state = "error";
      message = `Catalog request failed with HTTP ${res.status}.`;
    }
  } catch {
    products = [];
    state = "error";
    message = "The live merch feed is unavailable right now.";
  }

  products = products.filter((p) => Array.isArray(p.variants) && p.variants.some((v) => v.available));

  if (state === "ready" && products.length === 0) {
    state = "empty";
    message = "The live merch feed is up, but none of the tagged products in this collection are available right now.";
  }

  const subsections = SUBSECTIONS.map((section) => ({
    ...section,
    products: products.filter((p) => (p.tags || []).includes(section.tag)),
  }));

  return {
    props: {
      subsections,
      lastUpdated: new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC",
      state,
      message,
      featuredFallbacks: products.slice(0, 4),
    },
    revalidate: 300,
  };
}
