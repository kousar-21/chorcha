import React from 'react';
import { FaLaptopCode, FaUserTie, FaEnvelope, FaGithub, FaLinkedin, FaCodeBranch, FaCheckCircle } from 'react-icons/fa';

const AboutPage = () => {
  const personalData = {
    name: "Alex Johnson",
    title: "Full-Stack Developer | Creative Technologist",
    // Added a placeholder for the profile image source
    profileImage: "https://via.placeholder.com/150/4f46e5/ffffff?text=AJ", 
    bio: "Hello! I'm Alex, a passionate developer with 5+ years of experience building scalable and robust web applications. My expertise lies in the MERN stack (MongoDB, Express, React, Node.js), but I love diving into new technologies and solving complex problems with clean, efficient code. I believe technology should not just function, but inspire.",
    focusAreas: [
      "Frontend Architecture (React, Next.js)",
      "API Design and Development (Node.js, Express)",
      "Cloud Services & DevOps (AWS, Docker)",
      "Technical Writing and Mentorship",
    ],
    // Added a dedicated Tech Stack for visualization
    techStack: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "AWS", "Docker", "Next.js"],
    keyStat: "Successfully launched 12+ production applications and managed teams of 5 developers.",
    contact: {
      email: "alex.johnson@example.com",
      github: "https://github.com/your-github-profile",
      linkedin: "https://linkedin.com/in/your-linkedin-profile",
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl">
        
        {/* Header Section (With Profile Image) */}
        <header className="text-center p-8 bg-linear-to-r from-indigo-600 to-purple-600 text-white relative">
          {/* Profile Image */}
          <img 
            src={personalData.profileImage} 
            alt={`${personalData.name} Profile`} 
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white object-cover transform transition-transform duration-300 hover:scale-105 shadow-xl" 
          />
          <h1 className="text-4xl font-extrabold tracking-tight mb-1">
            {personalData.name}
          </h1>
          <p className="text-xl font-light opacity-90">
            {personalData.title}
          </p>
        </header>

        {/* Content Section */}
        <section className="p-8 lg:p-10 divide-y divide-gray-200">
          
          {/* 1. Bio/Introduction */}
          <div className="pb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center mb-4">
              <FaUserTie className="mr-3 text-indigo-500" /> 
              Who I Am
            </h2>
            <p className="text-gray-600 leading-relaxed italic border-l-4 border-indigo-400 pl-4 py-2 bg-indigo-50/50 rounded">
              {personalData.bio}
            </p>
          </div>

          {/* 2. Key Experience Snippet (New Section) */}
          <div className="py-8">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
              <FaCheckCircle className="mr-3 text-green-500" /> 
              My Impact
            </h2>
            <p className="text-lg text-gray-700 font-medium bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              {personalData.keyStat}
            </p>
          </div>

          {/* 3. Tech Stack (New Section) */}
          <div className="py-8">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
              <FaCodeBranch className="mr-3 text-purple-500" /> 
              Technical Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {personalData.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-1.5 text-sm font-medium text-white bg-gray-700 rounded-full shadow-md hover:bg-indigo-600 transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* 4. Expertise/Focus Areas (Modified original section) */}
          <div className="pt-8">
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center mb-4">
              <FaLaptopCode className="mr-3 text-indigo-500" /> 
              Focus & Methodology
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
              {personalData.focusAreas.map((area, index) => (
                <li key={index} className="flex items-start bg-indigo-50 p-4 rounded-lg border border-indigo-200 hover:shadow-md transition-shadow">
                  <span className="text-indigo-600 mr-3 mt-1"><FaCheckCircle className="h-4 w-4" /></span>
                  <span className="text-gray-700 font-medium">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Call to Action/Contact */}
          <div className="text-center pt-8 mt-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Let's Connect!
            </h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              I'm always open to discussing new projects, collaboration opportunities, or sharing insights. Reach out below!
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a 
                href={`mailto:${personalData.contact.email}`} 
                className="flex items-center text-white bg-indigo-500 hover:bg-purple-600 px-6 py-3 rounded-full shadow-lg transition duration-300 transform hover:scale-105 font-semibold"
              >
                <FaEnvelope className="mr-2" /> Say Hello
              </a>
              <a 
                href={personalData.contact.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition duration-300 text-4xl transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalData.contact.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-indigo-600 transition duration-300 text-4xl transform hover:scale-110"
                aria-label="GitHub Profile"
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