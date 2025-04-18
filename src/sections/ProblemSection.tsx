'use client';

import { motion } from 'framer-motion';
import { BarChart3, AlertTriangle, Stethoscope } from 'lucide-react';

export default function Problem() {
  return (
    <section className="w-full bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Dementia Diagnosis Gap
        </motion.h2>

        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Millions are left undiagnosed every year due to slow evaluations, lack of tools, and delayed behavioral tracking.
        </motion.p>

        {/* Stat Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            Icon={BarChart3}
            title="55M+ People"
            desc="currently live with dementia globally — expected to triple by 2050."
          />
          <StatCard
            Icon={AlertTriangle}
            title="3 in 5 cases"
            desc="go undiagnosed until symptoms worsen dramatically."
          />
          <StatCard
            Icon={Stethoscope}
            title="1 neurologist per 70k+"
            desc="patients in many low-resource countries — critical bottleneck in care."
          />
        </div>
      </div>
    </section>
  );
}

// 🔹 Reusable StatCard component
function StatCard({ Icon, title, desc }: { Icon: any; title: string; desc: string }) {
  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 text-left"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Icon className="text-blue-600 mb-4 w-8 h-8" />
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}
