import React from "react";

export default function SectionCard({ label, tags = [], title, children }) {
  return (
    <article className="card-smooth flex flex-col gap-3 p-5 sm:p-6">
      {label && <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{label}</p>}
      {title && (
        <h3 className="text-base font-semibold leading-snug text-slate-50">
          {title}
        </h3>
      )}
      <div className="text-sm text-slate-300">{children}</div>
      {tags.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-slate-800/70 px-2.5 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
