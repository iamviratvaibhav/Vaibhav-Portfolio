import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work-experience", label: "Work Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
  ];

  // Smooth scroll handler
  const handleMenuItemClick = (selectionId) => {
    setActiveSection(selectionId);
    setIsOpen(false);

    const section = document.getElementById(selectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navbar scroll background handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[10vw] ${isScroll ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}>
      <div className='max-w-6xl mx-auto flex justify-between items-center text-white'>

        {/* Logo */}
        <div className="text-white py-5 flex justify-between items-center">
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Vaibhav</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Verma</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex justify-center space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""} text-center`}>
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className='hidden md:flex space-x-4'>
          <a
            href="https://github.com/iamviratvaibhav"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <BsGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/iamviratvaibhav/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-300 hover:text-[#8245ec]'
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#050414] bg-opacity-50 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/iamviratvaibhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <BsGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/iamviratvaibhav/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
