'use client';

import { motion } from 'framer-motion';
import dynamic from "next/dynamic";
import { Boxes } from "@/components/ui/background_boxes";
import { InteractiveHoverButton } from '@/components/ui/glowing-effect';
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from '@/components/hero_ani/ai-health.json';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-0 min-h-screen  dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white flex items-center justify-center px-6 py-20 transition-colors duration-300"
    >
      {/* Background Boxes */}
      <Boxes className="absolute inset-0 z-0 opacity-20" />

      {/* Decorative Blur */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-100 dark:bg-blue-800 rounded-full filter blur-3xl opacity-40 z-0" />

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="text-blue-600 dark:text-blue-400">AI for</span> Dementia Care */}
            <motion.span
              className="inline-block text-blue-600 dark:text-blue-400"
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              AI for
            </motion.span>{' '}
            Dementia Care

          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <InteractiveHoverButton>
              {/* <a
                href="#cta"
                className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white px-6 py-3 rounded-xl text-base font-medium shadow-lg transition-all"
              >
                Join Waitlist
              </a> */}
            </InteractiveHoverButton>
          </motion.div>
        </div>

        {/* Right: Lottie Animation */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <DynamicLottie animationData={animationData} className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto" loop />
        </motion.div>
      </div>
    </section>
  );
}
