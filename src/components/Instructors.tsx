import React from 'react';

// New images for the marquee, related to studying and success
const imageItems = [
  { src: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1600", w: "min-w-[180px] h-[280px]" },
  { src: "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=1600", w: "min-w-[200px] h-[340px]" },
  { src: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1600", w: "min-w-[170px] h-[300px]" },
  { src: "https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=1600", w: "min-w-[210px] h-[380px]" },
  { src: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600", w: "min-w-[190px] h-[320px]" }
];

// Updated data for IELTS Tutors
const instructorsData = [
  {
    name: "Priya Sharma",
    role: "Lead Tutor & Cambridge CELTA Certified",
    bio: "With over 10 years of experience, Priya specializes in breaking down complex grammar and writing structures for Band 8+ scores.",
    image: "data:image/jpeg;base64,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"
  },
  {
    name: "David Miller",
    role: "Speaking Module Specialist",
    bio: "A former examiner, David knows exactly what it takes to excel in the speaking test, focusing on fluency and pronunciation.",
    image: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    name: "Aisha Khan",
    role: "Reading & Listening Expert",
    bio: "Aisha's strategic approach helps students master time management and tackle the trickiest questions in the reading and listening modules.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    name: "Benjamin Carter",
    role: "Writing Task Specialist",
    bio: "Specializing in both Academic and General Training writing tasks, Benjamin helps students craft high-scoring essays and letters.",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

const Instructors: React.FC = () => {
  return (
    <>
      {/* CSS for the endless marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      <section id="instructors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Meet Our <span className="text-teal-600">Expert Tutors</span>
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our team of certified tutors brings years of experience from institutions like the British Council and IDP,
              with a passion for helping students achieve their target band score.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructorsData.map((instructor, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{instructor.name}</h3>
                  <p className="text-teal-600 text-sm font-medium mb-3">{instructor.role}</p>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>
              </div>
            ))}
          </div>
          {/* 2) FULL-WIDTH, infinite marquee */}
          <div
            className="mt-20 overflow-hidden whitespace-nowrap"
            /* force full viewport width & center it */
            style={{
              width: "100vw",
              marginLeft: "calc(50% - 50vw)"
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="inline-flex marquee-track">
              {[1, 2].flatMap(copy =>
                imageItems.map((item, idx) => (
                  <div
                    key={`copy${copy}-img${idx}`}
                    className={`${item.w} rounded-3xl overflow-hidden shadow-lg mx-3 flex-shrink-0`}
                  >
                    <img
                      src={item.src}
                      alt={`IELTS student success ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              )}
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


        </div>
      </section>
    </>
  );
};

export default Instructors;