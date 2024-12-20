import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-10">
      {/* Gratitude Section */}
      <div className="text-center max-w-6xl mb-10">
        <p className="relative text-white font-mono text-sm md:text-lg mt-4 tracking-wider p-4 border-4 border-teal-500 ">
          I am deeply thankful to Allah, who supported me through every difficulty, guided me at every turn,
           and gave me the strength to move forward whenever I felt stuck. Heartfelt thanks to everyone who has been part of my journey, especially to Governor Sindh Kamran Tessori, a beacon of hope for emerging talent.
           I am also sincerely grateful to my mentors and guides, whose light has always shown me the way.
        </p>
      </div>


      {/* Image and Projects Section */}
      <div className="flex flex-col md:flex-row items-center md:space-x-10 mt-6">
        {/* Image Section */}
        <div className="mb-20 md:mb-0 mr-60">
          <Image
            src="/g-1.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full mt-10 shadow-[0_0_30px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-serif text-teal-500">Kamran Tessori</h1>
          <p className="mt-1 text-justify max-w-md text-xl">
            Governor Sindh Kamran Tessori is a visionary leader dedicated to empowering youth through the largest IT initiative in the region, bringing tech opportunities to Karachi and beyond.
            His commitment to fostering talent and innovation is shaping a brighter future across the province.
          </p>
          <a
            href="https://www.youtube.com/@KamranTessorikk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mt-40 md:space-x-32">
  {/* Text Section */}
  <div className="text-section w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105">
    <h1 className="text-4xl font-bold mb-2 text-teal-500">Zia Khan</h1>
    <p className="mt-0 text-justify text-xl leading-relaxed">
      Zia Khan, CEO of Panacloud, is a key leader in Pakistan&apos;s cloud computing sector.  
      He mentors and inspires the next generation of tech innovators, shaping the country&apos;s digital future.  
      With a clear vision for technological growth, Sir Zia aims to position Pakistan as a global hub for cloud solutions.  
      He is committed to helping youth succeed by equipping them with the skills needed for tomorrow&apos;s tech challenges.  
      Sir Zia strives to create an ecosystem where young minds can thrive and contribute to Pakistan&apos;s digital prosperity.
    </p>
    <a
      href="https://pk.linkedin.com/in/ziaukhan"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
    >
      Visit Profile
    </a>
  </div>

  {/* Image Section */}
  <div className="circle-frame mt-40 md:mt-0 md:ml-10">
    <Image 
      src="/g-2.webp" 
      alt="Profile Picture" 
      width={250} 
      height={250} 
      className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
    />
  </div>
