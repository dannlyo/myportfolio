import { useState } from 'react';
import keyboardBg from '../assets/keyboard.png';
import togo from '../assets/projects/togo.png';
import martfury from '../assets/projects/mart.png';
import coffeeShop from '../assets/projects/coffee.png';
import blackPro from '../assets/projects/black.png';
import donakion from '../assets/projects/donakion.png';
import eduma from '../assets/projects/eduma.png';

const projects = [
  {
    title: 'Togo',
    language: 'React Js ● Scss ● Mongo DB ● Nest Js',
    description: 'This React app was created to let people share their travel experiences by posting images and text about their journeys. All posts are publicly visible, and at the end the most inspiring post is highlighted.',
    image: togo,
    projectType: 'Apps'
  },
  {
    title: 'Martfury',
    language: 'Vue Js ● Tailwind ● SQlite ● Nest Js',
    description: 'Martfury is a modern and flexible eCommerce. The theme is suited for marketplace, electronic store, furniture store, clothing store, hitech store, book store, medicine store, accessories store… With the theme, you can create easily and quickly your own store.',
    image: martfury,
    projectType: 'Websites'
  },
  {
    title: 'Coffee Shop',
    language: 'React Js ● Scss ● Mongo DB ● Nest Js',
    description: 'This Coffee shop app was built to allow coffee lovers to share their favorite coffee moments by posting images and text. All posts are visible to everyone, and at the end the most loved post is featured.',
    image: coffeeShop,
    projectType: 'Apps'
  },
  {
    title: 'Black Pro',
    language: 'React Js ● Scss ● Maria Db ● Nest Js',
    description: 'It developed to let users share news stories and insights by posting images and text. All articles are publicly available, and the most impactful story is highlighted at the end.',
    image: blackPro,
    projectType: 'Websites'
  },
  {
    title: 'Donakion',
    language: 'Vue Js ● Scss ● Mongo DB ● Nest Js',
    description: 'This Vue js app was created to help people share their charitable experiences and causes by posting images and messages. All posts are visible to the public, and the most inspiring contribution is featured.',
    image: donakion,
    projectType: 'Apps'
  },
  {
    title: 'Eduma',
    language: 'Vue Js ● Scss ● Mongo DB ● Node Js',
    description: 'This app was designed to allow learners to share their study tips and achievements by posting text and images. All contributions are publicly accessible, and the most valuable post is showcased.',
    image: eduma,
    projectType: 'Websites'
  }
]

