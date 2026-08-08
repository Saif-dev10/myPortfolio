import { profile } from '../lib/profileData';

export function ProfileHeader({ bannerSrc, avatarSrc }) {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Banner */}
      <div className="w-full overflow-hidden">
        <img
          src={bannerSrc}
          alt="Profile banner"
          className="block h-auto w-full"
        />
      </div>

      {/* Profile content */}
      <div className="px-5 pb-6 sm:px-8">
        {/* Profile picture */}
        <div className="relative -mt-16 ml-5 h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg sm:-mt-20 sm:ml-8 sm:h-36 sm:w-36">
          <img
            src={avatarSrc}
            alt={`${profile.name} headshot`}
            className="h-full w-full object-cover object-[center_12%]"
          />
        </div>

        {/* Profile information */}
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            {/* Name */}
            <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {profile.name}
            </h1>

            {/* Headline */}
            <p className="mt-1 max-w-xl text-slate-700">
              {profile.headline}
            </p>

            {/* Location + Role */}
            <p className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-slate-500">
              <span>{profile.location}</span>

              <span aria-hidden="true">&middot;</span>

              <span>{profile.role}</span>
            </p>

            {/* Profile badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200"
                >
                  {badge === 'Open to connecting' && (
                    <span
                      className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                      aria-hidden="true"
                    />
                  )}

                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}