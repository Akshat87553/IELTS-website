import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2" data-aos="fade-right">
              <img
                src="https://d3q9kdqrtloda.cloudfront.net/production/transformed-images/general/ielts-images-people-square/1153453/reading-in-a-library_157f0d904d1544ba631b9156ab85c223.webp"
                alt="IELTS instructor guiding students in a modern classroom"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="section-title">
                <span className="text-teal-600"> About </span>Horizon IELTS
              </h2>
              <div className="w-16 h-[2px] bg-teal-500 mb-8"></div>
              <p className="text-lg text-primary-700 mb-8 leading-relaxed">
                Established in 2015, Horizon IELTS is dedicated to helping students achieve their dreams of studying and working abroad. We provide a dynamic and supportive learning environment, leveraging cutting-edge technology and expert instruction to unlock every student's potential.
              </p>
              <p className="text-lg text-primary-700 mb-12 leading-relaxed">
                Our certified trainers are committed to providing personalized attention, ensuring that you receive the targeted strategies and constructive feedback needed to achieve your desired band score.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <span className="text-4xl font-display text-primary-500 block mb-2">8+</span>
                  <p className="text-primary-700 uppercase tracking-wider text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <span className="text-4xl font-display text-primary-500 block mb-2">5,000+</span>
                  <p className="text-primary-700 uppercase tracking-wider text-sm">Successful Students</p>
                </div>
              </div>
            </div>
          </div>
        </div>


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
    </section>

  );
};

export default About;