export function Welcome() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.projectType === activeTab);

  const getProjectCount = (category: string) => {
    if (category === 'All') return projects.length;
    return projects.filter(project => project.projectType === category).length;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#02000E] text-white' 
        : 'bg-gray-50 text-[#02000E]'
    }`}>
      {/* Header */}
      <header className={`fixed top-0 w-full backdrop-blur-sm z-50 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-[#02000E]/95 border-[#02000E]' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h1 style={{ fontFamily: 'La Belle Aurore' }} className="text-[#08C4FE] text-left rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl">
                SD
              </h1>
              <div className="hidden sm:block">
                <h2 className={`text-xs sm:text-sm ${
                  isDarkMode ? 'text-white' : 'text-[#02000E]'
                }`}>Full-Stack Web Developer</h2>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 transition-colors ${
                isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-[#02000E]'
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#home" className={`hover:text-blue-400 transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Home</a>
              <a href="#about" className={`hover:text-blue-400 transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>About me</a>
              <a href="#portfolio" className={`hover:text-blue-400 transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Portfolio</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 sm:px-6 py-2 border border-white rounded-full transition-colors text-xs sm:text-sm text-white">
                Contact me
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-xl sm:text-2xl">{isDarkMode ? '🌙' : '☀️'}</span>
                <button 
                  onClick={toggleTheme}
                  className={`w-10 sm:w-12 h-5 sm:h-6 rounded-full p-1 transition-all duration-300 ${
                    isDarkMode ? 'bg-gray-700' : 'bg-blue-200'
                  }`}
                >
                  <div className={`w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-300 ${
                    isDarkMode ? 'translate-x-0' : 'translate-x-5 sm:translate-x-6'
                  }`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t transition-all duration-300 ${
            isDarkMode ? 'border-gray-700 bg-[#02000E]' : 'border-gray-200 bg-white'
          }`}>
            <nav className="px-4 py-4 space-y-3">
              <a href="#home" className={`block py-2 hover:text-[#08C4FE] transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Home</a>
              <a href="#about" className={`block py-2 hover:text-[#08C4FE] transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>About me</a>
              <a href="#portfolio" className={`block py-2 hover:text-[#08C4FE] transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Portfolio</a>
              <button className={`w-full text-left py-2 hover:text-[#08C4FE] transition-colors ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Contact me</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="container mx-auto my-20 text-center">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold mb-4 sm:mb-6 leading-tight ${
            isDarkMode ? 'text-white' : 'text-[#02000E]'
          }`}>
            Full-Stack Developer
          </h1>
          <div className={`text-sm sm:text-base md:text-lg lg:text-xl mb-10 sm:mb-8 font-mono px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {'{ Typescript, React Js, Vue Js, Nest Js, Mongo Db, SQlite, Scss... }'}
          </div>
          <p className={`text-xs sm:text-sm md:text-base max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Full-stack developer specializing in React, Vue, and NestJS. I create modern, scalable applications with seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center px-4">
            <button className="bg-[#08C4FE] px-6 py-3 rounded-full text-xs sm:text-sm transition-colors text-[#02000E]">
              See my dev work
            </button>
            <button className={`border-b border-[#08C4FE] text-xs sm:text-sm transition-colors ${
              isDarkMode ? 'text-[#08C4FE]' : 'text-[#02000E]'
            }`}>
              Download CV
            </button>
          </div>
          <div className={`flex justify-center items-center mx-auto w-full max-w-[600px] h-auto mt-10 ${
            isDarkMode ? 'opacity-[15%]' : 'opacity-[25%]'
          }`}>
            <img src={keyboardBg} className="w-full h-auto object-contain" alt="" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className={`py-12 sm:py-16 px-4 sm:px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#02000E]' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto">
          <div className="flex flex-col gap-8 sm:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className={`text-3xl sm:text-4xl md:text-4xl text-center font-semibold mb-2 sm:mb-4 ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>
                Problem Solver <span className="text-[#08C4FE]">&lt;coder&gt;</span>
              </h2>
              <p className={`text-sm sm:text-base mb-12 text-center sm:mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>Full Stack Web Developer over 3 years</p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 items-start space-x-3">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 mt-1 flex-shrink-0 ${
                    isDarkMode ? 'border-gray-400' : 'border-gray-500'
                  }`}></div>
                  <p className={`text-xs sm:text-sm max-w-2xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Certificate of Science in IT. Graduated on FON College as a Certificate of Information Systems & Technologies.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start space-x-3">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 mt-1 flex-shrink-0 ${
                    isDarkMode ? 'border-gray-400' : 'border-gray-500'
                  }`}></div>
                  <p className={`text-xs sm:text-sm max-w-2xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Specializing in React & Next.js. I am constantly working on learning new technologies & following industry trends.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start space-x-3">
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 border-2 mt-1 flex-shrink-0 ${
                    isDarkMode ? 'border-gray-400' : 'border-gray-500'
                  }`}></div>
                  <p className={`text-xs sm:text-sm max-w-2xl ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    Love working in team. I enjoy working in a team environment, but I can also work independently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 ${
            isDarkMode ? 'text-white' : 'text-[#02000E]'
          }`}>Skills & Technologies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', title: 'Javascript', desc: 'Strong JS knowledge and advanced web development.' },
              { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', title: 'React Js', desc: 'Building fast and efficient React App\'s and websites.' },
              { icon: 'https://logo.svgcdn.com/d/sqlite-original.png', title: 'SQlite', desc: 'Fast server-side rendering, dynamic routing & less code.' },
              { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png', title: 'Vue Js', desc: 'I build web interfaces & one page applications using Vue.' },
              { icon: 'https://logo.svgcdn.com/d/mongodb-original.png', title: 'Mongo DB', desc: 'Using MongoDB for scalable databases on the backend.' },
              { icon: 'https://images.icon-icons.com/2415/PNG/512/git_original_logo_icon_146509.png', title: 'Git', desc: 'DevOps tool for streamlined source code management.' },
              { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', title: 'Tailwind CSS', desc: 'A utility-first widely used frontend CSS framework.' },
              { icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png', title: 'Sass & CSS', desc: 'I use Sass as my preferred css pre-processor.' }
            ].map((skill, index) => (
              <div key={index} className={`text-center p-4 sm:p-6 rounded-lg hover:bg-opacity-80 transition-colors ${
                isDarkMode ? 'bg-[#02000E] hover:bg-[#02000E]' : 'bg-white hover:bg-gray-50 border border-gray-200'
              }`}>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 flex justify-center items-center">
                  <img src={skill.icon} alt={skill.title} className="w-14 h-14 object-contain" />
                </div>
                <h3 className={`font-semibold mb-2 text-sm sm:text-base ${
                  isDarkMode ? 'text-white' : 'text-[#02000E]'
                }`}>{skill.title}</h3>
                <p className={`text-xs sm:text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='portfolio' className={`py-12 sm:py-16 px-4 sm:px-6 transition-colors duration-300 ${
        isDarkMode ? 'bg-[#02000E]' : 'bg-gray-100'
      }`}>
        <div className="container mx-auto">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${
            isDarkMode ? 'text-white' : 'text-[#02000E]'
          }`}>
            My <span className="text-[#08C4FE]">{'<dev>'}</span> projects
          </h2>
          <p className={`text-lg sm:text-xl text-center mb-8 sm:mb-12 px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>From Web Apps to Websites and Games</p>
          
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button 
              onClick={() => handleTabClick('All')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                activeTab === 'All' 
                  ? 'bg-[#08C4FE] text-[#02000E]' 
                  : isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-[#02000E]'
              }`}
            >
              All ({getProjectCount('All')})
            </button>
            <button 
              onClick={() => handleTabClick('Apps')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                activeTab === 'Apps' 
                  ? 'bg-[#08C4FE] text-[#02000E]' 
                  : isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-[#02000E]'
              }`}
            >
              Apps ({getProjectCount('Apps')})
            </button>
            <button 
              onClick={() => handleTabClick('Websites')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                activeTab === 'Websites' 
                  ? 'bg-[#08C4FE] text-[#02000E]' 
                  : isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-[#02000E]'
              }`}
            >
              Websites ({getProjectCount('Websites')})
            </button>
            <button 
              onClick={() => handleTabClick('Games')}
              className={`px-4 sm:px-6 py-2 rounded-full transition-colors text-sm sm:text-base ${
                activeTab === 'Games' 
                  ? 'bg-[#08C4FE] text-[#02000E]' 
                  : isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                    : 'bg-gray-200 hover:bg-gray-300 text-[#02000E]'
              }`}
            >
              Games ({getProjectCount('Games')})
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className={`rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform ${
                isDarkMode ? 'bg-[#02000E]' : 'bg-white border border-gray-200'
              }`}>
                <div className={`h-40 sm:h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-4xl sm:text-6xl`}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-2">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${
                    isDarkMode ? 'text-white' : 'text-[#02000E]'
                  }`}>{project.title}</h3>
                  <p className={`text-xs sm:text-sm mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{project.language}</p>
                  <p className={`text-xs sm:text-sm leading-7 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-xl">
          <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-4 ${
            isDarkMode ? 'text-white' : 'text-[#02000E]'
          }`}>
            Let's <span className="text-[#08C4FE]">[work]</span> together
          </h2>
          <p className={`text-lg sm:text-xl text-center mb-8 sm:mb-12 px-4 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Open to full time, remote jobs or freelance projects</p>
          
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Your names</label>
              <input 
                type="text" 
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-full focus:outline-none focus:border-[#08C4FE] transition-colors text-xs sm:text-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-[#02000E]'
                }`}
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Your Email</label>
              <input 
                type="email" 
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-2xl focus:outline-none focus:border-[#08C4FE] transition-colors text-xs sm:text-sm ${
                  isDarkMode    
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-[#02000E]'
                }`}
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDarkMode ? 'text-white' : 'text-[#02000E]'
              }`}>Your message</label>
              <textarea 
                rows={4}
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-2xl focus:outline-none focus:border-[#08C4FE] transition-colors resize-none text-xs sm:text-sm ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 text-white' 
                    : 'bg-white border-gray-300 text-[#02000E]'
                }`}
                placeholder="Tell me about your project or opportunity"
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="bg-[#08C4FE] hover:bg-[#08C4FE] px-6 py-3 rounded-full text-sm transition-colors w-full sm:w-auto text-[#02000E]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 sm:py-6 px-4 sm:px-6 border-t transition-colors duration-300 ${
        isDarkMode ? 'bg-[#02000E] border-[#02000E]' : 'bg-gray-100 border-gray-200'
      }`}>
        <div className="container mx-auto text-center">
          <p className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>&copy; Shema - Full-Stack Developer</p>
        </div>
      </footer>
    </div>
  );
}