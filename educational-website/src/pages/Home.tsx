// src/pages/Home.tsx
import React from 'react';

const Home: React.FC = () => (
  <div
    className="flex flex-col items-center justify-center min-h-screen text-white"
    style={{
      backgroundImage: "url('https://th.bing.com/th/id/OIP.P4B3U5PwmtKxCXw_VCaByQHaEo?w=1280&h=800&rs=1&pid=ImgDetMain')",
      // background: 'linear-gradient(to right, #3B82F6, #9333EA)',
    }}
  >
    <h1 className="text-6xl font-bold mb-6 animate-pulse">Welcome to EduPlatform</h1>
    <p className="text-xl mb-8 max-w-xl text-center">
      Join us to explore the best courses and resources for professional growth.
    </p>
    <button className="bg-accentYellow text-darkText font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out hover:bg-accentTeal">
      Get Started
    </button>
  </div>
);

export default Home;
