import "tailwindcss/tailwind.css";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-white h-screen flex flex-col items-center pt-0"> {/* Added pt-20 to push content below navbar */}
      <Navbar />
      <h1 className="text-black text-3xl text-center mt-20">
        Welcome to Creyo!
      </h1>
    </div>
  );
}
