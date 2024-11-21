import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Page = () => {
  return (
    <div className="container mx-auto p-8">
      {/* Main container with flex layout */}
      <div className="flex items-center">
        {/* Image section on the left */}
        <div className='circle-frame mr-60 mt-20 ml-10'>
          <Image  
            style={{ width: '300px', height: '300px' }} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
            src="/pic-2.jpg" 
            alt="Profile Picture" 
            width={250} 
            height={250} 
          />
        </div>

        {/* Text section on the right */}
        <div className="flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-5xl font-serif text-teal-500 mt-20">My Projects</h1>
          <p className="mt-2 text-justify  text-3xl">
            Dive into my collection of projects,<br/> each crafted with precision and a <br/> 
            passion for technology showcasing my <br/> expertise in web development, design, <br/> and beyond.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center">
  <h2 className="text-7xl text-teal-600 font-serif pt-9 transition-opacity duration-500 ease-in-out opacity-0 animate-fadeIn">My Projects</h2>
  <div className="grid grid-cols-3 gap-10 mt-20 ml-30">
    {/* Skill Images with Text */}
    {[ 
      { src: "/pro-1.jpg", alt: "Fast Food Website", label: "Fast Food Website", languages: "HTML, CSS", link: "https://fast-food-resto.vercel.app/" },
      { src: "/pro-2.png", alt: "Resume Builder", label: "Resume Builder", languages: "Javascript, HTML, CSS", link: "https://milestone-1-2-liart-xi.vercel.app/" },
      { src: "/pro-3.png", alt: "Admission Form", label: "Admission Form", languages: "HTML ,CSS", link: "https://admission-form-theta.vercel.app/" },
      { src: "/pro-4.jpg", alt: "Barbie Magzine", label: "Barbie Magazine", languages: "HTML, CSS", link: "https://barbie-magzine.vercel.app/" },
      { src: "/pro-5.png", alt: "Countdown Timer", label: "Countdown Timer", languages: "HTML, JavaScript , Next.js, CSS", link: "https://countdown-timer-murex-mu.vercel.app/" },
    ].map((skill, index) => (
      <div key={index} className="flex flex-col items-center transition-transform duration-500 ease-in-out transform hover:scale-110">
        <div className="w-70 h-80 flex items-center justify-center shadow-[0_0_15px_10px] shadow-teal-500 rounded-lg overflow-hidden">
          <Image 
            src={skill.src} 
            alt={skill.alt} 
            width={250}  // Fixed width to make images uniform
            height={300} // Fixed height to make images uniform
            className="object-cover" // Object cover to maintain consistent crop while filling container
          />
        </div>
        <p className="mt-8 text-2xl text-white">{skill.label}</p>
        <p className="text-lg text-slate-500">{`Built with: ${skill.languages}`}</p>
        <a 
          href={skill.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-2 px-4 py-3 text-lg font-mono bg-teal-600 text-white rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-teal-400">View Project</a>
      </div>
    ))}
  </div>
</div>


      {/* Experience Section */}
      <div className="flex items-start">
        <div className="text-section w-1/2 pr-20 ml-10  transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-5xl font-bold  mb-6 mt-40 text-teal-500">My Experience</h1>
          <p className="mt-4 text-2xl">
            <strong>Content Writer</strong> <br />for a USA-based company: Enhanced brand visibility with engaging, SEO-driven content.<br />
            <br/>
            - <strong>Pre-Primary Coordinator & Montessori Directress</strong>: Guided early childhood education, fostering skills and leading teams in classroom settings.<br />
            <br/>
            - <strong>IT Educator on YouTube</strong> (14K+ subscribers): <br /> Created educational content in HTML, CSS, and TypeScript, empowering a global audience in tech skills.
          </p>
        </div>

        <div className='circle-frame ml-40 mt-60'>
          <Image 
            style={{ width: '300px', height: '300px' }} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
            src="/pic-3.jpg" 
            alt="Profile Picture" 
            width={200} 
            height={200} 
          />
        </div>
      </div>

      {/* New Section after Experience */}
<div className="flex items-center mt-20">
  {/* Image section on the left */}
  <div className="circle-frame  mr-60 mt-20 ml-10">
    <Image  
      style={{ width: '300px', height: '300px' }} 
      className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
      src="/pic-4.jpg" 
      alt="YouTube Journey Image" 
      width={250} 
      height={250} 
    />
    <h1 className="text-center mt-6 text-4xl font-semibold text-teal-500">AI Planet</h1>
  </div>

  {/* Text section on the right */}
  <div className="flex-1 transition-transform duration-500 ease-in-out transform hover:scale-105">
    <h2 className="text-4xl font-serif text-teal-500 mt-20">My YouTube Journey</h2>
    <p className="mt-2 text-justify text-2xl mr-40">
    I started my YouTube channel with the simple goal of helping others navigate IT tests and courses.
     Alhamdulillah, within a month, my channel was monetized, a milestone that fills me with immense pride.
      It has been a journey of countless sleepless nights and hard work, but the incredible response from my audience has made it all worthwhile. Here&apos;s a glimpse of my YouTube journey.


    </p>
  </div>
</div>

      {/* Video Section */}
      <div className="flex justify-center flex-col items-center mt-20">
        <iframe 
          width="800" 
          height="600" 
          src="vdo-1.mp4" 
          title="Video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen className="mb-0">
        </iframe> 

        <a href="https://www.youtube.com/@AIPlanet-qy4uv" target="_blank" rel="noopener noreferrer">
          <button className="youtube-btn px-5 py-2 text-1xl bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-teal-700 mx-auto mt-0">
            Follow Me
          </button>
        </a>
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/contact">
          <button className="px-4 py-2 bg-black text-white text-2xl font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
            Contact Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
