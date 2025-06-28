'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import "aos/dist/aos.css";
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaAws, FaDatabase, FaCode, FaRobot,
  FaHandPointer, FaTasks, FaUsers, FaLock, FaSpaceShuttle, FaGithub, FaEnvelope,
  FaTrophy, FaMedal, FaCertificate, FaLeaf
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTailwindcss, SiRedux, SiSpring, SiJavascript, SiMongodb, SiPostgresql, SiDjango,
  SiFlask, SiGraphql, SiRedis, SiKubernetes, SiRabbitmq, SiApachekafka
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { SiLinux } from 'react-icons/si';


const projects = [
  {
    name: "Green Credit Marketplace",
    description: "Web3 platform for trading carbon credits on Ethereum. Built with MERN stack, Solidity, Web3.js, and MetaMask integration.",
    image: "/images/green1.png",
    github: "https://github.com/Swastik2740S",
  },
  {
    name: "Grab The Work",
    description: "Freelancing platform with project posting, bidding, and real-time chat. Powered by React, Node.js, MongoDB, and Socket.IO.",
    image: "/images/grab2.png",
    github: "https://github.com/Swastik2740S/GRAB_THE_WORK",
  },
  {
    name: "Employee Management System (EMS)",
    description: "Web-based system for employee administration with role-based access, attendance, and payroll features.",
    image: "/images/ems1.png",
    github: "https://github.com/Swastik2740S/EMS_IP",
  },
  {
    name: "SmartTask",
    description: "Task management system with Spring Boot backend and Next.js frontend. Features JWT authentication, role-based access, and Swagger API docs.",
    image: "/images/smart.png",
    github: "https://github.com/Swastik2740S/smarttask",
  },
  {
    name: "Immutable Data Integrity Solutions for Space Exploration",
    description: "Blockchain-based solution for secure, tamper-proof data storage in space exploration.",
    image: "/images/space1.png",
    github: "https://github.com/khushsharma509/Immutable-Data-Integrity-Solutions-for-Space-Exploration",
  },
  {
    name: "Hand Gesture Recognition",
    description: "Real-time hand gesture detection using MediaPipe and Python. Supports accessibility and intuitive control.",
    image: "/images/hand1.jpg",
    github: "https://github.com/Swastik2740S/Hand_guesture_recoginition/tree/main",
  },
];

