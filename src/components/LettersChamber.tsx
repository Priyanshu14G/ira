import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, X } from 'lucide-react';

const letters = [
  {
    title: "To My Love",
    content: `In a world of chaos, you are my peace.
In a sea of faces, you are the only one I see.
Every sunrise is brighter because you exist,
Every sunset more beautiful because you're mine.
You are the poetry my heart has been writing all along.`
  },
  {
    title: "Forever Yours",
    content: `Your smile is the light that guides me home,
Your laughter is the music my soul dances to.
In your eyes, I found a universe,
In your arms, I found my home.
This is not just love - this is destiny choosing us.`
  },
  {
    title: "My Promise",
    content: `I promise to love you on your brightest days,
And hold you through your darkest nights.
I promise to choose you, every single day,
In every lifetime, in every universe,
You will always be my answer.`
  }
];

export default function LettersChamber() {
  const [openLetter, setOpenLetter] = useState<number | null>(null);

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
            Letters From My Heart
          </h2>
          <p className="text-pink-200 text-lg">Words I've been meaning to say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateZ: -5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                y: -20,
                rotateZ: 0,
                scale: 1.05
              }}
              className="cursor-pointer"
              onClick={() => setOpenLetter(index)}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] h-64 flex flex-col items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Mail className="w-16 h-16 text-pink-300 mb-4 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">{letter.title}</h3>
                <p className="text-pink-200 text-sm">Click to open</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {openLetter !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setOpenLetter(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateZ: -10 }}
                animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
                exit={{ scale: 0.8, opacity: 0, rotateZ: 10 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative max-w-2xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpenLetter(null)}
                  className="absolute -top-12 right-0 text-white hover:text-pink-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-12 shadow-[0_0_80px_rgba(236,72,153,0.5)] border-4 border-pink-400/30">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl font-bold text-purple-900 mb-6 text-center"
                  >
                    {letters[openLetter].title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-800 leading-relaxed whitespace-pre-line font-serif"
                  >
                    {letters[openLetter].content}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 text-right text-purple-900 font-serif italic"
                  >
                    Forever yours,
                    <br />
                    <span className="text-2xl">♡</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
