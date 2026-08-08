"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

/* ---------------------------------------------------------
   Local presentational components.
   If you already have a shared <Card /> / <SectionHeading />
   component, swap these out for those instead.
--------------------------------------------------------- */

function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-6">
      {eyebrow && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */

const journey = [
  {
    stage: "HTML & CSS",
    detail:
      "Started with the fundamentals and learned how websites are structured and styled.",
  },
  {
    stage: "JavaScript",
    detail: "Moved into making interfaces interactive and dynamic.",
  },
  {
    stage: "React",
    detail: "Started thinking in reusable components and application state.",
  },
  {
    stage: "Tailwind CSS",
    detail:
      "Learned to build interfaces faster while keeping styling consistent.",
  },
  {
    stage: "Next.js",
    detail: "Started building more complete modern web applications.",
  },
  {
    stage: "Real Applications",
    detail:
      "Moved from tutorials and isolated exercises toward projects designed around actual problems.",
  },
];

const stack = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  "Backend / Services": ["Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel"],
};

const howIWork = [
  {
    step: "01",
    title: "Understand",
    text: "I start by understanding the problem before jumping into implementation.",
  },
  {
    step: "02",
    title: "Build",
    text: "I break the idea into smaller pieces and turn it into a functional solution.",
  },
  {
    step: "03",
    title: "Break",
    text: "I test, debug, make mistakes, and figure out what went wrong.",
  },
  {
    step: "04",
    title: "Improve",
    text: "I refine the implementation and keep iterating until it gets better.",
  },
];

const building = [
  {
    name: "Portfolio",
    desc: "My personal portfolio for showcasing my work, projects, skills, and growth as a developer.",
    tags: ["Next.js", "Tailwind CSS"],
    status: "Done",
    href: null,
  },
  {
    name: "TradeCraft",
    desc: "A trading journal focused on recording trades, analyzing performance, and improving trading decisions.",
    tags: ["React", "Next.js", "Firebase"],
    status: "In Progress",
    href: "https://trade-craft-app-ryf8.vercel.app/",
    story: "Trading interest → recurring problem tracking trades → TradeCraft",
  },
  {
    name: "Attendance Tracker",
    desc: "A practical attendance management application designed around real-world student attendance tracking.",
    tags: ["React", "Firebase"],
    status: "In Progress",
    href: "https://attendance-app-nine-rosy.vercel.app/",
  }, {
    name: "Coco Delight",
    desc: "A simple e-commerce website for a local business, built to showcase products and facilitate online orders.",
    tags: ["React", "Next.js", "Firebase"],
    status: "Done",
    href: "https://coco-delight.vercel.app/",
  }
];

const principles = [
  "Build before you feel ready.",
  "Simple beats impressive.",
  "Bugs are part of the process.",
  "Keep improving what already works.",
];

const beyondCodeTraits = [
  "Analysis",
  "Probability",
  "Risk management",
  "Patience",
  "Discipline",
  "Reviewing decisions objectively",
];

/* ---------------------------------------------------------
   Page
--------------------------------------------------------- */

