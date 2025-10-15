"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

interface ArtPiece {
  id: number;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
}

const artPieces: ArtPiece[] = [
  {
    id: 1,
    title: "Sunset Overdrive",
    artist: "Jane Doe",
    description:
      "This was an interesting session with an interesting man. He was very comfortable, but not okay me sharing this sketch. ‘I’m so thin and reasonably famous, people will know,’ he reasoned. After a couple of months, he not just allowed, but insisted, I share the sketch—today. ‘Forget safety. Live where you fear to live. Destroy your reputation. Be notorious’ — Rumi.",
    imageUrl: "/one.jpg",
  },
  {
    id: 2,
    title: "Abstract Dreams",
    artist: "John Smith",
    description:
      "My subject is a polymath. He knows a lot. He shed the burden of knowledge along with his clothes and lay straight on the couch in front of me. His fire (energy or life force) came to the fore and illuminated the surroundings. I felt he was levitating. And then, after a while, an earthly thought entered his distilled mind — he shook his limbs, it was the beginning of the end of the session. He got up, stood before me, and leisurely wore his clothes. Rainier Wylde succinctly puts it: ‘Because intimacy isn't about merging. It's about being seen, whole.’",
    imageUrl: "/two.jpg",
  },
  {
    id: 3,
    title: "Color Splash",
    artist: "Alice Johnson",
    description:
      "She’s the first woman in a long time who allowed me to share her sketch. I told her, ‘You’re a woman of substance.’ ‘Indeed, I’m a substantial woman,’ she retorted. She was the one who laughed the most. Irreverent, she didn’t want any politeness in my drawings. She’s free like her philosophical mentor Simone de Beauvoir, who said, ‘The body is not a thing, it is a situation: it is our grasp on the world and our sketch of our project,’ in her seminal book ‘The Second Sex’. And added in a different context, ‘To lose confidence in one’s body is to lose confidence in oneself.’ This applies to men as well.",
    imageUrl: "/three.jpg",
  },
  {
    id: 4,
    title: "Mountain View",
    artist: "Bob Lee",
    description:
      "She’s the first woman in a long time who allowed me to share her sketch. I told her, ‘You’re a woman of substance.’ ‘Indeed, I’m a substantial woman,’ she retorted. She was the one who laughed the most. Irreverent, she didn’t want any politeness in my drawings. She’s free like her philosophical mentor Simone de Beauvoir, who said, ‘The body is not a thing, it is a situation: it is our grasp on the world and our sketch of our project,’ in her seminal book ‘The Second Sex’. And added in a different context, ‘To lose confidence in one’s body is to lose confidence in oneself.’ This applies to men as well.",
    imageUrl: "/four.jpg",
  },
  {
    id: 5,
    title: "Ocean Breeze",
    artist: "Sara Kim",
    description:
      "A sketching session, much like life, never ceases to surprise me. This young man, a faint acquaintance, was rather dogged about having a conversation in the nude with me for a long time. So we did. And when we did, he made himself comfortable on my couch, and indulged in his favourite pastime, completely ignoring me and the fact he was naked. He took a short nap before he left. ‘It was so relaxing, like floating on water,’ is how he summed up the experience.",
    imageUrl: "/five.jpg",
  },
  {
    id: 6,
    title: "Night Lights",
    artist: "Tom Chen",
    description:
      "This was his second attempt. His last engagement in Delhi before a late evening flight. He decided to focus on me to shrug off the awkwardness. His glare was unsettling for a bit, but engaging. His was in-my-face. ‘I don’t draw faces,’ I tell him. He insisted I do this time, particularly the eyes. A grand adventure. He’s not who you think.",
    imageUrl: "/six.jpg",
  },
  {
    id: 7,
    title: "Untitled 7",
    artist: "Unknown",
    description: "ss",
    imageUrl: "/seven.jpg",
  },
  {
    id: 8,
    title: "Untitled 8",
    artist: "Unknown",
    description: "s",
    imageUrl: "/eight.jpg",
  },
  {
    id: 9,
    title: "Untitled 9",
    artist: "Unknown",
    description: "ss",
    imageUrl: "/nine.jpg",
  },
  {
    id: 10,
    title: "Untitled 10",
    artist: "Unknown",
    description: "sdds",
    imageUrl: "/ten.jpg",
  },
  {
    id: 11,
    title: "Untitled 11",
    artist: "Unknown",
    description: "dsd",
    imageUrl: "/eleven.jpg",
  },
  {
    id: 12,
    title: "Untitled 12",
    artist: "Unknown",
    description: "sddsd",
    imageUrl: "/twelve.jpg",
  },
  {
    id: 13,
    title: "Untitled 13",
    artist: "Unknown",
    description: "sddsd",
    imageUrl: "/thirteen.jpg",
  },
  {
    id: 14,
    title: "Untitled 14",
    artist: "Unknown",
    description: "sddsd",
    imageUrl: "/fourteen.JPG",
  },
  {
    id: 15,
    title: "Untitled 15",
    artist: "Unknown",
    description: "sdsd",
    imageUrl: "/fifteen.JPG",
  },
];
const ArtGallery = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);

  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center tracking-tight">
        Art Catalogue
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {artPieces.map((art) => (
          <div
            key={art.id}
            className="relative cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => setSelectedArt(art)}
          >
            <div className="w-full aspect-square relative">
              <Image
                src={art.imageUrl}
                alt={art.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Transition
        show={!!selectedArt}
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
          className="absolute inset-0 backdrop-blur-md bg-black/30"
          onClick={() => setSelectedArt(null)}
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
          {selectedArt && (
            <div className="relative bg-white rounded-2xl w-[90vw] h-[90vh] max-w-[1400px] max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl">
              {/* Left: Image */}
              <div className="md:w-1/2 w-full h-1/2 md:h-full relative">
                <Image
                  src={selectedArt.imageUrl}
                  alt={selectedArt.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Right: Content */}
              <div className="md:w-1/2 w-full h-1/2 md:h-full p-8 overflow-y-auto text-gray-800">
                <h2 className="text-3xl font-bold mb-2 text-gray-900">
                  {selectedArt.title}
                </h2>
                <p className="text-lg text-gray-500 mb-4 italic">
                  {selectedArt.artist}
                </p>
                <div className="space-y-4 leading-relaxed text-justify text-gray-700">
                  {selectedArt.description.split(". ").map((sentence, idx) => (
                    <p key={idx}>{sentence.trim()}.</p>
                  ))}
                </div>

                <button
                  className="mt-6 float-right bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition-colors duration-200"
                  onClick={() => setSelectedArt(null)}
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

export default ArtGallery;