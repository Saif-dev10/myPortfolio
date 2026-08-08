'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Menu,
  X as CloseIcon,
  Search,
  ArrowUpRight,
  Mail,
} from 'lucide-react';

import { SiGithub, SiX } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Featured', href: '/featured' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Saif-dev10',
    icon: SiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/saifdevx/',
    icon: FaLinkedinIn,
  },
  {
    label: 'X',
    href: 'https://x.com/SaifDev_X',
    icon: SiX,
  },
];

// const router = useRouter();


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash);
    };

    syncHash();

    window.addEventListener('hashchange', syncHash);

    return () => {
      window.removeEventListener('hashchange', syncHash);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      {/* Main navbar */}
      <div className="mx-auto flex min-h-16 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-base font-semibold tracking-tight text-slate-900"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
            S
          </span>

          <span>SaifDevX</span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors hover:text-blue-700 ${
                    isActive
                      ? 'text-blue-700'
                      : 'text-slate-600'
                  }`}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop search */}
        <div className="ml-auto hidden w-full max-w-xs md:block">
          <label htmlFor="site-search" className="sr-only">
            Search
          </label>

          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />

            <input
              type="search"
              id="site-search"
              placeholder="Search..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Desktop socials + CTA */}
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <div className="flex items-center gap-1">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <Icon size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <Link
            href="mailto:muhammedsaifullah06@gmail.com"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Mail size={15} aria-hidden="true" />
            Let&rsquo;s Connect
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={
            mobileOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {mobileOpen ? (
            <CloseIcon size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-slate-200 transition-[max-height] duration-300 ease-in-out md:hidden ${
          mobileOpen
            ? 'max-h-[600px]'
            : 'max-h-0 border-t-0'
        }`}
      >
        <div className="space-y-4 px-4 py-4 sm:px-6">

          {/* Mobile search */}
          <div className="relative">
            <Search
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />

            <input
              type="search"
              id="mobile-search"
              placeholder="Search..."
              className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Mobile navigation links */}
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile CTA */}
          <Link
            href="#contact"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <Mail size={15} aria-hidden="true" />
            Let&rsquo;s Connect
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>

          {/* Mobile socials */}
          <div className="flex items-center justify-center gap-2 border-t border-slate-100 pt-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={closeMobileMenu}
                className="flex h-10 w-10 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
              >
                <Icon size={18} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}