import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./style/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Background from "./Background";
import { motion } from "framer-motion";
// import { Controls } from "three/src/Three.Core.js";

const Home = () => {
  const targetDate = new Date("March 28, 2025 00:00:00 GMT+0530").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [showScrollButton, setShowScrollButton] = useState(false);

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleRegistrationClick = () => {
    window.location.href = "https://hack2skill.com/hack/mlsccoherence";
  };

  function calculateTimeRemaining() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      // Target date has passed
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY > 100); // Adjust the value based on when you want the button to appear
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home p-4 md:p-8 text-center min-h-screen flex flex-col justify-center items-center">
      <Background></Background>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-white mt-6 text-2xl md:text-3xl font-semibold"
      >
        {["W", "e", "l", "c", "o", "m", "e"].map((char, index) => (
          <motion.span
            key={index}
            variants={textVariants}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
        <motion.span
          variants={textVariants}
          style={{ display: "inline-block", marginLeft: "0.2em" }}
        >
          t
        </motion.span>
        <motion.span
          variants={textVariants}
          style={{ display: "inline-block" }}
        >
          o
        </motion.span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="font-bold text-transparent text-3xl md:text-8xl mt-2 bg-clip-text bg-gradient-to-r from-blue-800 via-blue-400 to-blue-800"
        style={{ zIndex: 1 }}
      >
        MLSC Codefest
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ zIndex: 1 }}
      >
        <img className="logo-img mt-2" src={logo} alt="Logo" />
      </motion.h1>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.8 }}
        className="flex space-x-4 mt-6 absolute top-12 right-16" // Adjust top and right values as needed
        style={{ zIndex: 1 }}
      >
        <a
          href="https://instagram.com/mlsc_vcet?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/mlsc-vcet/mycompany/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            style={{ color: "#ffffff", fontSize: "1.5rem" }}
          />
        </a>

      </motion.div>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.8 }}
        className="text-white text-xl md:text-4xl mt-2">
        Innovate. Create. Transform.
      </motion.div>
      <motion.div
        variants={fadeInVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.8 }}
        className="text-lg md:text-2xl text-white mt-4 md:mt-8"
      >
        <p>
          <span className="text-3xl md:text-6xl">{timeRemaining.days}</span>{" "}
          Days &nbsp;
          <span className="text-3xl md:text-6xl">
            {timeRemaining.hours}
          </span>{" "}
          Hours &nbsp;
          <span className="text-3xl md:text-6xl">
            {timeRemaining.minutes}
          </span>{" "}
          Minutes and&nbsp;
          <span className="text-3xl md:text-6xl">
            {timeRemaining.seconds}
          </span>{" "}
          Seconds left <br />
          The Final Countdown to Codefest Thrills! 🚀
        </p>
        <button
          onClick={handleRegistrationClick}
          // Disable the button if registration is closed
          disabled 
          // className="bg-purple-800 hover:bg-purple-500 text-white font-semibold py-2 px-4 rounded-xl mt-6"
          // Disable the button if registration is closed
          className="bg-blue-900  text-white font-semibold py-2 px-4 rounded-xl mt-6"
          
        >
          Registrations Closed!
        </button>
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-white bg-opacity-70 text-white font-bold py-2 px-4 rounded-full"
          >
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{ color: "#0675cf", fontSize: "2 rem" }}
            />
          </button>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
