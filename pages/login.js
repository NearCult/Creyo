import Login from "@/db/login";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [change, setChange] = useState(false);
  const [role, setRole] = useState("");
  const router = useRouter();

  const HandleLogin = async (e) => {
    try {
      e.preventDefault();
      const res = await Login(email, pass, role);
      Cookies.set("accessToken", res);

      if (role === "freelancer") {
        router.push("/freelancerDashboard");
      } else {
        router.push("/clientDashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {change ? (
          <div>
            <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
              Choose Your Role
            </h2>
            <div className="flex flex-col gap-4 justify-center items-center mb-6">
              <button
                className={`w-2/3 p-16 bg-transparent border text-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 ${
                  role === "freelancer"
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => {
                  setRole("freelancer");
                }}
              >
                Freelancer
              </button>
              <button
                className={`w-2/3 p-16 bg-transparent border text-black rounded-lg hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105 ${
                  role === "client"
                    ? "bg-black text-white"
                    : "bg-transparent text-black"
                }`}
                onClick={() => {
                  setRole("client");
                }}
              >
                Client
              </button>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
              onClick={HandleLogin}
            >
              Login
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Welcome Back
            </h2>
            <form className="space-y-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                  className="w-full mt-2 p-3 bg-gray-100 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 bg-white border border-black rounded"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="/Forget"
                  className="text-sm text-black hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="button"
                className="w-full py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setChange(!change)}
              >
                Next
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="text-black hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
