import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 px-6 md:px-12 lg:px-20 flex items-center justify-between">
      {/* Logo - Replace with actual logo image */}
      <div className="flex items-center">
        <a href="/" className="text-2xl font-bold text-green-700">
          {/* ADD LOGO IMAGE HERE */}
          {/* 
            IMPORTANT: Replace with your logo image
            Example: <img src="/images/upworn-logo.png" alt="Upworn Logo" className="h-8" />
          */}
          Upworn
        </a>
        <div className="ml-2 flex items-center">
          {/* User avatars - Replace with actual user images */}
          <div className="flex -space-x-2">
            {/* 
              IMPORTANT: Replace with user avatar images
              Example: 
              <img src="/images/avatar-1.jpg" alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
              <img src="/images/avatar-2.jpg" alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover" />
            */}
            <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
            <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"></div>
          </div>
          <span className="ml-2 text-xs text-gray-500">100+ users</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#about" className="text-gray-600 hover:text-green-700">About</a>
        <a href="#problems" className="text-gray-600 hover:text-green-700">Problems</a>
        <a href="#solutions" className="text-gray-600 hover:text-green-700">Solutions</a>
        <div className="relative">
          <button className="flex items-center text-gray-600 hover:text-green-700">
            EN
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {/* Language dropdown would go here */}
        </div>
      </nav>

      {/* CTA Button */}
      <a href="#contact" className="bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors">
        Contact us
      </a>

      {/* Mobile menu button - would toggle mobile menu */}
      <button className="md:hidden text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
};

export default Header;
