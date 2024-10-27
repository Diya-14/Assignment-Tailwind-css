// src/pages/Jobs.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Jobs: React.FC = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simulate an error condition
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold mb-4">Job Page Not Implemented Yet</h1>
          <p className="text-lg mb-6">This page is under construction. Please check back later.</p>
          <Link to="/">
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Default content if there's no error
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Job Listings</h1>
      <p>Explore career opportunities with us!</p>
    </div>
  );
};

export default Jobs;
