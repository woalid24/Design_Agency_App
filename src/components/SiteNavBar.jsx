"use client";
import { FiChevronDown } from "react-icons/fi";

const SiteNavBar = () => {
  return (
    <header className="container mx-auto mt-4 py-4 text-black">
      <div className="flex justify-between items-center space-b">
        <p className="font-bold text-xl">
          <a href="/">
            Design<span className="text-sec">AGENCY</span>
          </a>
        </p>

        <nav className="font-medium">
          <ul className="flex flex-row items-center gap-6">
            <li className="text-lg">
              <a href="/">Home</a>
            </li>
            <li className="text-lg">
              <a href="/team">Team</a>
            </li>
            <li className="text-lg">
              <a href="/service">Service</a>
            </li>
            <li className="text-lg">
              <a href="/projects">Projects</a>
            </li>
            <li className="text-lg">
              <a href="testimonials">Testimonials</a>
            </li>
            <li>
              <button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand rounded-lg text-lg">
                Login
                <FiChevronDown />
              </button>
            </li>
            <li>
              <button className="flex flex-row items-center gap-1 py-1 px-4 border-2 border-brand bg-brand rounded-lg text-lg text-white">
                Register
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default SiteNavBar;
