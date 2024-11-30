import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isProfileCardVisible, setProfileCardVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleProfileCard = (e) => {
    e.preventDefault();
    setProfileCardVisible(!isProfileCardVisible);
  };

  const toggleModal = (e) => {
    e.preventDefault();
    setModalVisible(!isModalVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Job Posted Successfully!");
    setModalVisible(false); // Close the modal after submission
  };

  return (
    <nav className="bg-black w-full mx-auto p-5 px-10 flex items-center justify-between relative">
      {/* Logo */}
      <div className="text-white text-xl font-bold">
        <Link href="/">CREYO</Link>
      </div>

      {/* Search Bar and Profile Icon */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative w-[500px]">
          <input
            type="text"
            placeholder="Find your next gig here!"
            className="w-full p-2 pl-12 rounded-3xl text-black bg-white"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>

        {/* "Post a Job" Button */}
        <button
          onClick={toggleModal}
          className="relative text-white border-b-2 border-transparent pb-1 hover:border-orange-300 group transition-all duration-300"
        >
          Post a Job
        </button>

        {/* Profile Icon */}
        <div className="relative">
          <button onClick={toggleProfileCard}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white hover:text-orange-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2C8.134 2 5 5.134 5 9c0 3.866 3.134 7 7 7s7-3.134 7-7c0-3.866-3.134-7-7-7zm0 14c-3.866 0-7 2.686-7 6v1h14v-1c0-3.314-3.134-6-7-6z"
              />
            </svg>
          </button>
          {/* Profile Card */}
          {isProfileCardVisible && (
            <div className="absolute right-0 bg-white text-black rounded-lg shadow-lg w-64 p-4 mt-2 z-10">
              {/* Add profile options here */}
            </div>
          )}
        </div>
      </div>

{/* Modal for Posting a Job */}
{isModalVisible && (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="bg-white w-[90%] max-w-[500px] p-8 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Enter the job title"
            required
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/* Job Description */}
        <div>
          <label htmlFor="jobDescription" className="block font-medium text-gray-700">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            placeholder="Enter a detailed job description"
            required
            rows="4"
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        {/* Job Type */}
        <div>
          <label htmlFor="jobType" className="block font-medium text-gray-700">
            Job Type
          </label>
          <select
            id="jobType"
            required
            className="w-full p-3 text-black border border-gray-300 rounded-md bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="hourly">Hourly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
        {/* Minimum Bid */}
        <div>
          <label htmlFor="minBid" className="block font-medium text-gray-700">
            Min Bid Amount (Rs)
          </label>
          <input
            type="number"
            id="minBid"
            placeholder="Enter minimum bid amount"
            required
            className="w-full p-3 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={toggleModal}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#FF8800] text-white rounded-md hover:bg-[#e67600] transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
)}

    </nav>
  );
}
