"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const [textHeight, setTextHeight] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (textRef.current) {
        setTextHeight(textRef.current.offsetHeight);
      }
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Only apply 1.1x height on desktop
  const desktopHeight = isDesktop ? textHeight * 1.1 : "auto";

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 gap-8">
      {/* Left Side: Animated Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-start"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ height: desktopHeight }}
      >
        <img
          src="/profile.avif" // Replace with your image
          alt="About Me"
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Right Side: About Text */}
      <div ref={textRef} className="md:w-1/2 w-full space-y-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>• I’m existentially bored.</p>
        <p>
          • A journalist by profession who likes to document humanity with the
          qualification of clothing by way of scribbling drawings. My hobby and
          my profession started around the same time more than 20 years ago.
        </p>
        <p>
          • I’m interested in people–the choices they make or forgo to making to
          shape their destiny. I make a living poking my nose into the lives of
          others.
        </p>
        <p>
          • To witness cultural diversity and how humanity has organised itself
          variously across the globe gives me immense pleasure. I like to
          travel. It’s not an escape but for a greater engagement. To me
          travelling is a serious endeavour to find fodder to describe and draw
          inspired by people who agree to open up to my probing eyes. When I
          draw them or describe them, in the process, I learn a lot about
          myself.
        </p>
        <p>
          • Dealing with people to document them at some level becomes a
          reflection unto self–I rediscover myself bit by bit. It’s a journey
          that I&apos;m in love with.
        </p>
        <p>
          • I founded{" "}
          <a href="https://vyakti.co.in" className="text-blue-600 underline">
            Vyakti.co.in
          </a>{" "}
          where I do experiential profile of people instead of drawing them,
          however the inherent process is more or less the same. I internalise
          my subject enough to be inspired to draw, in this case to write about
          them.
        </p>
        <p>• I live in Noida. My home doubles as a gallery of my artwork.</p>
      </div>
    </div>
  );
};

export default About;
