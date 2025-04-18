'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/waitlist';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
      const { error } = await supabase.from('waitlist').insert([{ email }]);

      if (error) {
        console.error(error);
        alert('Something went wrong.');
        return;
      }

      setSubmitted(true);
      setEmail('');
      };

  return (
    <section id="cta" className="bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Join the MemoTag Waitlist
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Be the first to access our AI-powered dementia care tool — for families, caregivers, and health professionals.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`px-6 py-3 rounded-xl font-medium transition ${
              submitted
                ? 'bg-green-600 text-white cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            disabled={submitted}
          >
            {submitted ? 'Submitted ✅' : 'Join Waitlist'}
          </button>
        </motion.form>

        {submitted && (
          <p className="mt-4 text-green-600 font-medium">Thanks! We’ll be in touch soon.</p>
        )}
      </div>
    </section>
  );
}
