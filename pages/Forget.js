import Mailer from "@/db/mail";
import Link from "next/link";
import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function ForgotPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked")

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      await Mailer(email);
    } catch (error) {
      console.log(error);
    }

    setMessage(
      "If this email is registered, you'll receive a reset link shortly."
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md text-black p-8 bg-white rounded-lg shadow-sm border border-black">
        <div className="leading-none mb-10 text-center">
          <h1 className="text-2xl font-bold text-center text-black mb-2">
            Forgot Password
          </h1>
          <p className="flex justify-center items-center text-xs text-gray-400 w-80 text-center mx-auto">
            Enter your email and we'll send you the link to reset the Password
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-2 px-4 py-2 border-none bg-white border border-black text-black rounded-md shadow-sm "
              required
            />
          </div>
          <button
            type="button"
            className="w-full px-4 py-2 text-black bg-white border border-black rounded-md hover:bg-black hover:text-white"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-green-600 text-center">{message}</p>
        )}
        <Link
          href="/login"
          className="flex justify-center items-center mt-6 text-sm text-center text-black hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 12l4-4m0 8l-4-4"
            />
          </svg>
          Go back to Login
        </Link>
      </div>
    </div>
  );
}
