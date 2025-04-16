'use client';

import { motion } from 'framer-motion';

export default function Traction() {
  return (
    <section id="traction" className="w-full  dark:bg-gray-900 text-gray-900 dark:text-whitebg-white py-10 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Traction & Partnerships
        </motion.h2>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-xl sm:max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          MemoTag is already making waves across healthcare and AI communities.
        </motion.p>

        {/* Stats */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-left">
          <StatBlock
            title="1,200+ Preorders"
            desc="Families and clinics have already signed up for early access."
            delay={0.3}
          />
          <StatBlock
            title="5 Clinical Pilots"
            desc="Running in partnership with neurology departments and elder-care NGOs."
            delay={0.5}
          />
          <StatBlock
            title="Featured on Shark Tank"
            desc="Recognized for innovation and real-world impact in eldercare."
            delay={0.7}
          />
        </div>

        {/* Logos / Partners */}
        <motion.div
          className="mt-10 sm:mt-14 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center justify-start gap-18 animate-scroll">
            <img src="/traction/partner1.svg" className="h-8 sm:h-10" alt="Partner 1" />
            <img src="/traction/partner2.svg" className="h-8 sm:h-10" alt="Partner 2" />
            <img src="/traction/partner3.svg" className="h-8 sm:h-10" alt="Partner 3" />
            <img src="/traction/partner5.svg" className="h-8 sm:h-10" alt="Partner 5" />
            <img src="/traction/partner4.svg" className="h-8 sm:h-10" alt="Partner 4" />
            <img src="/traction/partner1.svg" className="h-8 sm:h-10" alt="Partner 1" />
            <img src="/traction/partner2.svg" className="h-8 sm:h-10" alt="Partner 2" />
            <img src="/traction/partner3.svg" className="h-8 sm:h-10" alt="Partner 3" />
            <img src="/traction/partner5.svg" className="h-8 sm:h-10" alt="Partner 5" />
            <img src="/traction/partner4.svg" className="h-8 sm:h-10" alt="Partner 4" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatBlock({ title, desc, delay }: { title: string; desc: string; delay: number }) {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <h3 className="text-2xl font-bold text-blue-600">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}
