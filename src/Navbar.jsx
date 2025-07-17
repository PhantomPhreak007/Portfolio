import React, { useState } from 'react'
import GooeyNav from './assets/Components/GooeyNav/GooeyNav';
import { FaHamburger } from "react-icons/fa";
import { IoCloseCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black flex justify-between items-center pt-4 relative">
      <div className="text-white text-3xl sm:text-5xl font-mono pl-5 font-extrabold">
        <span className="text-purple-500 text-4xl sm:text-6xl">S</span>hivansh
      </div>
      {/* Hamburger/Cross for mobile */}
      <button
        className="md:hidden text-white text-4xl pr-5 focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <IoCloseCircleSharp className='hover:text-purple-500' /> : <FaHamburger className='hover:text-purple-500' />}
      </button>
      {/* Desktop Nav */}
      <div className="hidden md:block">
        <GooeyNav />
      </div>
      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-dvw h-dvh bg-black text-white flex flex-col items-center  p-4 z-50 md:hidden shadow-lg">
          {/* Remove the close button here, since the icon above now toggles */}
          <a href="#projects" className="py-2 px-4 hover:text-purple-500">Projects</a>
          <a href="#about" className="py-2 px-4 hover:text-purple-500">About</a>
          <a href="#about" className="py-2 px-4 hover:text-purple-500">Blogs</a>
          <a href="#about" className="py-2 px-4 hover:text-purple-500">Services</a>
          <a href="#contact" className="py-2 px-4 hover:text-purple-500">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar;