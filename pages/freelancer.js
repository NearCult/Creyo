import React, { useState } from "react";
import '@/app/globals.css';
import Image from "next/image";
import Navbar from "@/components/NavBar"; // Assuming Navbar is in the components folder

export default function Home() {
  return (     
      <div className="w-full min-h-screen bg-white">
        <Navbar />
        {/* Hero Section */}
        <div className="relative w-full h-64">
          <Image
            src="/hero.jpg" // Make sure your image is in the public directory
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white font-rocksalt text-6xl">
            The World Needs You
          </h1>
        </div>
        {/* Content Section */}
        <div className="flex items-center gap-4 p-8">
          <input
            type="text"
            placeholder="Find your gigs here"
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none text-black"
          />
          <button className="px-6 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200">
            Sort
          </button>
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
            Search
          </button>
        </div>
{/* Jobs for You Header */}
<h1 className="text-black mt-8 pl-8 font-mono text-4xl z-10">
    Jobs for You
</h1>

        {/* Jobs Section */}
        <div className="mt-8 space-y-6 px-4 sm:px-6 md:px-8 lg:px-16">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative bg-white p-6 shadow-md rounded-lg border border-gray-200 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out"
            >
              {/* Apply Button */}
              <button className="absolute top-4 right-4 px-4 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200">
                Apply
              </button>

              {/* Job Information */}
              <h3 className="text-xl font-bold text-gray-800">UI/UX Design For App</h3>
              <p className="text-sm text-gray-600 mt-1">Fixed Rate Min Bid Rs: 1000</p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                I&apos;m looking for 5 hero sections, reviews & about us templates that I can use
                for my prospects. 5 different designs where my prospects can choose from. Nav bar,
                hero section & reviews section & about us section. I&apos;ll provide you documents
                with the information needed on these and how I prefer my designs.
              </p>

              {/* Divider */}
              <hr className="mt-6 border-t-[#656565]" />
            </div>
          ))}
        </div>
      </div>
  );
}
