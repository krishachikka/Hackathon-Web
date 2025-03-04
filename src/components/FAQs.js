import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./style/sectionLine.css";
import { motion, useAnimation } from "framer-motion";


const FAQs = () => {
  const [hoveredQuestion, setHoveredQuestion] = useState(null);
  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const controls = useAnimation();



  const toggleQuestion = (index) => {
    const newExpandedQuestions = [...expandedQuestions];
    const isExpanded = newExpandedQuestions.includes(index);

    if (isExpanded) {
      // If already expanded, collapse
      newExpandedQuestions.splice(newExpandedQuestions.indexOf(index), 1);
    } else {
      // If not expanded, expand
      newExpandedQuestions.push(index);
    }

    setExpandedQuestions(newExpandedQuestions);
  };

  const handleMouseEnter = (index) => {
    setHoveredQuestion(index);
  };

  const handleMouseLeave = () => {
    setHoveredQuestion(null);
  };

  const faqsData = [
    {
      question: "How do I register for the hackathon?",
      answer:
        "You can register by visiting our registration page and following the instructions.",
    },
    {
      question: "What is the allowed Team size?",
      answer: "1-4 Members in a single team",
    },
    {
      question: "What is the registration cost?",
      answer: "Only ₹250 per team.",
    },
    {
      question: "When will the problem statements be released?",
      answer:
        "All the problem statements will be released a day before the event.",
    },
    {
      question: "Are travel expenses included too?",
      answer:
        "No, the participants are responsible for covering their travel expenses.",
    },
    {
      question: "Is it an Online or an Offline Hackathon?",
      answer: "Coherence 1.0 is being hosted Offline only.",
    },
    {
      question: "What are the eligibility criteria?",
      answer: "The hackathon is open to all participants with an active brain.",
    },
    {
      question: "Can I participate as an individual or do I need a team?",
      answer:
        "Both individual and team participation are allowed. You can participate alone or with a team.",
    },
    {
      question: "Can a member be a part of two teams?",
      answer: "No, every members should be a part of a single team.",
    },
    // Add more FAQs as needed
  ];

  useEffect(() => {
    controls.start({ x: 0 });
  }, []);

  return (
    <div className="px-8">
      <h2 className="text-2xl md:text-3xl text-white font-bold mb-4 section_header">
        <hr />
        <span>Frequently Asked Questions</span>
        <hr />
      </h2>

      <motion.div
        initial={{ x: -1500 }} // Initial position off-screen to the left
        animate={controls}
        transition={{ delay: 8.5, duration: 1 }}
        className="text-white p-4 md:p-8 px-4 md:px-28">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="rounded p-4 mb-4 border border-purple-500 text-left relative hover:bg-purple-500 hover:border-purple-500 transition-colors duration-300"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-between items-center">
              <div
                className="cursor-pointer font-bold text-xl md:text-2xl mb-2"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform transform ${expandedQuestions.includes(index) ? "rotate-180" : ""
                  }`}
                onClick={() => toggleQuestion(index)}
              />
            </div>
            {hoveredQuestion === index && (
              <div className="mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQs;
