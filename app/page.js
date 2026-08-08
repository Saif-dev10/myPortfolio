import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProfileHeader } from '../components/ProfileHeader';
import { AboutSection } from '../components/AboutSection';
import { FeaturedSection } from '../components/FeaturedSection';
import { Sidebar } from '../components/Sidebar';
import { featuredProjects } from '../lib/profileData';
// import { About } from './about/page';

import profilepic from '../public/Profile-Pic2.png';
import bannerPic from '../public/Banner-Image.png';
import attendanceTracker from '../public/attendance-system.png';
import tradecraft from '../public/TradeCraft-image.png';
import cocoDelight from '../public/coco-delight.png';

// Maps the imageKey stored in profileData.js to the statically imported
// asset. Static imports have to live in a file Next.js can analyze at build
// time, so this is the one place image files and project data meet.
const projectImages = {
  attendanceTracker: attendanceTracker.src,
  tradecraft: tradecraft.src,
  cocoDelight: cocoDelight.src,
};

const projectsWithImages = featuredProjects.map((project) => ({
  ...project,
  image: projectImages[project.imageKey],
}));

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start">
            {/* Main content */}
            <div className="flex min-w-0 flex-col gap-6">
              <ProfileHeader bannerSrc={bannerPic.src} avatarSrc={profilepic.src} />
              <AboutSection />
              <FeaturedSection projects={projectsWithImages} />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
