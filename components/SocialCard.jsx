import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

const ICONS = {
  github: SiGithub,
  linkedin: FaLinkedinIn,
  x: SiX,
};

export function SocialCard({
  platform,
  username,
  description,
  href,
  buttonText,
  icon,
}) {
  const Icon = ICONS[icon];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {Icon ? (
          <Icon
            className="h-6 w-6 text-slate-900"
            aria-hidden="true"
          />
        ) : null}

        <div>
          <h3 className="font-semibold text-slate-900">
            {platform}
          </h3>

          <p className="text-sm text-slate-500">
            {username}
          </p>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        {description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
      >
        {buttonText}
      </a>
    </div>
  );
}