</div>


      <div className="flex flex-col md:flex-row items-center md:space-x-60 mt-40">
        {/* Image Section */}
        <div className="mb-10 md:mb-0 mr-20">
          <Image
            src="/g-3.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full mt-10 shadow-[0_0_30px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-serif text-teal-500">Daniyal Nagori</h1>
          <p className="mt-1 text-justify max-w-md text-xl">
            CEO of the Governor Sindh IT Initiative and President of the Pakistan IT Initiative, 
            He is a visionary leader whose journey from humble beginnings to success inspires countless young minds. A trailblazer in tech, he proves that with determination,
            the impossible becomes possible, paving the way for the next generation.
          </p>
          <a
            href="https://pk.linkedin.com/in/daniyalnagori"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mt-40 md:space-x-32">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold mb-2 text-teal-500">Muhammad Qasim</h1>
          <p className="mt-0 text-justify text-xl">
            AI Officer at PIAIC and GIAIC, and Chief Officer at Panacloud, is a dynamic leader dedicated to empowering the next generation. With a passion for innovation,
            he inspires young minds to transform their dreams into reality and drive meaningful change in the tech world.
          </p>
          <a
            href="https://www.linkedin.com/in/sirqasim/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>

        {/* Image Section */}
        <div className="circle-frame mt-40 md:mt-0">
          <Image 
            src="/g-4.jpg" 
            alt="Profile Picture" 
            width={250} 
            height={250} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-40 mt-40">
        {/* Image Section */}
        <div className="mb-10 md:mb-0 mr-20">
          <Image
            src="/g-5.jpg"
            alt="Profile Picture"
            width={250}
            height={250}
            className="rounded-full mt-10 shadow-[0_0_30px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-serif text-teal-500">Ameen Alam</h1>
          <p className="mt-1 text-justify max-w-md text-xl">
            A Global Leader in AI and Cloud Education. He is a young, inspiring force for the next generation.
             He tirelessly guides his students, helping them believe in their potential and empowering them to turn dreams into reality. 
            A remarkable leader, he&apos;s shaping the future of tech with passion. 
            His approachable nature and constant willingness to uplift others make him a beacon of inspiration and support.
          </p>
          <a
            href="https://www.linkedin.com/in/ameen-alam/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mt-40 md:space-x-32">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold mb-2 text-teal-500">Hamzah Syed</h1>
          <p className="mt-0 text-xl text-justify">
            A top-rated web developer on Upwork and expert in JAMStack, React, and Next.js. 
            He is an exceptional mentor who brings learning to life. With a fun and engaging teaching style, 
            he draws students into the world of web development, making complex topics enjoyable and inspiring.
            Very young and highly successful, he&apos;s a true role model for aspiring developers, known for his friendly,
            cooperative approach and genuine passion for helping others succeed.
          </p>
          <a
            href="https://www.linkedin.com/in/webdeveloper-react-jamstack-expert/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>

        {/* Image Section */}
        <div className="circle-frame mt-40 md:mt-0">
          <Image 
            src="/g-6.jpg" 
            alt="Hamzah Syed" 
            width={250} 
            height={250} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-40 mt-40">
        {/* Image Section */}
        <div className="mb-10 md:mb-0 mr-20">
          <Image
            src="/g-7.jpg"
            alt="Bilal Muhammad Khan"
            width={250}
            height={250}
            className="rounded-full mt-10 shadow-[0_0_30px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-serif text-teal-500">Bilal Muhammad Khan</h1>
          <p className="mt-1 text-xl text-justify max-w-md">
            Web Application Developer and seasoned IT professional with a wealth of experience. Known for his inspiring personality, 
            he guides students in pursuing their goals and dreams with confidence. A senior mentor in the field, 
            He empowers aspiring developers with both knowledge and motivation to reach new heights in tech. he&apos;s a role model for young developers eager to make their mark in the industry.
          </p>
          <a
            href="https://www.linkedin.com/in/bilal-muhammad-khan-818523b/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mt-40 md:space-x-32">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold mb-2 text-teal-500">Aneeq Khatri</h1>
          <p className="mt-0 text-xl text-justify">
            A talented Full Stack Developer, specializing in the MERN and JAM Stacks, with a keen interest in AI, Cloud, and Blockchain technologies. 
            An inspiring mentor, he empowers students to pursue their goals and reach new heights in tech. With his engaging teaching style and depth of knowledge.
          </p>
          <a
            href="https://www.linkedin.com/in/aneeq-khatri-30b529240/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>

        {/* Image Section */}
        <div className="circle-frame mt-40 md:mt-0">
          <Image 
            src="/g-8.jpg" 
            alt="Aneeq Khatri" 
            width={250} 
            height={250} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:space-x-40 mt-40">
        {/* Image Section */}
        <div className="mb-10 md:mb-0 mr-20">
          <Image
            src="/g-9.jpg"
            alt="Okasha Aijaz"
            width={250}
            height={250}
            className="rounded-full mt-10 shadow-[0_0_30px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-serif text-teal-500">Okasha Aijaz</h1>
          <p className="mt-1 text-xl text-justify max-w-md">
            A Full Stack Developer with expertise in MERN, SQL, NextJS 13, JavaScript, TypeScript, and Blockchain. Despite his young age, 
            he has already achieved great success in the IT field. As a mentor, he inspires and guides others to pursue their dreams with determination and confidence. 
            With a vibrant personality and a passion for teaching, he helps students navigate the tech world, empowering them to reach their full potential.
          </p>
          <a
            href="https://www.linkedin.com/in/okasha-aijaz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mt-40 md:space-x-32">
        {/* Text Section */}
        <div className="text-section w-full md:w-1/2 transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-4xl font-bold mb-2 text-teal-500">Muhammad Bilal Khan</h1>
          <p className="mt-0 text-xl text-justify">
            A Full Stack Developer with expertise in the MERN Stack, Next.js, and React.js, dedicated to crafting innovative solutions for web development. 
            As an exceptional mentor, he makes learning IT both fun and engaging, using his dynamic personality to simplify complex topics. 
            His ability to connect with students and make difficult concepts easy to understand has made him a beloved guide for aspiring developers in the tech field.
          </p>
          <a
            href="https://www.linkedin.com/in/developerbilalkhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl mt-4 px-6 py-2 bg-teal-500 text-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-teal-600"
          >
            Visit Profile
          </a>
        </div>

        {/* Image Section */}
        <div className="circle-frame mt-40 md:mt-0">
          <Image 
            src="/g-10.jpg" 
            alt="Muhammad Bilal Khan" 
            width={250} 
            height={250} 
            className="rounded-full shadow-[0_0_50px_20px] shadow-teal-700/80 transition-transform duration-500 ease-in-out transform hover:scale-110" 
          />
        </div>
      </div>
      <div className="flex justify-center mt-16">
<Link href="/">
    <button className="px-4 py-2 bg-black text-white text-lg font-bold rounded-lg border-2 border-teal-500 relative overflow-hidden group">
      <span className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out animate-light-travel"></span>
      <span className="relative">Home Page</span>
    </button>
  </Link>
      </div>
    </div>
  );
};

export default Page;
