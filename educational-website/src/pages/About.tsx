// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-screen pt-20 bg-lightGray text-darkText px-4">
    <img
      src="https://th.bing.com/th/id/R.4bfe363e78762605827adc8df9c4ba27?rik=33WP1oEVbzLz6Q&riu=http%3a%2f%2fwww.xactsolutions.ca%2fwp-content%2fuploads%2f2015%2f11%2fAbout-Us-banner.png&ehk=UAqCdoBPFYMbV59tkc%2bkNJUR2%2fAOK%2bHgQqe1UWEa85o%3d&risl=&pid=ImgRaw&r=0,https://thetop10spot.com/wp-content/uploads/2023/06/a2d60bb3-c68f-4034-8f00-258fe45e7d2b.jpg"
      alt="About us cartoon"
      className="w-1/2 mb-8"
    />
    <h1 className="text-4xl font-bold mb-4 text-primaryPurple">About Us</h1>
    <p className="text-lg max-w-2xl text-center leading-relaxed mb-6">
      EduPlatform is committed to providing accessible, high-quality education for everyone. We offer a variety of courses and resources tailored to help you reach your potential.
    </p>
  </div>
);

export default About;

