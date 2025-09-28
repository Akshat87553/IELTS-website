import React from 'react';
import { Link } from 'react-router-dom';

const classesData = [
  {
    title: "Live Speaking Practice",
    description: "Engage in one-on-one sessions with certified trainers and receive instant feedback to improve your fluency and confidence.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "30 min sessions",
    level: "All Modules"
  },
  {
    title: "Unlimited Mock Tests",
    description: "Simulate the real test environment with full-length mock tests for all four modules to build stamina and time management skills.",
    image: "https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "Full-length",
    level: "All Modules"
  },
  {
    title: "AI Band Score Analysis",
    description: "Get instant, detailed feedback on your writing and speaking performance with our advanced AI, pinpointing areas for improvement.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "Instant Feedback",
    level: "Writing & Speaking"
  },
  {
    title: "Expert Masterclasses",
    description: "Join live masterclasses conducted by 9-Band achievers and learn proven strategies to tackle the toughest questions.",
    image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1600",
    duration: "60 min sessions",
    level: "Advanced Strategies"
  }
];


const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our <span className="text-teal-600">Core Features</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive learning ecosystem designed to cover every aspect of the IELTS exam.
            From personalized practice to detailed analysis, we’re with you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {classesData.map((classItem, index) => (
            <div
              key={index}
              className="
                bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl
                transition-shadow duration-300
                flex flex-col md:flex-row h-full
              "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div className="w-full md:w-1/2 h-56 md:h-auto overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {classItem.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{classItem.description}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-auto">
                  <span>{classItem.duration}</span>
                  <span>{classItem.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="1000">
          <Link
            to="/book"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
          >
            View All Courses
          </Link>
        </div>
                      {/* Flower divider */}
        <div className="mt-16 flex items-center justify-center" data-aos="fade-up" data-aos-duration="1000">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="mx-4 text-teal-600 animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-8 h-8"
            >
              {/* Center circle */}
              <circle cx="32" cy="32" r="6" />
              {/* Petals */}
              <path d="M32 12c-4 0-8 4-8 8s4 8 8 8 8-4 8-8-4-8-8-8z" />
              <path d="M12 32c0-4 4-8 8-8s8 4 8 8-4 8-8 8-8-4-8-8z" />
              <path d="M32 52c-4 0-8-4-8-8s4-8 8-8 8 4 8 8-4 8-8 8z" />
              <path d="M52 32c0-4-4-8-8-8s-8 4-8 8 4 8 8 8 8-4 8-8z" />
              <path d="M20 20c-3-3-6-3-8 0s-3 6 0 8 6 3 8 0 3-6 0-8z" />
            </svg>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Classes;