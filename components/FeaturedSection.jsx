import { FeaturedCard } from './FeaturedCard';

export function FeaturedSection({ projects }) {
  return (
    <section
      aria-labelledby="featured-heading"
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 id="featured-heading" className="text-lg font-semibold text-slate-900">
        Featured
      </h2>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <FeaturedCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
