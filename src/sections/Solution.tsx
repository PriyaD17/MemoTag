'use client';

import { motion } from 'framer-motion';
import { Activity, BrainCircuit, Bell } from 'lucide-react';

export default function Solution() {
  return (
    <section id="solution" className=" text-gray-900 dark:text-white py-20 px-6">

      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How MemoTag Works
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          MemoTag combines physical and cognitive monitoring to give caregivers early alerts and peace of mind.
        </motion.p>

        {/* Step Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            Icon={Activity}
            title="Wearable Tracking"
            desc="Tracks daily movement, sleep, and motor behavior patterns with a smart band."
            delay={0.3}
          />
          <StepCard
            Icon={BrainCircuit}
            title="AI Cognitive Scoring"
            desc="Analyzes voice, memory prompts, and interaction patterns to assess cognitive decline."
            delay={0.5}
          />
          <StepCard
            Icon={Bell}
            title="Caregiver Alerts"
            desc="Sends real-time alerts and summaries to caregivers with suggested next steps."
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
}

function StepCard({ Icon, title, desc, delay }: { Icon: any; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Icon className="text-blue-600 mb-4 w-10 h-10" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
    </motion.div>
  );
}
