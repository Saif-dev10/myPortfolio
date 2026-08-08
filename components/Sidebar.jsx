import { SocialCard } from './SocialCard';
import { socialLinks, skills } from '../lib/profileData';

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-6">
      {socialLinks.map((social) => (
        <SocialCard key={social.platform} {...social} />
      ))}

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-900">Skills</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
