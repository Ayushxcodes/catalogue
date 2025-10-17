"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = ["/h1.jpg", "/h2.jpg", "/h3.jpg"];

const heroTexts = [
  {
    title: "Existential boredom!! Is seed to all creativity.",
    paragraphs: [
      "The man from the mountains stood tall in my living room. He imagined as if standing in the courtyard of the family cottage overlooking the green hills.",
      "‘What time is it?’ I ask. ‘Must be evening,’ he says, ‘I can hear chirruping of birds.’",
      "Though he lived that experience substantially, he was very much in the present.",
      "He insisted that I focus on drawing him, and not the surroundings, for he can’t visualise what I see and I can’t visualise what he’s experiencing.",
    ],
  },
  {
    title: "Mind over Matter",
    paragraphs: [
      "We talked about loss and vulnerability. ‘I can exist in uncomfortable situations,’ my subject said.",
      "‘You don’t have to,’ I dissuaded him. ‘Why?’ ‘I know but I can’t put it in words,’ he retorted.",
      "I encouraged him to read Brené Brown, for she beautifully explains: ‘Courage starts with showing up and letting ourselves be seen.’",
      "And adds in a different context, ‘Embracing our vulnerabilities is risky but not nearly as dangerous as giving up on love and belonging and joy — the experiences that make us the most vulnerable. Only when we are brave enough to explore the darkness will we discover the infinite power of our light.’",
    ],
  },
  {
    title: "Joyful Absurdity",
    paragraphs: [
      "Sitting naked before me was farcical to him. ‘I’ll do it for you,’ he said.",
      "‘Don’t, if you don’t want it,’ I retorted. ‘I want it to do it for yourself or for no one. Must clarify this is a collaboration not charity,’ I insisted.",
      "And then pondered for a bit — this could mean something very different. ‘Do you want me to take responsibility of you shedding your clothes?’ I ask.",
      "There was a long silence. ‘It's good to do stupid things that make one uncomfortable,’ I told him. ‘Having sketched so many people, the world will not fall apart. At least not in the way you think.’",
      "He would often burst out laughing. ‘It was joyful,’ was his parting remark.",
    ],
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const text = heroTexts[current];

  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-gray-50 overflow-hidden px-4 py-10">
      {/* Centered Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Live Images
        </h1>
        <p className="text-sm md:text-base text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
          NUDITY IS REVEALING. PEOPLE SPEAK THEIR MIND WITHOUT INHIBITIONS WHEN
          THEY INSPIRE MY DRAWINGS WITH THEIR BARE COUNTENANCE.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* LEFT TEXT */}
        <div className="md:w-1/2 w-full p-6 md:p-10 flex flex-col items-center md:items-start text-center md:text-left">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={text.title}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-5 leading-tight">
                {text.title}
              </h2>
              <div className="text-base md:text-lg text-gray-700 mb-6 max-w-md leading-relaxed space-y-4">
                {text.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Explore Catalogue
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative md:w-1/2 w-full h-[250px] md:h-[70vh] flex items-center justify-center bg-white overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={heroImages[current]}
                alt={`Hero Image ${current + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
