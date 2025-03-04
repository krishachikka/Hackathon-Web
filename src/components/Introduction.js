// SpinAndFlicker.js
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import imageSrc from "../assets/tesseract.jpeg"; // Replace with the actual path to your image

const SpinAndFlicker = () => {
  const [rotation, setRotation] = useState(0);
  const flickerControls = useAnimation();

  useEffect(() => {
    const spinInterval = setInterval(() => {
      // Rotate clockwise
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 20);

    const flickerText = async () => {
      await flickerControls.start({
        opacity: 0.5,
        transition: { duration: 0.1 },
      });

      await flickerControls.start({
        opacity: 0.7,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 0.5,
        transition: { duration: 0.1 },
      });

      await flickerControls.start({
        opacity: 0.7,
        transition: { duration: 0.2 },
      });

      await flickerControls.start({
        opacity: 0.3,
        transition: { duration: 0.2 },
      });

      await flickerControls.start({
        opacity: 0.7,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 0.3,
        transition: { duration: 0.2 },
      });

      await flickerControls.start({
        opacity: 0.7,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 0.3,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 0.3,
        transition: { duration: 0.2 },
      });

      await flickerControls.start({
        opacity: 0.7,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
      await flickerControls.start({
        opacity: 1,
        transition: { duration: 0.2 },
      });
    };

    // Initial animation triggers
    flickerText();

    return () => {
      clearInterval(spinInterval);
    };
  }, [flickerControls]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <motion.img
        src={imageSrc}
        alt="tesseract"
        className="h-64 w-64 transform rotate-180"
        style={{ transform: `rotate(${rotation}deg)` }}
      />
      <br />
      <br />
      <motion.h1 className="text-white text-4xl mt-4" animate={flickerControls}>
      Endless Possibilities Awaits You...
      </motion.h1>
    </div>
  );
};

export default SpinAndFlicker;
