import React from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/banner_bg.png)] lg:bg-[15%] bg-cover bg-right">
      <div className="flex items-center justify-between h-full pr-20 pl-20 mt-9">
        {/* Text Section */}
        <div className="flex flex-col justify-center transition-transform duration-500 ease-in-out transform hover:scale-105 text-white mt-9" data-aos="fade-up">
          <h1 className="text-[30px] font-bold transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in">
            I am
          </h1>
          <h2 className="text-teal-500 text-6xl font-extrabold font-['Lato'] transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in">
            Sania Rasheed
          </h2>
          <p className="mt-2 max-w-md transition-opacity duration-700 ease-in-out opacity-0 animate-fade-in">
            Welcome to my portfolio! Fueled by a passion for Technology and Education, 
            I&apos;m dedicated to crafting solutions that inspire, empower, and spark change. 
            Together, let&apos;s unlock new possibilities and shape the future.
          </p>

          {/* More About Me Button */}
          <div className="flex flex-row justify-start mt-6 space-x-8">
  <Link href="/about">
    <button className="px-4 py-2 bg-black text-white text-sm font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
      <span className="relative">About Me</span>
    </button>
  </Link>
  <Link href="/contact">
    <button className="px-6 py-2 bg-black text-white text-sm font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
      <span className="relative">Hire Me</span>
    </button>
  </Link>
</div>

        </div>

{/* Image Section */}
<div className="circle-frame mt-12">
  <Image
    className="w-40 h-40 rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 transform hover:rotate-y-180"
    src="/profile.jpg"
    alt="Profile Picture"
    width={160} // Adjust width as needed
    height={160} // Adjust height as needed
  />
</div>

      </div>
    </div>
  );
}

export default Hero;
