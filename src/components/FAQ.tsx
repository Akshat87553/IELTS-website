import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is IELTS and why do I need it?",
    answer: "IELTS (International English Language Testing System) is the world's most popular English language proficiency test for higher education and global migration. It is required by universities, employers, and immigration bodies in many English-speaking countries like Australia, Canada, New Zealand, and the UK."
  },
  {
    question: "What's the difference between IELTS Academic and General Training?",
    answer: "The Academic test is for those who want to study at the undergraduate or postgraduate levels. The General Training test is for those who wish to migrate to an English-speaking country for work experience or training programs. The Listening and Speaking sections are the same for both, but the Reading and Writing sections differ."
  },
  {
    question: "How often can I take the IELTS test?",
    answer: "There are no restrictions on retaking the IELTS test. You can register for a test as soon as you feel you are ready to do so. However, we recommend undertaking further study to improve your score before you attempt the test again. Our AI analysis can help pinpoint your exact weak areas."
  },
  {
    question: "How long is my IELTS score valid?",
    answer: "Your IELTS Test Report Form (TRF) is valid for two years from the test date. Most organizations will not accept a TRF that is more than two years old, unless you can provide evidence that you have actively maintained or tried to improve your English since taking the test."
  },
  {
    question: "How are your mock tests scored?",
    answer: "Our mock tests are designed to simulate the real exam environment. The Reading and Listening sections are auto-graded. For the Speaking and Writing sections, we use an advanced AI system that analyzes your performance based on official IELTS assessment criteria, providing you with an estimated band score and detailed feedback."
  },
  {
    question: "Can I just prepare for one module if I am weak in it?",
    answer: "Absolutely. While we recommend our comprehensive course, we also offer module-specific packages. You can focus solely on improving your skills in Writing, Speaking, Reading, or Listening with our specialized materials and expert tutor guidance for that particular section."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8"></div>
            <p className="text-gray-600">
              Find answers to common questions about the IELTS test and our courses.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 50}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleQuestion(index)}
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-indigo-600 flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-indigo-600 flex-shrink-0" size={20} />
                  )}
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
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
  );
};

export default FAQ;