import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import profilepic from '../public/Profile-Pic.png';
import bannerPic from '../public/Banner-Image.png';
import attendanceTracker from '../public/attendance-system.png';
import tradecraft from '../public/TradeCraft-image.png';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Grid */}
      <section className="">

        <div>
          {/* Main Content */}
          <div className="mt-8 shadow-sm border border-gray-200 rounded-lg w-2/3 mx-auto">

          {/* Banner */}
            <div className="w-full h-50 rounded-lg overflow-hidden relative">
              <img 
                src={bannerPic.src}
                alt="Banner Image"
                width="100%"
                height="200%"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>

            {/* Profile picture */}
            <div className="w-40 h-40 rounded-full absolute top-48 left-55">
              <img 
                src={profilepic.src}
                alt="Profile Picture"
                width="100"
                height="100"
                className="rounded-full w-full h-full object-cover" 
              />
            </div>

            <aside className="mx-6 flex justify-between items-center pb-6">
              <div className="w-80">
                <h1 className="mt-25 text-lg font-semibold">Saifullah Muhammad Abdulwahab</h1>

                <p className="mt-6">I Help Businesses Build Interfaces Users Actually Want to Use.</p>

                <p className="mt-2 text-gray-600">Nigeria . <a className="text-blue-800 hover:underline font-semibold" href="#">Contact info</a></p>
              </div>

              <div>
                <h2 className="text-lg text-lg pr-20">Frontend Developer</h2>
              </div>
            </aside>
          </div>

          {/* About brief */}

          <section className="mt-8 shadow-sm border border-gray-200 rounded-lg w-2/3 mx-auto">
          <div className="mx-8 my-6">

            <p className="text-lg font-semibold mb-2">About</p>

            <p className="mt-4">
              Most products don’t fail because of ideas. They fail because they don’t solve real problems in a simple and usable way.

    I’m an Information Technology student and web developer focused on building practical, user-centered web applications. My journey started with learning HTML and CSS on a mobile phone in secondary school, long before I had access to a computer. From there, I kept building step by step, moving from static pages to full web applications using JavaScript, React, Next.js, and Firebase.

    I enjoy turning ideas into working systems, not just designs or concepts.

    What I’ve built so far:

    ✅  Attendance Tracker System 
    A web application that helps students track course attendance and determine exam eligibility based on attendance requirements (75% threshold).

    ✅ Trade Craft
    A trading journal platform where users can log trades, analyze performance over time, manage risk, calculate position sizing, and review weekly and monthly trading progress.

    Both projects were designed and built to solve real user problems, from idea stage to deployment.

    Beyond building interfaces, I’ve worked on core application systems including:

    - User authentication systems
    - Database design and integration (Firebase)
    - State management across applications
    - Deployment workflows (Vercel)
    - Debugging and dependency resolution in real projects

    Before building any product, I spend time researching how existing solutions work, what competitors are doing, and where gaps exist. This helps me design more intentional and useful features instead of building blindly.

    I enjoy:

    - Learning new technologies quickly
    - Breaking down problems and debugging issues
    - Building responsive user interfaces
    - Turning ideas into functional applications
    - Working independently from concept to deployment
    - Understanding what users actually need, not just what looks good

    Currently, I’m improving my skills in modern web development with the goal of becoming a well-rounded full-stack developer capable of building and scaling real-world applications.

    If you're building a product and need someone who can learn fast, think through problems, and turn ideas into working software, I’m open to connecting.
            </p>
          </div>
          </section>

          {/* Features Section */}

          <section className="mt-8 shadow-sm border border-gray-200 rounded-lg w-2/3 mx-auto">
          <div className="mx-8 my-6">

            <p className="text-lg font-semibold mb-2">Featured</p>

            {/* Features Grid */}
            <div className="mt-4 grid grid-cols-2 gap-4">

              {/* Feature 1 */}

              <div className="border border-gray-300 rounded-lg p-4">

                <h3 className="text-lg font-semibold mb-2">Attendance Tracker System</h3>

                <p className="text-gray-500 text-sm mb-2">Link</p>

                <img 
                  src={attendanceTracker.src}
                  alt="Attendance Tracker System"
                  width="100"
                  height="100" 
                  className="w-full h-auto rounded-lg mb-2"
                />

                <p className="text-gray-600">A web application that helps students track course attendance and determine exam eligibility based on attendance requirements (75% threshold).</p>

                <p className="my-4 text-gray-500">Link to demo:</p>

                <a 
                  href="https://attendance-app-nine-rosy.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline font-semibold"
                >
                  View Demo
                </a>

              </div>

              {/* Feature 2 */}

              <div className="border border-gray-300 rounded-lg p-4">

                <h3 className="text-lg font-semibold mb-2">TradeCraft</h3>

                <p className="text-gray-500 text-sm mb-2">Link</p>

                <img 
                  src={tradecraft.src}
                  alt="TradeCraft"
                  width="100"
                  height="100" 
                  className="w-full h-auto rounded-lg mb-2"
                />

                <p className="text-gray-600">TradeCraft is a trading journal and risk management platform that helps traders track their performance and manage account balances, analyze trading history, and calculate risk.</p>

                <p className="my-4 text-gray-500">Link to demo:</p>

                <a 
                  href="https://trade-craft-app-ryf8.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-800 hover:underline font-semibold"
                >
                  View Demo
                </a>

              </div>

            </div>

          </div>
          </section>
        </div>
      </section>



      <Footer />
    </>
  );
}
