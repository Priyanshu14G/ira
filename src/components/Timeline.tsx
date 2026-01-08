import { motion } from 'framer-motion';
import { MessageCircle, Laugh, CloudRain, Heart } from 'lucide-react';

const milestones = [
  {
    icon: MessageCircle,
    title: "First Conversation",
    description: "When words became the bridge between two hearts",
    color: "from-pink-400 to-purple-400"
  },
  {
    icon: Laugh,
    title: "First Laugh",
    description: "The moment joy found its home in us",
    color: "from-purple-400 to-blue-400"
  },
  {
    icon: CloudRain,
    title: "First Challenge",
    description: "When we learned that storms make us stronger together",
    color: "from-blue-400 to-cyan-400"
  },
  {
    icon: Heart,
    title: "Stronger Together",
    description: "Every day since, choosing each other, choosing us",
    color: "from-cyan-400 to-pink-400"
  }
];

export default function Timeline() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            Timeline of Us
          </h2>
          <p className="text-pink-200 text-lg">Our journey, written in the stars</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 opacity-30" />

          {milestones.map((milestone, index) => {
            const Icon = milestone.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-20 ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-pink-200 leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                <div className="w-2/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.4)] relative z-10`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                    <motion.div
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${milestone.color}`}
                    />
                  </motion.div>
                </div>

                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
