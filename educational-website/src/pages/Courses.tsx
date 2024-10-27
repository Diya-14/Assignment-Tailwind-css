// src/pages/Courses.tsx
import React, { useState } from 'react';

const courses = [
  {
    title: "Introduction to Web Development",
    description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
    image: "https://th.bing.com/th/id/R.b055be76be464efa25fe0adf4dace65b?rik=bbYgOZJaF24NRQ&riu=http%3a%2f%2famn.com.sa%2fwp-content%2fuploads%2f2023%2f10%2fWeb-Development-Services.jpg&ehk=g53vXeGmCC8CxQIoiks0pLPAB3lrUcBNzFNLlJQg2dg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    title: "Advanced JavaScript",
    description: "Deep dive into JavaScript concepts and frameworks for professional development.",
    image: "https://www.freecodecamp.org/news/content/images/2023/02/image3-1.png",
  },
  {
    title: "React for Beginners",
    description: "Get started with React and build interactive web applications with ease.",
    image: "https://www.trenser.com/wp-content/uploads/2022/01/392866485_react-js_thumb.jpg",
  },
  {
    title: "UI/UX Design Essentials",
    description: "Learn the fundamentals of UI/UX design to create visually appealing apps.",
    image: "https://www.aqskill.com/wp-content/uploads/2022/02/5809368-2-scaled.jpg",
  },
];

const Courses: React.FC = () => {
  const [showCourses, setShowCourses] = useState(false);

  const handleExploreClick = () => {
    setShowCourses(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen text-white px-4 py-20" style={{ backgroundImage: "url('https://th.bing.com/th/id/OIP.9t1YJzWCLaSOdHEQ4AWlJAHaE8?w=1200&h=800&rs=1&pid=ImgDetMain')",
    // background: 'linear-gradient(to right, #3B82F6, #9333EA)' 
  }}
    >
      <h1 className="text-4xl font-bold mb-6">Our Courses</h1>
      <p className="text-lg max-w-2xl text-center leading-relaxed mb-10">
        Discover a wide range of courses tailored to help you achieve your learning goals.
      </p>

      {!showCourses ? (
        <button
          onClick={handleExploreClick}
          className="bg-accentYellow text-darkText font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-accentTeal transition-all duration-300 transform hover:scale-105"
        >
          Explore Courses
        </button>
      ) : (
        <div className="grid gap-8 mt-10 md:grid-cols-2">
          {courses.map((course, index) => (
            <div key={index} className="bg-white text-darkText rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img src={course.image} alt={course.title} className="w-full h-32 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-sm text-center mb-4">{course.description}</p>
              <button className="bg-primaryBlue text-white font-semibold py-2 px-4 rounded-full hover:bg-primaryPurple transition-all duration-200 transform hover:scale-105">
                Learn More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
