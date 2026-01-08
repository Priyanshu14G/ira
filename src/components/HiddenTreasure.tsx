import { motion } from 'framer-motion';
import { useState } from 'react';
import { Gift, Heart, Star, Sparkles } from 'lucide-react';

const treasures = [
  {
    icon: Heart,
    front: "The First Moment",
    back: "The moment I realized you were special - when you laughed at my terrible joke and I knew I wanted to hear that laugh forever"
  },
  {
    icon: Sparkles,
    front: "A Secret",
    back: "I still get butterflies every single time I see your name pop up on my phone"
  },
  {
    icon: Star,
    front: "Why You're Special",
    back: "You are my favorite human because you make the ordinary feel magical, and you see beauty where others see nothing"
  },
  {
    icon: Gift,
    front: "What I Cherish",
    back: "The way you exist in this world - with kindness, strength, and a heart that makes everything brighter"
  }
];

export default function HiddenTreasure() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlipped(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
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
            Hidden Treasures
          </h2>
          <p className="text-pink-200 text-lg">Click each card to reveal a secret...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treasures.map((treasure, index) => {
            const Icon = treasure.icon;
            const isFlipped = flipped.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="perspective-1000"
              >
                <motion.div
                  className="relative w-full h-64 cursor-pointer"
                  onClick={() => toggleFlip(index)}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 shadow-[0_0_30px_rgba(168,85,247,0.2)] flex flex-col items-center justify-center p-8">
                      <Icon className="w-16 h-16 text-pink-300 mb-4 drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]" />
                      <h3 className="text-2xl font-bold text-white">{treasure.front}</h3>
                      <p className="text-pink-200 text-sm mt-2">Click to reveal</p>
                    </div>

                    <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 backdrop-blur-md border border-pink-400/30 shadow-[0_0_40px_rgba(236,72,153,0.3)] flex items-center justify-center p-8 rotate-y-180">
                      <p className="text-white text-lg leading-relaxed text-center">
                        {treasure.back}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
