import React, { useState, useEffect } from 'react';

const testimonialsData = [
  {
    name: "Priya Patel",
    quote: "Horizon IELTS completely changed my preparation strategy. The mock tests were identical to the real exam, and the AI feedback on my essays was a game-changer. I finally got the Band 8 I needed for my Canadian PR!",
    image: "https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Achieved Band 8.0"
  },
  {
    name: "Ahmed Al-Farsi",
    quote: "As someone with a busy work schedule, the flexible class timings were perfect. The tutors are incredibly supportive and their speaking practice sessions helped me overcome my hesitation. Highly recommended!",
    image: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Achieved Band 7.5"
  },
  {
    name: "Liu Wei",
    quote: "I struggled with the reading section, but the strategies and techniques taught here were brilliant. I improved my reading score from a 6.5 to an 8.5 in just one month. Thank you, Horizon IELTS!",
    image: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=1600",
    role: "Achieved Band 8.5"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Success Stories from <span className="text-teal-600">Our Students</span>
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden" data-aos="fade-up" data-aos-duration="1000">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="min-w-full px-4">
                <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                  <p className="text-teal-600 text-sm font-medium mb-4">{testimonial.role}</p>
                  <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-teal-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
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

export default Testimonials;