import { motion } from 'framer-motion';
import { useState } from 'react';
import { Lock, Unlock, KeyRound } from 'lucide-react';

export default function SecretSection() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState('');
  const [shake, setShake] = useState(false);

  const correctPassword = 'forever';

  const handleUnlock = () => {
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        {!isUnlocked ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: shake ? [0, -10, 10, -10, 10, 0] : 0
              }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 0.5
                }
              }}
              className="mb-8"
            >
              <Lock className="w-24 h-24 mx-auto text-pink-300 drop-shadow-[0_0_20px_rgba(244,114,182,0.5)]" />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              A Secret Door
            </h2>
            <p className="text-pink-200 text-lg mb-12">
              Enter the magic word to unlock something special...
            </p>

            <div className="max-w-md mx-auto">
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-pink-300" />
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                  placeholder="Hint: How long is forever?"
                  className="w-full pl-12 pr-4 py-4 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-full text-white placeholder-pink-200/50 focus:outline-none focus:border-pink-400/50 focus:shadow-[0_0_20px_rgba(244,114,182,0.3)] transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleUnlock}
                className="mt-6 px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)] transition-all"
              >
                Unlock
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ type: "spring", duration: 1 }}
              className="mb-8"
            >
              <Unlock className="w-24 h-24 mx-auto text-pink-300 drop-shadow-[0_0_30px_rgba(244,114,182,0.7)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                You Unlocked My Heart
              </h2>

              <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/30 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-2xl text-white leading-relaxed mb-6"
                >
                  From the moment you entered my life, everything changed.
                  You brought color to my grayscale world, music to my silence,
                  and meaning to my existence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-2xl text-pink-200 leading-relaxed mb-6"
                >
                  I promise to cherish every moment, treasure every memory,
                  and love you with everything I am.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-3xl font-bold text-white"
                >
                  You are my forever. ♡
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
