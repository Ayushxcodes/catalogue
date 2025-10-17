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
      setIsDesktop(window.innerWidth >= 768);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const desktopHeight = isDesktop ? textHeight * 1.05 : "auto";

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10 bg-white text-black overflow-hidden">
      {/* Left Side — Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ height: desktopHeight }}
      >
        <motion.img
          src="/profile.avif"
          alt="Mihir Srivastava"
          className="w-full h-auto md:h-full max-h-[700px] object-cover rounded-2xl shadow-xl grayscale hover:grayscale-0 transition duration-500"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Right Side — Text */}
      <motion.div
        ref={textRef}
        className="md:w-1/2 w-full space-y-5 leading-relaxed"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center md:text-left uppercase tracking-wide">
          About Me
        </h1>

        <p>
          I, <span className="font-semibold">Mihir Srivastava</span>,
          professionally identify myself as a journalist. Though I like to fancy
          myself as undefined, I’m everything in some measure and nothing in
          particular — my outlines are blurred.
        </p>

        <p>
          With over two decades of experience in leading national weeklies, I’ve
          explored a wide range of subjects — politics, environment, wildlife,
          and investigative journalism — which essentially entails time,
          persistence, and curiosity.
        </p>

        <p>
          I’ve authored books such as{" "}
          <span className="italic">“Love Jihadi”</span> and
          <span className="italic"> “Conversations In The Nude”</span>, with
          more in the pipeline. Beyond writing, I’ve also ventured into
          documentary filmmaking.
        </p>

        <p>
          I find solace in painting and sketching — a way to document humanity
          through artistic engagement. Curiosity drives me: I’m fascinated by
          people — their choices, contradictions, and moments of truth. Writing
          and drawing are tools to capture the essence of people and our times.
        </p>

        <p>
          A journalist at heart, I make a living poking my nose in other
          people’s affairs. I co-founded and edit{" "}
          <a
            href="https://vyakti.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Vyakti.co.in
          </a>
          , where I write about individuals to better understand our world — how
          we arrived here and where we’re heading at an express pace.
        </p>

        <p>
          In this dynamic quagmire of existence, a ‘Vyakti’ (or individual)
          serves as both a symbol of change and its catalyst. Traveling, for me,
          isn’t leisure — it’s a serious pursuit of the unknown, an act of
          discovery and reflection.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