export default function AboutPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeStep, setActiveStep] = useState(null);

  return (
    <>
    <Navbar />

    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* SECTION 1 — ABOUT HEADER */}
          <Card>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-full border border-slate-200 sm:h-28 sm:w-28">
                <Image
                  src="/Profile-Pic2.png"
                  alt="Saifullah Muhammad Abdulwahab"
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  About Me
                </p>
                <h1 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  I build. I break. I learn. I build again.
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                  I'm an Information Technology student and web developer.
                  I started with the fundamentals and kept building from
                  there — one project at a time. I enjoy turning ideas into
                  functional applications, and I learn primarily by
                  building things, breaking them, and figuring out why.
                  I'm still early in this, and still improving.
                </p>
                <p className="mt-4 text-sm font-medium text-slate-500">
                  Developer <span className="mx-1.5 text-slate-300">•</span>
                  IT Student <span className="mx-1.5 text-slate-300">•</span>
                  Builder
                </p>
              </div>
            </div>
          </Card>

          {/* SECTION 2 — MY JOURNEY */}
          <Card>
            <SectionHeading eyebrow="My Story" title="My Journey" />

            {/* Desktop: horizontal, Mobile: vertical */}
            <div className="flex flex-col gap-0 sm:flex-row sm:gap-2">
              {journey.map((item, i) => {
                const isActive = activeStage === i;
                return (
                  <button
                    key={item.stage}
                    onClick={() => setActiveStage(i)}
                    className={`relative flex flex-1 items-start gap-3 border-l-2 py-3 pl-4 text-left transition-colors sm:flex-col sm:items-start sm:border-l-0 sm:border-t-2 sm:pl-0 sm:pt-4 ${
                      isActive
                        ? "border-blue-600"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-blue-600" : "text-slate-700"
                      }`}
                    >
                      {item.stage}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-600">
              {journey[activeStage].detail}
            </div>
          </Card>

          {/* SECTION 3 — WHAT I WORK WITH */}
          <Card>
            <SectionHeading
              eyebrow="Stack"
              title="What I Work With"
              subtitle="Tools I actually use, not everything I've touched."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {Object.entries(stack).map(([group, items]) => (
                <div
                  key={group}
                  className="rounded-xl border border-slate-200 p-4"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SECTION 4 — HOW I WORK */}
          <Card>
            <SectionHeading eyebrow="Process" title="How I Work" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {howIWork.map((item, i) => (
                <div
                  key={item.step}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`rounded-xl border p-4 transition-all ${
                    activeStep === i
                      ? "border-blue-300 shadow-md -translate-y-0.5"
                      : "border-slate-200"
                  }`}
                >
                  <span className="text-xs font-semibold text-slate-300">
                    {item.step}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* SECTION 5 — WHAT I'M BUILDING */}
          <Card>
            <SectionHeading eyebrow="Currently" title="What I'm Building" />
            <div className="grid gap-4 sm:grid-cols-3">
              {building.map((proj) => (
                <div
                  key={proj.name}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 p-4 transition-shadow hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {proj.name}
                      </h3>
                      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                        {proj.status}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">
                      {proj.desc}
                    </p>
                    {proj.story && (
                      <p className="mt-2 text-[11px] italic text-slate-400">
                        {proj.story}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {proj.href && (
                      
                      <a
                        href={proj.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-blue-600 hover:text-blue-700"
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* SECTION 6 — BEYOND CODE */}
          <Card>
            <SectionHeading eyebrow="Beyond Code" title="Markets, mindset, and discipline." />

            <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
              {/* Text column */}
              <div>
                <p className="text-sm leading-relaxed text-slate-600">
                  Outside development, I study financial markets and trade. It isn't
                  about the money — it's the process: analyzing situations, thinking
                  in probabilities, managing risk, and reviewing my own decisions
                  honestly. Some of that thinking carries over into how I approach
                  building software.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  Trading isn't always green. Wins and losses are both part of the
                  process. What matters to me is understanding the decision, managing
                  the risk, reviewing the outcome, and improving the next execution.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {beyondCodeTraits.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trading gallery column */}
              <div>
                <div className="grid grid-cols-2 gap-3">
                  {/* Primary / larger screenshot */}
                  <div className="group relative col-span-2 overflow-hidden rounded-xl border border-slate-200">
                    <Image
                      src="/trade-review.jpg"
                      alt="Market analysis screenshot"
                      width={600}
                      height={360}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] sm:h-56"
                    />
                    <span className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1 text-[11px] font-medium text-slate-600 backdrop-blur-sm">
                      Market Analysis
                    </span>
                  </div>

                  {/* Supporting screenshot 1 */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200">
                    <Image
                      src="/trade-setup.jpg"
                      alt="Trade setup screenshot"
                      width={300}
                      height={220}
                      className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05] sm:h-32"
                    />
                    <span className="absolute bottom-1.5 left-1.5 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 backdrop-blur-sm">
                      Trade Setup
                    </span>
                  </div>

                  {/* Supporting screenshot 2 */}
                  <div className="group relative overflow-hidden rounded-xl border border-slate-200">
                    <Image
                      src="/trade-history.jpg"
                      alt="Trade history screenshot"
                      width={300}
                      height={220}
                      className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-[1.05] sm:h-32"
                    />
                    <span className="absolute bottom-1.5 left-1.5 rounded-md bg-white/90 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 backdrop-blur-sm">
                      Trade History
                    </span>
                  </div>
                </div>

                <p className="mt-2 text-[11px] text-slate-400">
                  A look into how I analyze and review trades — not a claim of results.
                </p>
              </div>
            </div>
          </Card>

          {/* SECTION 7 — PRINCIPLES */}
          <Card>
            <SectionHeading eyebrow="Mindset" title="A Few Things I Believe" />
            <div className="grid gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  {p}
                </div>
              ))}
            </div>
          </Card>

          {/* SECTION 8 — CURRENTLY */}
          <Card>
            <SectionHeading title="Currently" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-blue-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                  Currently Building
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  More complete web applications and projects that solve
                  real problems.
                </p>
              </div>
              <div>
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Currently Learning
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Going deeper into Next.js, frontend architecture,
                  Firebase, and better software development practices.
                </p>
              </div>
            </div>
          </Card>

          {/* SECTION 9 — FINAL CTA */}
          <Card className="text-center">
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
              Have a problem worth building?
            </h2>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Let's build something useful
              <span aria-hidden="true">→</span>
            </Link>
          </Card>
        </div>
      </div>
    </main>

    <Footer />
    </>
  );
}