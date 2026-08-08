'use client';

import { ArrowUpRight, ArrowUp, Mail } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Featured', href: '#featured' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/YOUR_GITHUB_USERNAME',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saifdevx',
    icon: FaLinkedinIn,
  },
  {
    label: 'X',
    href: 'https://x.com/SaifDev_X',
    icon: SiX,
  },
];

const technologies = [
  'React',
  'Next.js',
  'JavaScript',
  'Tailwind CSS',
  'Firebase',
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-slate-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
                S
              </span>

              <span>SaifDevX</span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-600">
              Web developer focused on building practical,
              user-centered web applications.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Information Technology student &middot; Web Developer
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-sm font-semibold text-slate-900">
              Navigation
            </p>

            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials + Technologies */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Connect
            </p>

            <ul className="mt-4 flex items-center gap-2">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm font-semibold text-slate-900">
              Built with
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Have a project in mind?
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Let&rsquo;s build something useful.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Mail size={15} aria-hidden="true" />

              Let&rsquo;s Connect

              <ArrowUpRight
                size={15}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col-reverse items-center gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">

          <p className="text-sm text-slate-500">
            &copy; 2026 SaifDevX. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">

            {/* Legal links */}
            <ul className="flex items-center gap-5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex items-center gap-1 rounded-md border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <ArrowUp
                size={14}
                aria-hidden="true"
              />

              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}