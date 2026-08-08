import { ArrowUpRight } from 'lucide-react';

export function FeaturedCard({ project }) {
  const { title, type, description, image, link, linkText } = project;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={`${title} preview`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-blue-700">{type}</span>
        <h3 className="mt-1 text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline"
        >
          {linkText}
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
