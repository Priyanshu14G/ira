import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
  {
    image: "images\\20240909_204659.jpg",
    date: "The Beginning(on 09/09/2024 at 8:46 PM)",
    caption: "When two souls recognized each other"
  },
  {
    image: "images\\20250310_130257.jpg",
    date: "First Adventure",
    caption: "Creating memories that would last forever"
  },
  {
    image: "images\\Snapchat-880421603.jpg",
    date: "Perfect Moment",
    caption: "When everything felt just right"
  },
  {
    image: "images\\20250308_184430.jpg",
    date: "Together",
    caption: "Every moment with you is a treasure"
  },
  {
    image: "images\\Snapchat-7259455.jpg",
    date: "Together",
    caption: "Every moment with you is a treasure"
  },
  {
    image: "images\\Snapchat-360744447.jpg",
    date: "Together",
    caption: "In your eyes, I found a place I never want to leave"
  },
  {
    image: "images\\20250310_132131.jpg",
    date: "Together",
    caption: "Moments turned into memories the moment you smiled"
  },
  {
    image: "images\\20250310_131759.jpg",
    date: "Together",
    caption: "Time never felt enough when it was spent with you"
  },
  {
    image: "images\\ff2.jpg",
    date: "Together",
    caption: "With you, every day is a new adventure"
  },
  {
    image: "images\\WhatsApp Image 2026-01-07 at 10.19.55 PM.jpeg",
    date: "Together",
    caption: "You are my today and all of my tomorrows"
  },
  {
    image: "images\\Snapchat-1154276033.jpg",
    date: "Together",
    caption: "As colors painted our faces, I held your hands and time stood still"
  },
  {
    image: "images\\WhatsApp Image 2026-01-07 at 10.25.37 PM.jpeg",
    date: "Together",
    caption: "In your laughter, I found my favorite melody"
  },
  {
    image: "images\\WhatsApp Image 2026-01-07 at 10.20.31 PM.jpeg",
    date: "Together",
    caption: "With you, every moment is a beautiful chapter in our story"
  },
  {
    image: "images\\WhatsApp Image 2026-01-07 at 10.21.03 PM.jpeg",
    date: "Together",
    caption: "You are the reason behind my smiles and the warmth in my heart"
  },
  {
    image: "images\\WhatsApp Image 2026-01-07 at 10.20.28 PM.jpeg",
    date: "Together",
    caption: "Hands held, hearts closer"
  }

];

export default function MemoriesGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Our Memories
          </h2>
          <p className="text-pink-200 text-lg">Moments frozen in time, forever in our hearts</p>
        </motion.div>

        <div className="relative">
          <div className="relative h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-2xl cursor-pointer"
                onClick={() => setSelectedMemory(currentIndex)}
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)] border-4 border-pink-400/30"
                >
                  <img
                    src={memories[currentIndex].image}
                    alt={memories[currentIndex].caption}
                    className="w-full h-[400px] object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8"
                  >
                    <p className="text-pink-300 text-sm font-semibold mb-2">
                      {memories[currentIndex].date}
                    </p>
                    <p className="text-white text-xl font-light">
                      {memories[currentIndex].caption}
                    </p>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="p-3 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-pink-300 hover:bg-purple-500/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {memories.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.5)] w-8'
                      : 'bg-purple-400/30'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="p-3 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 text-pink-300 hover:bg-purple-500/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {selectedMemory !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedMemory(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedMemory(null)}
                  className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="rounded-3xl overflow-hidden border-4 border-pink-400/50 shadow-[0_0_80px_rgba(236,72,153,0.5)]">
                  <img
                    src={memories[selectedMemory].image}
                    alt={memories[selectedMemory].caption}
                    className="w-full h-auto"
                  />
                  <div className="bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-md p-8">
                    <p className="text-pink-200 text-lg font-semibold mb-2">
                      {memories[selectedMemory].date}
                    </p>
                    <p className="text-white text-2xl">
                      {memories[selectedMemory].caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
