import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import {  FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaCode, FaGraduationCap, FaTools, FaBriefcase, FaProjectDiagram, FaTrophy } from 'react-icons/fa';

const Resume = () => {
  return (
    <div>
      <Navbar />
      <div className="font-sans bg-white text-gray-900 min-h-screen px-4 py-8">
        {/* Header */}
        <header className="max-w-4xl mx-auto mb-12 animate-fadeIn">
          {/* Profile Photo (Optional) */}
          {/* <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 mb-6 mx-auto">
            <Image
              src="/images/profile.jpg"
              alt="Swastik Verma"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div> */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            {/* Name and Title */}
            <div>
              <h1 className="text-4xl font-bold text-blue-800">
                <Link href="/" className="hover:underline">Swastik Verma</Link>
              </h1>
              <p className="text-lg text-gray-700 mt-2 font-medium">
                Computer Science Undergraduate | Full-Stack & Blockchain Developer
              </p>
              <p className="text-gray-600 mt-1">Khanna, Punjab</p>
            </div>

            {/* Download Resume Button */}
            <a
              href="/Swastik_Verma.pdf"
              download="Swastik_Verma_Resume.pdf"
              className="flex items-center justify-center gap-2 font-medium py-2 px-6 border border-solid border-black shadow-custom shadow-black hover:bg-gray-300 hover:text-black transition-all duration-300 rounded-lg"
            >
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Contact & Social */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 text-base">
            <span>
              <span className="font-medium">Email:</span>{' '}
              <a href="mailto:onamverma8@gmail.com" className="text-blue-600 hover:underline">onamverma8@gmail.com</a>
            </span>
            <span>
              <span className="font-medium">Phone:</span> +91-8725873505
            </span>
            <span className="flex flex-wrap items-center gap-2">
              <a href="https://www.linkedin.com/in/swastik-verma-153b30253/" className="text-blue-600 hover:underline flex items-center gap-1">
                <FaLinkedin /> LinkedIn
              </a>
              <span>|</span>
              <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline flex items-center gap-1">
                <FaGithub /> GitHub
              </a>
              <span>|</span>
              <a href="https://leetcode.com/u/swastik2740s/" className="text-blue-600 hover:underline flex items-center gap-1">
                <FaCode /> LeetCode
              </a>
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <FaGraduationCap /> Education
            </h2> */}
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Education</h2>
            <ul className="space-y-3">
              <li>
                <strong>Chitkara University</strong> — B.E. Computer Science (CGPA: 8.2)
                <br /><span className="text-sm text-gray-600">Sept 2022 – Present</span>
              </li>
              <li>
                <strong>DPS Khanna</strong> — Class 12 (CBSE), 90%
                <br /><span className="text-sm text-gray-600">2021 – 2022</span>
              </li>
              <li>
                <strong>DPS Khanna</strong> — Class 10 (CBSE), 91%
                <br /><span className="text-sm text-gray-600">2019 – 2020</span>
              </li>
            </ul>
          </section>

          {/* Skills */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <FaTools /> Skills
            </h2> */}
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Skills</h2>
            <ul className="space-y-2">
              <li><strong>Languages:</strong> JavaScript, Java, Python, Solidity</li>
              <li><strong>Frontend:</strong> React, Next.js, HTML, CSS, Tailwind</li>
              <li><strong>Backend:</strong> Node.js, Express.js, REST APIs</li>
              <li><strong>Blockchain:</strong> Web3.js, Ethers.js, Hardhat, MetaMask, IPFS</li>
              <li><strong>Database:</strong> MongoDB, MySQL</li>
              <li><strong>Other:</strong> Git, Docker, AWS EC2, Postman, Linux, OOPS, DSA</li>
            </ul>
          </section>

          {/* Experience & Leadership */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <FaBriefcase /> Experience & Leadership
            </h2> */}
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Experience & Leadership</h2>
            <div>
              <h3 className="font-semibold text-gray-700">Hackathons</h3>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li><strong>HackIndia 2024:</strong> National Winner (Blockchain Project)</li>
                <li><strong>Hackfest 2024:</strong> Top 3 Regional, Top 10 National</li>
                <li><strong>Hack Wars 2024:</strong> Top 10 Finalist</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-700">Clubs & Volunteering</h3>
              <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                <li>NSS Core Member & Event Organizer</li>
                <li>IEEE Core Member (Organized 6+ technical events)</li>
                <li>Green India Clean India Camp (7-day volunteer, Punjab Act No. 23 of 2010)</li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 lg:col-span-2">
            {/* <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <FaProjectDiagram /> Projects
            </h2> */}
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Projects</h2>
            <ul className="space-y-4">
              <li>
                <strong>Green Credit Marketplace</strong> <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Winner</span>
                <br />
                <span className="text-sm">
                  Web3-based platform for trading carbon credits on Ethereum (MERN, Solidity, Web3.js, MetaMask).
                </span>
                <br />
                <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
                <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline flex items-center gap-1">
                   <FaExternalLinkAlt /> Live Demo
                </a>
              </li>
              <li>
                <strong>Grab The Work</strong>
                <br />
                <span className="text-sm">
                  Freelancing platform with project posting, bidding, and real-time chat (React, Node.js, Socket.IO).
                </span>
                <br />
                <a href="https://github.com/Swastik2740S/GRAB_THE_WORK" className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <strong>Hand Gesture Recognition</strong>
                <br />
                <span className="text-sm">
                  Hand gesture detection using MediaPipe for sign and finger recognition.
                </span>
                <br />
                <a href="https://github.com/Swastik2740S/Hand_guesture_recoginition/tree/main" className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <strong>Portfolio Website</strong>
                <br />
                <span className="text-sm">
                  Built and deployed with Next.js, featuring responsive design and project showcases.
                </span>
                <br />
                <a href="https://github.com/Swastik2740S/portfolio" className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaGithub /> GitHub
                </a>
              </li>
            </ul>
          </section>

          {/* Achievements */}
          <section className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            {/* <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center gap-2">
              <FaTrophy /> Achievements
            </h2> */}
            <h2 className="text-xl font-semibold text-blue-800 mb-4">Achievements</h2>
            <ul className="space-y-2">
              <li>
                Team <strong>Supersquad</strong> won 1st place at HackIndia Ignite, representing Chitkara University <span className="ml-2 bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Winner</span>
              </li>
              <li>
                <strong>LeetCode:</strong> 150+ DSA problems solved in Java <a href="https://leetcode.com/u/swastik2740s/" className="text-blue-600 hover:underline flex items-center gap-1">
                  <FaCode /> Profile
                </a>
              </li>
              <li>
                <strong>HackIndia Ignite 2024:</strong> 1st place among 2500+ teams (Blockchain track)
              </li>
            </ul>
          </section>
        </main>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
