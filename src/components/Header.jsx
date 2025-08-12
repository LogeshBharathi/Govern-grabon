import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 via-white to-green-600 rounded-full"></div>
          <h1 className="text-xl font-bold text-gray-800">AI Sarkari Job Parser</h1>
        </div>
        <a href="#" className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors">
          About Project
        </a>
      </nav>
    </header>
  );
};

export default Header;