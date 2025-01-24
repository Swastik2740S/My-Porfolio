import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const Resume = () => {
  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen p-8">
      {/* Header */}
      <header className="mb-12 animate-fadeIn">
  <div className="flex justify-between items-center">
    {/* Swastik Verma Name */}
    <h1 className="text-4xl font-bold text-blue-800">
      <Link href="/">Swastik Verma</Link>
    </h1>

    {/* Download Resume Button with Downward Arrow */}
    <a
      href="/RESUME%20(1).pdf"  // Path to your resume in the public folder
      download="Swastik_Verma_Resume.pdf"  // The name the file will be saved as
      className="flex items-center justify-center gap-2 font-medium py-2 px-6 sm:py-3 sm:px-8 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300"
    >
      Download Resume
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </a>
  </div>

  <p className="text-lg text-gray-600 mt-4">Khanna, Punjab</p>
  <p className="mt-2">
    Email: <a href="mailto:swastik2740s@gmail.com" className="text-blue-600 hover:underline">swastik2740s@gmail.com</a> | Phone: +91-8725873505
  </p>
  <p className="mt-2">
    <a href="https://www.linkedin.com/in/swastik-verma-153b30253/" className="text-blue-600 hover:underline">LinkedIn</a> |
    <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline"> GitHub</a> |
    <a href="https://leetcode.com/u/swastik2740s/" className="text-blue-600 hover:underline"> LeetCode</a>
  </p>
</header>





      {/* Main Content */}
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Education */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Education</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Chitkara University</strong> - B.E CSE (CGPA: 8.2)
              <br />Sept 2022 – Present
            </li>
            <li>
              <strong>DPS Khanna</strong> - Class 12 (CBSE) (Percentage: 90%)
              <br />April 2021 – March 2022
            </li>
            <li>
              <strong>DPS Khanna</strong> - Class 10 (CBSE) (Percentage: 91%)
              <br />April 2019 – March 2020
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Data Structures & Algorithms, Operating Systems, Computer Networks</li>
            <li>Database Management System (DBMS), Version Control (Git), OOPS Concept</li>
            <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>Machine Learning (Python), Linux</li>
          </ul>
        </section>

        {/* Experience */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Experience</h2>
          <h3 className="text-lg text-gray-600 mb-2">Hackathons</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>HackIndia 2024 - Delhi: National Winner</li>
            <li>Hackfest 2024 - Coimbatore: Top 3 in Regional Round, Top 10 in Final Round</li>
            <li>Hack Wars 2024 - Chandigarh: Top 10 in Final Round</li>
          </ul>

          <h3 className="text-lg text-gray-600 mt-6 mb-2">Clubs</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>NSS Core Member</li>
            <li>Core Member of IEEE - Organizer for 1 year</li>
          </ul>

          <h3 className="text-lg text-gray-600 mt-6 mb-2">Volunteer Work</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Participated in Green India Clean India Camp (7-day camp under Punjab Act No. 23 of 2010)</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Projects</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Green Credit Marketplace</strong> (National Win Project)
              <br />
              Developed a Web3-based Green credit marketplace on the Ethereum blockchain using the MERN stack, Solidity, Web3.js, and MetaMask for secure and transparent transactions.
              <br />
              <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline">GitHub</a>
            </li>
            <li>
              <strong>Grab The Work</strong>
              <br />
              Developed a freelancing platform for posting, bidding, and real-time chat with Socket.IO.
              <br />
              <a href="https://github.com/Swastik2740S/GRAB_THE_WORK" className="text-blue-600 hover:underline">GitHub</a>
            </li>
            <li>
              <strong>Hand Gesture Recognition</strong>
              <br />
              Developed hand gesture recognition using MediaPipe for detecting hand signs and finger gestures.
              <br />
              <a href="https://github.com/Swastik2740S/Hand_guesture_recoginition/tree/main" className="text-blue-600 hover:underline">GitHub</a>
            </li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Achievements</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Team "Supersquad" won 1st place at HackIndia Ignite, representing Chitkara University</li>
            <li>Data Structures and Algorithms: <a href="https://leetcode.com/u/swastik2740s/" className="text-blue-600 hover:underline">LeetCode Profile</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Resume;
