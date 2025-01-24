import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-32 sm:py-48 px-6" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-shadow-lg leading-tight">
          Hi, I'm Swastik Verma
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl mx-auto">
          I'm a passionate full-stack developer who loves creating innovative solutions with clean code.
        </p>
        <div className="mt-8">
          <a href="#projects" className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 shadow-lg transition duration-300 transform hover:scale-105">
            See My Projects
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 sm:px-16 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">About Me</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          I'm a full-stack web developer specializing in building scalable, responsive web applications. I enjoy learning new technologies and tackling challenging problems to create functional, user-friendly products.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">My Skills</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 sm:px-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800">Frontend Development</h3>
            <ul className="mt-4 text-lg text-gray-700">
              <li>React.js</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800">Backend Development</h3>
            <ul className="mt-4 text-lg text-gray-700">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300" data-aos="flip-left">
            <h3 className="text-xl font-semibold text-gray-800">Other Tools</h3>
            <ul className="mt-4 text-lg text-gray-700">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>GraphQL</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
<section id="projects" className="py-20 px-6 sm:px-16 bg-white text-center" data-aos="fade-up">
  <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">My Projects</h2>
  
  {/* Projects List */}
  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {/* Project 1: Green Credit Marketplace */}
    <div className="project-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in-up">
      <Image src="/images/greencredit.jpg" alt="Green Credit Marketplace" width={350} height={250} className="rounded-lg"/>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Green Credit Marketplace</h3>
      <p className="mt-2 text-lg text-gray-700">
        Developed a Web3-based Green credit marketplace on the Ethereum blockchain using the MERN stack, Solidity, Web3.js, and MetaMask for secure and transparent transactions.
      </p>
      <a href="https://github.com/Swastik2740S" className="text-blue-600 hover:underline mt-4 inline-block">GitHub</a>
    </div>

    {/* Project 2: Grab The Work */}
    <div className="project-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in-up">
      <Image src="/project2.jpg" alt="Grab The Work" width={350} height={250} className="rounded-lg"/>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Grab The Work</h3>
      <p className="mt-2 text-lg text-gray-700">
        Developed a freelancing platform for posting, bidding, and real-time chat with Socket.IO.
      </p>
      <a href="https://github.com/Swastik2740S/GRAB_THE_WORK" className="text-blue-600 hover:underline mt-4 inline-block">GitHub</a>
    </div>

    {/* Project 3: Hand Gesture Recognition */}
    <div className="project-card bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105" data-aos="zoom-in-up">
      <Image src="/project3.jpg" alt="Hand Gesture Recognition" width={350} height={250} className="rounded-lg"/>
      <h3 className="mt-4 text-xl font-semibold text-gray-800">Hand Gesture Recognition</h3>
      <p className="mt-2 text-lg text-gray-700">
        Developed hand gesture recognition using MediaPipe for detecting hand signs and finger gestures.
      </p>
      <a href="https://github.com/Swastik2740S/Hand_guesture_recoginition/tree/main" className="text-blue-600 hover:underline mt-4 inline-block">GitHub</a>
    </div>
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-semibold">Get in Touch</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I'd love to collaborate on exciting projects. Feel free to reach out to me for any inquiries.
        </p>
        <div className="mt-8">
          <a href="mailto:swastikverma@example.com" className="px-8 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-100 shadow-lg transition duration-300 transform hover:scale-105">
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}
