import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-night-bg text-night-text px-4 pt-32 pb-16 flex flex-col items-center">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl w-full px-2 sm:px-4"
        >
          <h1 className="text-3xl sm:text-5xl font-serif text-night-heading mb-6">
            Unlock AI Decisions with Transparency
          </h1>
          <p className="text-base sm:text-lg text-night-muted mb-8 font-sans">
            AlgoLens empowers analysts to explore, validate, and explain AI-driven loan approval decisions with clarity and confidence—ensuring transparency, trust, and accountability in every outcome.
          </p>
          <Link
            to="/dashboard"
            className="inline-block px-6 py-3 rounded-lg bg-button-gradient text-white font-semibold text-base sm:text-lg hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </motion.section>

        {/* Features Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl w-full px-2"
        >
          {[
            {
              title: 'Model Insights',
              desc: 'Understand key factors influencing individual predictions using SHAP & LIME.',
            },
            {
              title: 'Trust & Audit',
              desc: 'Audit decisions made by ML systems and ensure fairness, explainability, and transparency.',
            },
            {
              title: 'Analyst-First UI',
              desc: 'Designed for professionals who need clarity, not complexity.',
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-night-card rounded-xl shadow-soft p-6 border border-night-border hover:shadow-card transition"
            >
              <h3 className="text-lg sm:text-xl font-serif text-night-heading mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-night-muted">{feature.desc}</p>
            </div>
          ))}
        </motion.section>
      </main>
    </>
  );
};

export default Home;
