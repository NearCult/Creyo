import React, { useState } from "react";
import "@/app/globals.css";
import Image from "next/image";
import Navbar from "@/components/NavBar"; // Assuming Navbar is in the components folder

export default function Home() {
  const [showSortModal, setShowSortModal] = useState(false);
  const [minBid, setMinBid] = useState([500, 5000]);
  const [workType, setWorkType] = useState("all");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [userBid, setUserBid] = useState('');
  const [userReason, setUserReason] = useState('');

  const jobs = [
    {
      id: 1,
      title: "UI/UX Design For App",
      minBid: 1000,
      typeOfWork: "Hourly",
      description: "I'm looking for 5 hero sections, reviews & about us templates that I can use for my prospects.",
      clientName: "John Doe",
      rating: 4.5,
      profilePic: "/path-to-profile-pic.jpg",
      skills: ["UI/UX", "Figma", "Adobe XD"],
    },
    {
      id: 2,
      title: "Web Developer Needed",
      minBid: 1500,
      typeOfWork: "Weekly",
      description: "Looking for a web developer to help with various projects, including e-commerce integration.",
      clientName: "Jane Smith",
      rating: 4.8,
      profilePic: "/path-to-profile-pic.jpg",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const filterJobs = () => {
    return jobs.filter((job) => {
      const withinMinBid = job.minBid >= minBid[0] && job.minBid <= minBid[1];
      const matchesWorkType = workType === "all" || job.typeOfWork === workType;
      const matchesSkills = selectedSkills.every((skill) => job.skills.includes(skill));

      return withinMinBid && matchesWorkType && matchesSkills;
    });
  };

  const handleRightSliderToggle = (job) => {
    setSelectedJob(job);
  };

  const handleSortModalToggle = () => {
    setShowSortModal(!showSortModal);
  };

  const workTypes = ["Hourly", "Weekly", "Monthly", "Service-based"];
  const allSkills = [
    "UI/UX", "Figma", "Adobe XD", "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "App Development", "Game Development",
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar />
      <div className="relative w-full h-64">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-white font-rocksalt text-6xl">
          The World Needs You
        </h1>
      </div>

      <div className="flex items-center gap-4 p-8">
        <input
          type="text"
          placeholder="Find your gigs here"
          className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none text-black"
        />
        <button
          onClick={handleSortModalToggle}
          className="px-6 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200"
        >
          Sort
        </button>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
          Search
        </button>
      </div>

      <h1 className="text-black mt-8 pl-8 font-mono text-4xl z-10">Jobs for You</h1>

      <div className="mt-8 space-y-6 px-4 sm:px-6 md:px-8 lg:px-16">
        {filterJobs().map((job) => (
          <div
            key={job.id}
            className="relative bg-white p-6 shadow-md rounded-lg border border-gray-200 hover:bg-blue-100 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ease-in-out"
            onClick={() => handleRightSliderToggle(job)}
          >
            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
            <div className="flex gap-2 mt-2">
              <span className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Min Bid Rs: {job.minBid}
              </span>
              <span className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                Type: {job.typeOfWork}
              </span>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              {job.description.length > 150 ? `${job.description.slice(0, 150)}...` : job.description}
            </p>

            <div className="flex gap-2 mt-4">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <button className="absolute top-4 right-4 px-4 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200">
              Apply
            </button>
          </div>
        ))}
      </div>

      {selectedJob && (
        <div className="fixed top-0 right-0 w-1/2 h-full bg-white shadow-xl z-50 transform transition-transform duration-300">
          <div className="flex justify-between p-4 border-b border-gray-300">
            <div className="flex items-center">
              <img
                src={selectedJob.profilePic}
                alt={selectedJob.clientName}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span className="ml-4 text-black font-semibold">{selectedJob.clientName}</span>
            </div>
            <button
              onClick={() => setSelectedJob(null)}
              className="text-red-500 hover:text-red-700"
            >
              X
            </button>
          </div>

          <div className="px-4 py-2">
            <div className="flex gap-2">
              <span className="px-5 py-1 bg-orange-400 text-white rounded-full text-md">
                Min Bid Rs: {selectedJob.minBid}
              </span>
              <span className="px-5 py-1 bg-orange-400 text-white rounded-full text-md">
                Type of Work: {selectedJob.typeOfWork}
              </span>
            </div>
            <p className="text-gray-700 mt-4">{selectedJob.description}</p>
            <div className="mt-6">
              <h4 className="font-semibold text-black">Skills Required:</h4>
              <div className="flex gap-2 flex-wrap">
                {selectedJob.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Bid Input and Why You’re Suitable */}
            <div className="mt-6">
              <label className="block text-sm text-gray-700">Your Bid</label>
              <input
                type="number"
                value={userBid}
                onChange={(e) => setUserBid(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none"
                placeholder="Enter your bid"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700">Why You Are Suitable</label>
              <textarea
                value={userReason}
                onChange={(e) => setUserReason(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none"
                placeholder="Explain why you're suitable for the job"
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => {
                setSelectedJob(null);
                setUserBid('');
                setUserReason('');
              }}
              className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Close
            </button>
            <button
              className="px-6 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200 ml-4"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}

      {/* Sort Modal */}
      {showSortModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h3 className="text-xl font-semibold text-gray-800">Sort Jobs</h3>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Min Bid</label>
              <input
                type="range"
                min={500}
                max={5000}
                value={minBid[0]}
                onChange={(e) => setMinBid([e.target.value, minBid[1]])}
                className="w-full"
              />
              <span className="text-sm text-gray-700">{minBid[0]} - {minBid[1]}</span>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Work Type</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none"
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
              >
                <option value="all">All</option>
                {workTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <select
                multiple
                className="w-full p-2 border border-gray-300 rounded-md text-black focus:outline-none"
                value={selectedSkills}
                onChange={(e) => {
                  const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
                  setSelectedSkills(selectedOptions);
                }}
              >
                {allSkills.map((skill, idx) => (
                  <option key={idx} value={skill}>
                    {skill}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleSortModalToggle}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={() => handleSortModalToggle()}
                className="px-4 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
