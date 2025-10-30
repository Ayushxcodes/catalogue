"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const Landing = () => {
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

  const imageHeight = isDesktop ? textHeight * 1.8 : "auto";

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="flex flex-col w-full bg-gray-50">
      {/* Top Section — Intro */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-24 gap-10">
        {/* Left Side — Text */}
        <motion.div
          ref={textRef}
          className="md:w-1/2 w-full text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            I HOST CONVERSATIONS IN THE NUDE
          </h1>

          <h2 className="text-lg md:text-xl font-medium text-gray-600 tracking-wide">
            This website is about my tryst with humanity without the
            qualification of clothing.
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            I, <span className="font-semibold">Mihir Srivastava</span>, sketch
            people in the nude. A hobby that started nearly 25 years ago has
            become an existential experiment with more than 500 people having
            participated in it, and the number is growing. I love to converse
            with them while drawing inspired by their bare exuberance.
          </p>
        </motion.div>

        {/* Right Side — Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-end rounded-xl overflow-hidden shadow-md"
          style={{ height: imageHeight }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="relative w-full md:w-[85%] max-w-[550px] h-auto rounded-xl overflow-hidden">
            <Image
              src="/profile.avif"
              alt="Landing Artwork"
              width={600}
              height={400}
              className="object-contain rounded-xl w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Section — Reflective Text */}
      <motion.div
        className="w-full px-6 md:px-20 py-12 bg-white text-gray-800 border-t border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="max-w-4xl mx-auto space-y-6 text-justify leading-relaxed text-base md:text-lg">
          {/* ✅ Added Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8 tracking-wide">
            PRIVATE SPACE FOR PUBLIC NUDITY
          </h2>

          {[
            "Nudity is not the end of the exercise but the beginning. It’s a ticket to enter this space that I call ‘private space for public nudity’.",
            "In this space, I represent society, or the rest of the world, therefore dressed. In this space, we interact as energies, engagement is sought, sketch is capturing this engagement in bold lines. Trust is the basis of engagement and nudity is not, therefore, a state of being, but a dynamic process of unlearning.",
            "Anonymity and privacy guaranteed, for it doesn’t matter who my subjects are, their attributes, but the energy they bring to the engagement. Therefore, I don’t draw what I see, but what I feel.",
            "Paradoxical it is, I ask my subjects to experience solitude in my company, in this space, for we are different, closer to our inherent self, when we are not performing, securely secluded in a room, and naked. Society and seclusion are sought at the same time in this private space for public nudity.",
            "Also to witness in the way they have constructed themselves, entwined with complex identities, many manifestations of ego, for social consumption. So, here, in this space, they don’t represent themselves, they just exist.",
            "Trust in self, and me help my subject reconcile this paradoxical situation. This experiment has no fixed agenda, time frame, and is open to possibilities.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
