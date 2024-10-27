// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-lightGray text-darkText p-8">
    <img
      src="https://storyset.com/illustration/contact-us/amico"
      alt="Contact Us Illustration"
      className="w-1/3 mb-8"
    />
    <h1 className="text-4xl font-bold mb-4 text-primaryPurple">Contact Us</h1>
    <p className="text-lg text-center mb-8">Have questions? Reach out, and we’ll be happy to help!</p>
    <form className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
      <div className="mb-4">
        <label className="block text-darkText text-sm font-bold mb-2">Name</label>
        <input type="text" className="w-full p-3 border border-gray-300 rounded focus:border-primaryBlue focus:outline-none" />
      </div>
      <div className="mb-4">
        <label className="block text-darkText text-sm font-bold mb-2">Email</label>
        <input type="email" className="w-full p-3 border border-gray-300 rounded focus:border-primaryBlue focus:outline-none" />
      </div>
      <div className="mb-4">
        <label className="block text-darkText text-sm font-bold mb-2">Message</label>
        <textarea className="w-full p-3 border border-gray-300 rounded focus:border-primaryBlue focus:outline-none"></textarea>
      </div>
      <button
        type="submit"
        className="bg-primaryPurple text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-primaryBlue transition duration-200 transform hover:scale-105"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default Contact;

