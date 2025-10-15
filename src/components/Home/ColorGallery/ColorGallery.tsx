"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

interface Painting {
  id: number;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
}

// 13 paintings using your file names
const paintings: Painting[] = [
  {
    id: 1,
    title: "Color Harmony I",
    artist: "A. Rivera",
    description:
      "An expressive mix of warm and cool tones that symbolize emotional balance and artistic fluidity.",
    imageUrl: "/c_one.jpg",
  },
  {
    id: 2,
    title: "Radiant Flow",
    artist: "L. Chen",
    description:
      "Dynamic brush strokes representing the rhythm of life through vibrant colors and layered depth.",
    imageUrl: "/c_two.jpg",
  },
  {
    id: 3,
    title: "Sunlit Essence",
    artist: "M. Kaur",
    description:
      "Soft golden hues capture fleeting moments of sunlight through abstract landscapes.",
    imageUrl: "/c_three.jpg",
  },
  {
    id: 4,
    title: "Dream Sequence",
    artist: "T. Mehta",
    description:
      "A surreal journey into color and shape — merging dreams and daylight in a fluid transition.",
    imageUrl: "/c_four.jpg",
  },
  {
    id: 5,
    title: "Aurora Pulse",
    artist: "S. Ahmed",
    description:
      "Inspired by the aurora borealis — luminous color flows captured in painterly abstraction.",
    imageUrl: "/c_five.jpg",
  },
  {
    id: 6,
    title: "Coral Whispers",
    artist: "E. Lopez",
    description:
      "An underwater dance of coral tones and sea greens celebrating marine vibrancy.",
    imageUrl: "/c_six.jpg",
  },
  {
    id: 7,
    title: "Golden Drift",
    artist: "R. Singh",
    description:
      "A tranquil piece blending gold, cream, and blue strokes for a soft, drifting feel.",
    imageUrl: "/c_seven.jpg",
  },
  {
    id: 8,
    title: "Mystic Horizon",
    artist: "I. Takahashi",
    description:
      "Evoking twilight skies and cosmic horizons through vibrant pigment layering.",
    imageUrl: "/c_eight.jpg",
  },
  {
    id: 9,
    title: "Serenade of Hues",
    artist: "N. Patel",
    description:
      "An interplay of light and shade — capturing color melodies in rhythmic motion.",
    imageUrl: "/c_nine.jpg",
  },
  {
    id: 10,
    title: "Ethereal Bloom",
    artist: "C. Rossi",
    description:
      "A celebration of nature’s palette through abstract floral compositions.",
    imageUrl: "/c_ten.jpg",
  },
  {
    id: 11,
    title: "Spectrum Veins",
    artist: "H. Ali",
    description:
      "A pulsating mix of bright pigments resembling the energy lines of life itself.",
    imageUrl: "/c_eleven.jpg",
  },
  {
    id: 12,
    title: "Luminous Drift",
    artist: "P. Wright",
    description:
      "Flowing pigments and radiant tones expressing calmness through motion.",
    imageUrl: "/c_twelve.jpg",
  },
  {
    id: 13,
    title: "Celestial Field",
    artist: "Y. Kim",
    description:
      "A dance between light, texture, and emotion — celebrating the infinite field of imagination.",
    imageUrl: "/c_thirteen.jpg",
  },
];

const ColorGallery = () => {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(
    null
  );

  return (
    <div className="p-4 md:p-8 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">
        Color Paintings Gallery
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paintings.map((painting) => (
          <div
            key={painting.id}
            className="relative cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 bg-white group border border-transparent hover:border-pink-300"
            onClick={() => setSelectedPainting(painting)}
          >
            <div className="w-full aspect-square relative">
              <Image
                src={painting.imageUrl}
                alt={painting.title}
                fill
                className="object-cover group-hover:opacity-90 transition"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-lg font-semibold text-white">
                {painting.title}
              </h3>
              <p className="text-sm text-pink-100">{painting.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Transition
        show={!!selectedPainting}
        appear
        as="div"
        className="fixed inset-0 flex justify-center items-center z-50"
      >
        {/* Background Blur */}
        <Transition.Child
          as="div"
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute inset-0 backdrop-blur-md bg-black/40"
          onClick={() => setSelectedPainting(null)}
        />

        {/* Modal Content */}
        <Transition.Child
          as="div"
          enter="transition transform duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition transform duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {selectedPainting && (
            <div className="relative bg-white rounded-3xl w-[90vw] h-[90vh] max-w-[1200px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-pink-200">
              {/* Left: Image */}
              <div className="md:w-1/2 w-full h-1/2 md:h-full relative bg-gradient-to-b from-pink-100 to-orange-100">
                <Image
                  src={selectedPainting.imageUrl}
                  alt={selectedPainting.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Right: Content */}
              <div className="md:w-1/2 w-full h-1/2 md:h-full p-8 overflow-y-auto text-gray-800">
                <h2 className="text-3xl font-bold mb-2 text-pink-600">
                  {selectedPainting.title}
                </h2>
                <p className="text-lg text-orange-500 mb-4 italic">
                  {selectedPainting.artist}
                </p>
                <div className="space-y-4 leading-relaxed text-justify text-gray-700">
                  {selectedPainting.description
                    .split(". ")
                    .map((sentence, idx) => (
                      <p key={idx}>{sentence.trim()}.</p>
                    ))}
                </div>

                <button
                  className="mt-6 float-right bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-full transition-all duration-200"
                  onClick={() => setSelectedPainting(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Transition.Child>
      </Transition>
    </div>
  );
};

export default ColorGallery;
