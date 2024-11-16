import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-3 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center space-x-6">
          
          {/* Instagram Link */}
          <a
            href="https://www.instagram.com/minahilkhan.7/profilecard/?igsh=cTh1ZTc0Zjd2czE0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram size={30} />
          </a>
          
          {/* YouTube Link */}
          <a
            href="https://www.youtube.com/@AIPlanet-qy4uv"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <CiYoutube size={30} />
          </a>

          {/* LinkedIn Link */}
          <a
            href="https://www.linkedin.com/in/sania-alina-801245226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>

          {/* Email Link */}
          <a
            href="mailto:sanialina112@gmail.com"
            className="hover:text-gray-600 flex gap-1 items-center"
          >
            <MdOutlineMail size={30} />
          </a>
        </div>
        
        {/* Footer text */}
        <p className="mt-4 text-sm">&copy; 2024 Sania Rasheed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
