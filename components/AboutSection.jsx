import { coreSystems, interests } from '../lib/profileData';

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <h2 id="about-heading" className="text-lg font-semibold text-slate-900">
        About
      </h2>

      <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
        <p>
          Most products don&rsquo;t fail because of ideas. They fail because they don&rsquo;t
          solve real problems in a simple and usable way.
        </p>

        <p>
          I&rsquo;m an Information Technology student and web developer focused on building
          practical, user-centered web applications. My journey started with learning HTML and
          CSS on a mobile phone in secondary school, long before I had access to a computer. From
          there, I kept building step by step, moving from static pages to full web applications
          using JavaScript, React, Next.js, and Firebase.
        </p>

        <p>I enjoy turning ideas into working systems, not just designs or concepts.</p>
      </div>

      <h3 className="mt-8 text-base font-semibold text-slate-900">What I&rsquo;ve built so far</h3>
      <div className="mt-4 space-y-4">
        <div>
          <p className="font-medium text-slate-900">Attendance Tracker System</p>
          <p className="mt-1 text-slate-600">
            A web application that helps students track course attendance and determine exam
            eligibility based on attendance requirements (75% threshold).
          </p>
        </div>
        <div>
          <p className="font-medium text-slate-900">Trade Craft</p>
          <p className="mt-1 text-slate-600">
            A trading journal platform where users can log trades, analyze performance over time,
            manage risk, calculate position sizing, and review weekly and monthly trading
            progress.
          </p>
        </div>
      </div>
      <p className="mt-4 text-slate-700">
        Both projects were designed and built to solve real user problems, from idea stage to
        deployment.
      </p>

      <h3 className="mt-8 text-base font-semibold text-slate-900">
        Beyond building interfaces, I&rsquo;ve worked on core application systems including
      </h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        {coreSystems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="mt-6 text-slate-700">
        Before building any product, I spend time researching how existing solutions work, what
        competitors are doing, and where gaps exist. This helps me design more intentional and
        useful features instead of building blindly.
      </p>

      <h3 className="mt-8 text-base font-semibold text-slate-900">I enjoy</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        {interests.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p className="mt-6 text-slate-700">
        Currently, I&rsquo;m improving my skills in modern web development with the goal of
        becoming a well-rounded full-stack developer capable of building and scaling real-world
        applications.
      </p>

      <p className="mt-4 font-medium text-slate-900">
        If you&rsquo;re building a product and need someone who can learn fast, think through
        problems, and turn ideas into working software, I&rsquo;m open to connecting.
      </p>
    </section>
  );
}
