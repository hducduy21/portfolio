import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Github, Linkedin, Code, Briefcase, GraduationCap, User, Menu, X } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "OAM | NashTech",
      period: "March 2025 - June 2025",
      description: "Participated in the Online Asset Management (OAM) project, a web application for managing company assets throughout their lifecycle.",
      responsibility: "Fullstack developer.",
      tech: ["Java", "Spring Boot", "ReactJs", "Tailwind"],
      teamSize: 7
    },
    {
      title: "Customer App | TechCoop",
      period: "December 2024 - February 2025",
      description: "Displaying dashboards of payment information with partners.",
      responsibility: "Developed frontend and modify the backend as needed.",
      tech: ["Golang", "SQLite", "HTMX", "AlpineJs", "Vite", "Tailwind"],
      teamSize: 2
    },
    {
      title: "TaskSmart",
      period: "April 2024 - September 2024",
      description: "A team's project management website. Users can create and manage projects within individual workspaces, assign tasks to each member according to a workflow.",
      responsibility: "Fully developed the backend, partially worked on the frontend, built the entire microservices system and AI features.",
      tech: ["Java", "Spring Boot", "ReactJs", "TypeScript", "Microservices", "MongoDB"],
      github: "https://github.com/hducduy21/TaskSmart"
    },
    {
      title: "JobNet | NewAI",
      period: "May 2023 - January 2024",
      description: "A job search platform catering to job seekers and offering job postings for employers, integrated with smartcv.com.vn.",
      responsibility: "Designed, developed, and implemented both frontend and backend.",
      tech: ["Java", "Spring Boot", "ReactJs", "TypeScript", "Microservices", "Micro-frontends", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-blue-600">
              <TypewriterEffect 
                text="Duy Duc Hoang" 
                speed={120}
                delay={500}
                className="font-bold"
                showCursor={false}
              /></div>
            
            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">
              {['home', 'about', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="bg-white border-t border-blue-100 md:hidden">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full px-4 py-2 text-left text-gray-600 capitalize transition-colors duration-200 rounded-lg hover:text-blue-600 hover:bg-blue-50"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex items-center justify-center min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-up">
                <h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                  Hi, I'm{' '}
                  <span className="text-blue-600">Hoang Duc Duy</span>
                </h1>
                <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
                  Software Engineer & Full-Stack Developer
                </p>
                <p className="max-w-2xl mb-8 text-lg text-gray-500">
                  Passionate about creating innovative web applications and microservices. 
                  Experienced in Java, Spring Boot, ReactJS, and modern development practices.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-3 text-white transition-all duration-300 transform bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl"
                  >
                    Get In Touch
                  </button>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className="px-8 py-3 text-blue-600 transition-all duration-300 transform border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105"
                  >
                    View My Work
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="overflow-hidden transition-transform duration-300 transform rounded-full shadow-2xl w-80 h-80 sm:w-96 sm:h-96 hover:scale-105">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hducduy21.jpg-2Tka0mnKpxvxzai5UCYJtBcOMbEl98.jpeg"
                    alt="Hoang Duc Duy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute flex items-center justify-center w-24 h-24 bg-blue-600 rounded-full shadow-lg -bottom-4 -right-4 animate-bounce">
                  <Code className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">About Me</h2>
            <div className="w-24 h-1 mx-auto bg-blue-600"></div>
          </div>
          
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 mr-4 text-blue-600" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                  <p className="text-gray-600">Ton Duc Thang University (2020-2024)</p>
                  <p className="text-gray-500">Bachelor of Software Engineering</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="mb-4 text-lg font-semibold text-gray-900">Relevant Coursework</h4>
                <div className="flex flex-wrap gap-2">
                  {['OOP', 'Data Structure & Algorithm', 'Web Development', 'Database Management', 'Design Pattern'].map((course) => (
                    <span key={course} className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="mb-6 text-xl font-semibold text-gray-900">Technical Skills</h3>
              <div className="space-y-4">
                {[
                  { category: 'Backend', skills: ['Java', 'Spring Boot', 'Golang', 'Microservices'] },
                  { category: 'Frontend', skills: ['ReactJS', 'TypeScript', 'HTMX', 'Microfrontends'] },
                  { category: 'Styling', skills: ['Tailwind CSS', 'Bootstrap'] },
                  { category: 'Database', skills: ['SQL','Postgres','MongoDB', 'SQLite'] },
                  { category: 'Tools', skills: ['Azure DevOps', 'Docker', 'Git', 'GitHub'] }
                ].map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <h4 className="mb-2 font-medium text-gray-900">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm text-gray-700 transition-colors duration-200 bg-gray-100 rounded-lg hover:bg-blue-100 hover:text-blue-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Work Experience</h2>
            <div className="w-24 h-1 mx-auto bg-blue-600"></div>
          </div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="p-8 transition-shadow duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1">
                <div className="flex flex-col mb-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="mb-2 font-medium text-blue-600">{exp.period}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Team size: {exp.teamSize}
                  </div>
                </div>
                
                <p className="mb-4 text-gray-700">{exp.description}</p>
                <p className="mb-4 text-gray-600"><strong>Responsibility:</strong> {exp.responsibility}</p>
                
                <div className="mb-4">
                  <h4 className="mb-2 font-semibold text-gray-900">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {exp.github && (
                  <a
                    href={exp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 transition-colors duration-200 hover:text-blue-800"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[600px] py-20 bg-blue-600">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">Get In Touch</h2>
            <div className="w-24 h-1 mx-auto mb-8 bg-white"></div>
            <p className="max-w-2xl mx-auto text-lg text-blue-100">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <a
              href="mailto:hducduy2102@gmail.com"
              className="p-6 text-center transition-all duration-300 transform bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 group"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-2 font-semibold text-white">Email</h3>
              <p className="text-sm text-blue-100 break-all">hducduy2102@gmail.com</p>
            </a>
            
            <a
              href="tel:0898386550"
              className="p-6 text-center transition-all duration-300 transform bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 group"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-2 font-semibold text-white">Phone</h3>
              <p className="text-blue-100">0898386550</p>
            </a>
            
            <a
              href="https://github.com/hducduy21"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center transition-all duration-300 transform bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 group"
            >
              <Github className="w-8 h-8 mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-2 font-semibold text-white">GitHub</h3>
              <p className="text-blue-100">hducduy21</p>
            </a>
            
            <a
              href="https://www.linkedin.com/in/hducduy21/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 text-center transition-all duration-300 transform bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-white transition-transform duration-300 group-hover:scale-110" />
              <h3 className="mb-2 font-semibold text-white">LinkedIn</h3>
              <p className="text-blue-100">hducduy21</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-white bg-gray-900">
        <div className="max-w-6xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <p className="text-gray-400">
            © 2025 hducduy21.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;