// src/pages/Contact.tsx
import React from 'react';

const Contact: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-lightGray text-darkText p-8">
    <img
      // src="https://www.bing.com/images/search?view=detailV2&ccid=MM1zXjT5&id=BC403611635FD095B819699C96F8455C9B1AEC99&thid=OIP.MM1zXjT5TQxsCzH2hdZTnwHaEK&mediaurl=https%3a%2f%2fwww.cityofredlands.org%2fsites%2fmain%2ffiles%2fimagecache%2fmedium%2fmain-images%2fcontact-us-1280-x-720-1486069915_1.jpg%3f1584381741&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.30cd735e34f94d0c6c0b31f685d6539f%3frik%3dmewam1xF%252bJacaQ%26pid%3dImgRaw%26r%3d0&exph=506&expw=900&q=contact+us+logo&simid=607999286467455967&FORM=IRPRST&ck=13C218FE14CA68B5C53AD910E760EBEF&selectedIndex=3&itb=0"
      // // alt="Contact Us Illustration"
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

