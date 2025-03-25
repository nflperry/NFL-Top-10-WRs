
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[70px] w-full bg-[#111111] border-b border-gray-700 flex items-center justify-between z-50 shadow-md border-b-white rounded-b-[1px]">
      
      {/* Hamburger Icon */}
      <div className="hamburger flex flex-col gap-[6px] cursor-pointer ml-5 lg:hidden" onClick={toggleMenu}>
        <div className="w-6 h-[3px] bg-[white] rounded-md"></div>
        <div className="w-6 h-[3px] bg-[white] rounded-md"></div>
        <div className="w-6 h-[3px] bg-[white] rounded-md"></div>
      </div>
      
      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center justify-center">
        <Link to="/">
          <img src="/lovable-uploads/2ad6bab9-a735-4f64-9dc9-4dd73f108fff.png" alt="NFL Perry Pick'Em Logo" className="h-[50px]" />
        </Link>
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 mr-5 text-sm pl-6">
        <Link to="/preseason-challenge" className="text-white hover:text-[#fcab1e]">Preseason Challenge</Link>
        <Link to="/weekly-challenge" className="text-white hover:text-[#fcab1e]">Weekly Challenge</Link>
        <Link to="/templates" className="text-white hover:text-[#fcab1e]">Templates</Link>
      </div>

      {/* Sign In Button */}
      <button className="bg-[#fcab1e] text-black font-bold py-1 px-3 mr-5 text-sm">
        SIGN IN
      </button>

      {/* Mobile Menu (Hamburger) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 right-0 bg-[#111111] p-4 rounded-b-[1px]">
          <div className="flex flex-col gap-2">
            <Link
              to="/preseason-challenge"
              className="text-white text-sm py-2 px-3 hover:bg-[#fcab1e] hover:text-black border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Preseason Challenge
            </Link>
            <Link
              to="/weekly-challenge"
              className="text-white text-sm py-2 px-3 hover:bg-[#fcab1e] hover:text-black border-b border-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Weekly Challenge
            </Link>
            <Link
              to="/templates"
              className="text-white text-sm py-2 px-3 hover:bg-[#fcab1e] hover:text-black"
              onClick={() => setIsMenuOpen(false)}
            > 
              Templates
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
