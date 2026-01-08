import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FinalReveal() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-32 h-32 mx-auto text-pink-400 fill-pink-400 drop-shadow-[0_0_40px_rgba(244,114,182,0.8)]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.p
            className="text-4xl md:text-5xl font-light text-white leading-relaxed"
          >
            No matter where life takes us...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-pink-200 leading-relaxed"
          >
            No matter what storms we weather...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-light text-purple-200 leading-relaxed"
          >
            This universe will always be yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 3 }}
            viewport={{ once: true }}
            className="pt-12"
          >
            <motion.p
              animate={{
                textShadow: [
                  '0 0 20px rgba(244,114,182,0.5)',
                  '0 0 40px rgba(244,114,182,0.8)',
                  '0 0 20px rgba(244,114,182,0.5)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
            >
              I love you.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-2xl text-pink-300 font-light">
              Forever and always. ✨
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 5 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pink-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
