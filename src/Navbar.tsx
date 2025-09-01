
import React from 'react';
import { FiLogOut } from 'react-icons/fi';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Authority Portal</h1>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Authority Name</span>
        <button className="flex items-center text-red-500 hover:text-red-700">
          <FiLogOut className="mr-2" />
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
