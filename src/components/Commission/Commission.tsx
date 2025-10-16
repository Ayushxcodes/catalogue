"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Commission = () => {
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

  const desktopHeight = isDesktop ? textHeight * 1.4 : "auto";

  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 gap-8">
      {/* Left Side: Animated Image */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center rounded-lg overflow-hidden"
        style={{ height: desktopHeight }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src="/potrait.avif"
          alt="Commission Art"
          className="w-full h-auto md:h-full object-cover rounded-lg"
        />

        {/* Photo Credit (Mobile only) */}
        <p className="text-sm text-gray-500 mt-3 italic md:hidden text-center">
          Photo: Raul Irani
        </p>
      </motion.div>

      {/* Right Side: Commission Content */}
      <div ref={textRef} className="md:w-1/2 w-full space-y-4 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">Why Should You Pose For Me?</h1>

        <p>
          • I aim to capture the miraculous in the mundane. Miracles can be
          subtle, and working with me requires a realistic openness to
          experience them.
        </p>
        <p>
          • I act as an existential mirror, reflecting your essence through
          sketches rather than appearances. Beauty is energy, felt rather than
          seen.
        </p>
        <p>
          • Both you and I change constantly; each encounter is unique, and the
          sketch evolves as we do. My work reflects the inner dynamics of the
          moment.
        </p>
        <p>
          • Vulnerability is empowering. By letting go of layers and posing
          honestly, my subjects often discover strength and freedom, which I
          witness and share in my work.
        </p>
        <p>• It’s never too late to embrace a meaningful encounter.</p>

        {/* Contact Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
          >
            Contact Me
          </a>
        </div>

        {/* Photo Credit (Desktop only) */}
        <p className="hidden md:block text-sm text-gray-500 mt-4 italic">
          Photo: Raul Irani
        </p>
      </div>
    </div>
  );
};

export default Commission;
