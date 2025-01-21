import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center lg:w-[900px] items-center bg-[#2A254B] text-white lg:ml-40 lg:mr-10 lg:mt-10">
      {/* Left Content */}
      <div className="lg:w-1/2 flex flex-col  md:ml-10 ml-5 py-6">

        {/* Heading */}
        
        <h2 className="text-[28px] font-semibold">
          The furniture brand for the
          <br />
          future, with timeless designs
        </h2>

        {/* Button on mobile */}
      <button className="bg-gray-50 bg-opacity-15 text-[#2A254B] w-[30%] py-2 mt-10 font-medium hover:bg-gray-50 lg:block hidden">
          View collection
        </button>

        
        {/* Paragraph */}
        <p className="text-sm leading-6 mt-20 font-light">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand    
          with nice fonts, tasteful colors, and a beautiful way to display things digitally
          using modern web technologies.
        </p>
      </div>

      {/* Button on mobile */}
      <button className="bg-gray-50 bg-opacity-15 text-[#2A254B]  px-14 py-3 mt-10 font-medium hover:bg-gray-50 md:hidden">
          View collection
        </button>

      {/* Right Content - Image */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center lg:justify-end">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={400}
          height={500}
          className="hidden lg:block rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;