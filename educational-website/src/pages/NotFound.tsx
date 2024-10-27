// src/pages/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-l from-primaryPurple to-primaryBlue text-white">
    <h1 className="text-6xl font-extrabold mb-4">404</h1>
    <p className="text-2xl mb-6">Oops! Page Not Found.</p>
    <img
      src="https://th.bing.com/th/id/OIP.SRWSjK79YrjHkAaqxav6DgHaE7?w=1200&h=799&rs=1&pid=ImgDetMain"
      alt="Page not found cartoon"
      className="w-1/3 mb-6"
    />
    <Link to="/">
      <button className="bg-white text-primaryBlue py-3 px-6 rounded-full font-bold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
        Go Back Home
      </button>
    </Link>
  </div>
);

export default NotFound;
