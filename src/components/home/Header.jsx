import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
      {/* HEADER */}
      {/* FIRST NAV */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="hidden md:flex justify-between mt-4">
          <div>
            <p className="text-sm">Sample@gmail.com / +043 89 76 4576</p>
          </div>
          <div className="flex gap-2">
            <img src="/Facbook.png" alt="" />
            <img src="/Twitter.png" alt="" />
            <img src="/Instagram.png" alt="" />
            <img src="/Youtube.png" alt="" />
          </div>
        </div>

        {/* HR LINE */}
        <div className="hidden md:block">
          <hr className="border-gray-400 font-medium mt-1" />
        </div>

        {/* SECOND NAV */}
        <div className="flex justify-between items-center py-4 relative">
          {/* LOGO */}
          <div>
            <img src="/home-logo.png" alt="" className="h-10" />
          </div>

          {/* NAV LINKS (React Router Links) */}
          <div className="hidden md:flex gap-6 mt-2">
            <Link to="/" className="hover:text-[#4EA291] transition">Home</Link>
            <Link to="/about" className="hover:text-[#4EA291] transition">About Us</Link>
            <Link to="/extrapage" className="hover:text-[#4EA291] transition">Products</Link>
            <Link to="/contact" className="hover:text-[#4EA291] transition">Contact Us</Link>
          </div>

          {/* BUTTONS */}
          <div className="hidden md:flex bg-[#4EA291] w-36 h-10 items-center justify-around rounded-md">
            <button className="text-white text-sm">Shop Now</button>
            <img src="home-arrow.png" alt="" className="w-6" />
          </div>

          {/* HUMBURGER */}
          <button id="menu-btn" className="md:hidden flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
            <span className="block w-6 h-0.5 bg-gray-800 rounded"></span>
          </button>
        </div>

        {/* HR FOR PHONE */}
        <hr className="border-gray-300 mt-1 md:hidden" />
      </div>
    </div>
  );
}

export default Header;