export default function Home() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
    });
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-32 sm:py-48 px-6" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-shadow-lg leading-tight">
          Hi, I'm <span className="text-yellow-200">Swastik Verma</span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          <Typewriter
            words={[
              "Full-Stack Developer",
              "Blockchain Enthusiast",
              "Creating Scalable Web Solutions",
              "With Cutting-Edge Technologies"
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            className="inline-block"
          />
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-black rounded-full shadow-lg text-lg font-semibold hover:bg-gray-300 transition-all duration-300 transform hover:scale-110"
          >
            See My Projects
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 sm:px-16 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">About Me</h2>
        <div className="flex flex-col items-center mt-8">
          {/* Profile Photo */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-600 mb-6 group">
            <Image
              src="/images/profile4.jpg" // Replace with your image path
              alt="Swastik Verma"
              width={128}
              height={128}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm a full-stack developer passionate about building scalable web applications with modern technologies. My background includes both frontend and backend development, with a focus on intuitive user experiences and robust backend solutions.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            I enjoy tackling complex problems and am always eager to learn new technologies. My experience extends to Java-based authentication systems, focusing on JWT and Spring Security for secure, role-based access control.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="/Resume"
              className="px-4 py-2 bg-blue-600 text-white rounded-full shadow-md text-base font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              View Resume
            </a>
            <a
              href="https://github.com/Swastik2740S"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-full shadow-md text-base font-semibold hover:bg-gray-700 transition-all duration-300"
            >
              My GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12">
          {/* Frontend */}
          <div className="bg-gradient-to-br from-blue-100 to-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <FaCode className="text-blue-500" /> Frontend Development
            </h3>
            <ul className="mt-4 space-y-4 text-lg text-gray-700">
              <li className="flex items-center gap-2 group relative">
                <FaReact className="text-cyan-500" /> React.js
                
              </li>
              <li className="flex items-center gap-2"><SiNextdotjs className="text-gray-800" /> Next.js</li>
              <li className="flex items-center gap-2"><SiTailwindcss className="text-teal-400" /> Tailwind CSS</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-gradient-to-br from-green-100 to-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <FaDatabase className="text-green-600" /> Backend Development
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center gap-2"><FaNodeJs className="text-green-700" /> Node.js</li>
                <li className="flex items-center gap-2"><SiMongodb className="text-green-500" /> MongoDB</li>
                <li className="flex items-center gap-2"><FaDatabase className="text-yellow-600" /> SQL</li>
                <li className="flex items-center gap-2"><SiPostgresql className="text-blue-700" /> PostgreSQL</li>

              </ul>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center gap-2"><FaCode className="text-gray-800" /> Express.js</li>
                <li className="flex items-center gap-2"><FaLeaf className="text-green-600" /> Spring Boot</li>
                <li className="flex items-center gap-2"><FaAws className="text-orange-400" /> AWS</li>
                <li className="flex items-center gap-2"><FaDocker className="text-blue-400" /> Docker</li>
              </ul>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gradient-to-br from-purple-100 to-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center gap-2">
              <FaRobot className="text-purple-700" /> Other Skills
            </h3>
            <ul className="mt-4 space-y-4 text-lg text-gray-700">
              <li className="flex items-center gap-2"><FaRobot className="text-purple-400" /> AIML</li>
              <li className="flex items-center gap-2"><FaCode className="text-gray-600" /> DSA
                <span className="ml-2 bg-yellow-300 text-xs px-2 py-0.5 rounded-full">150+ LeetCode</span>
              </li>
              <li className="flex items-center gap-2"><FaJava className="text-red-600" /> Java</li>
              <li className="flex items-center gap-2"><SiLinux className="text-gray-800" /> Linux</li>
            </ul>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-16 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">My Projects</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card flex flex-col bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 group"
              data-aos="zoom-in-up"
            >
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 flex items-center gap-2 justify-center">
                {project.name === "Green Credit Marketplace" && <FaCode />}
                {project.name === "Grab The Work" && <FaTasks />}
                {project.name === "Employee Management System (EMS)" && <FaUsers />}
                {project.name === "SmartTask" && <FaLock />}
                {project.name === "Immutable Data Integrity Solutions for Space Exploration" && <FaSpaceShuttle />}
                {project.name === "Hand Gesture Recognition" && <FaHandPointer />}
                {project.name}
              </h3>
              <div className="flex-1 min-h-[100px] mt-2 text-lg text-gray-700">
                {project.description}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-4 flex items-center gap-2 justify-center"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
 {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 sm:px-16 bg-gray-50 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">Achievements</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* HackIndia 2024 Winner */}
          <a
            href="https://www.linkedin.com/posts/hackindiaxyz_hackindia2024-hackindia2024-hackathon-activity-7260259500111114240-y2pZ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition-all duration-300 group" data-aos="zoom-in-up">
              <FaTrophy className="text-yellow-500 text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                HackIndia 2024 Winner
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">1st Place</span>
              </h3>
              <p className="mt-2 text-lg text-gray-700">Led the team to 1st place in a national blockchain hackathon among 2800+ teams.</p>
              <div className="mt-4 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                
              </div>
            </div>
          </a>

          {/* Hackfest 2024 Finalist */}
          <a
            href="https://www.linkedin.com/posts/teenagoyal_subsquad-subsquad-hackfest24-ugcPost-7226511436066250753-1z33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition-all duration-300 group" data-aos="zoom-in-up">
              <FaMedal className="text-orange-400 text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                Hackfest 2024 Finalist
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Top 3</span>
              </h3>
              <p className="mt-2 text-lg text-gray-700">Top 3 in regional, Top 10 nationally for scalable backend and IPFS integration.</p>
              <div className="mt-4 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                
              </div>
            </div>
          </a>

          {/* LeetCode 150+ DSA Problems */}
          <a
            href="https://leetcode.com/u/swastik2740s/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:no-underline"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transform transition-all duration-300 group" data-aos="zoom-in-up">
              <FaCertificate className="text-blue-500 text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                LeetCode 150+ DSA Problems
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Solved</span>
              </h3>
              <p className="mt-2 text-lg text-gray-700">Solved 150+ data structures and algorithms problems in Java.</p>
              <div className="mt-4 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                
              </div>
            </div>
          </a>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I'd love to collaborate on exciting projects. Feel free to reach out to me for any inquiries.
        </p>
        <div className="mt-8">
          <a
            href="mailto:swastikverma@example.com"
            className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center gap-2 justify-center mx-auto w-max"
          >
            <FaEnvelope /> Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
