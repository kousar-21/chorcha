import React from 'react';
import { FaLaptopCode, FaUserTie, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  // Replace these placeholder values with your actual information!
  const personalData = {
    name: "Alex Johnson",
    title: "Full-Stack Developer | Creative Technologist",
    bio: "Hello! I'm Alex, a passionate developer with 5+ years of experience building scalable and robust web applications. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js), but I love diving into new technologies and solving complex problems with clean, efficient code. I believe technology should not just function, but inspire.",
    focusAreas: [
      "Frontend Architecture (React, Next.js)",
      "API Design and Development (Node.js, Express)",
      "Cloud Services & DevOps (AWS, Docker)",
      "Technical Writing and Mentorship",
    ],
    contact: {
      email: "alex.johnson@example.com",
      github: "https://github.com/your-github-profile",
      linkedin: "https://linkedin.com/in/your-linkedin-profile",
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-12 lg:p-16">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        
        {/* Header Section */}
        <header className="text-center p-8 bg-indigo-600 text-white">
          {/* You might place a profile image here */}
          {/* <img src="/path-to-your-image.jpg" alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover" /> */}
          <h1 className="text-4xl font-extrabold tracking-tight mb-1">
            {personalData.name}
          </h1>
          <p className="text-xl font-light opacity-90">
            {personalData.title}
          </p>
        </header>

        {/* Content Section */}
        <section className="p-8 lg:p-10">
          
          {/* 1. Bio/Introduction */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center mb-4">
              <FaUserTie className="mr-3 text-indigo-500" /> 
              Who I Am
            </h2>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600">
              {personalData.bio}
            </blockquote>
          </div>

          {/* 2. Expertise/Focus Areas */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 flex items-center mb-4">
              <FaLaptopCode className="mr-3 text-indigo-500" /> 
              My Focus
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {personalData.focusAreas.map((area, index) => (
                <li key={index} className="flex items-center bg-indigo-50 p-3 rounded-lg shadow-sm">
                  <span className="text-indigo-600 mr-2 font-bold text-xl">•</span>
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Call to Action/Contact */}
          <div className="text-center pt-6 border-t border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new projects, collaboration opportunities, or just sharing coffee virtually.
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href={`mailto:${personalData.contact.email}`} 
                className="flex items-center text-white bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-full shadow-lg transition duration-300"
              >
                <FaEnvelope className="mr-2" /> Email Me
              </a>
              <a 
                href={personalData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition duration-300 text-3xl"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalData.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition duration-300 text-3xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutPage;