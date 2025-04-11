import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

const Results = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-night-bg text-night-text px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-serif text-night-heading font-bold text-center mb-3"
        >
          Prediction Results
        </motion.h1>
        <p className="text-night-muted text-center text-lg font-mono mb-12">
          Overview of loan decision and insights from the model
        </p>

        {/* Explanation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2e2e38] to-[#1f1f27] p-6 rounded-xl shadow-card mb-10"
        >
          <h2 className="text-2xl font-serif font-semibold text-night-heading mb-3">📄 Decision Explanation</h2>
          <p className="text-night-muted text-sm leading-relaxed">
            The application was <span className="text-green-400 font-semibold">Approved</span> based on a combination of factors including a healthy credit score, stable income level, and moderate loan amount. The confidence score for this decision is <span className="text-night-accent font-bold">87%</span>. 
            The interest rate and home ownership status further supported the approval.
          </p>
        </motion.div>

        {/* Charts Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
        >
          {/* Dummy Chart 1 */}
          <div className="bg-night-card p-5 rounded-xl shadow-soft">
            <h3 className="text-lg font-serif text-night-heading mb-3">📊 Income vs Loan Amount</h3>
            <div className="h-48 flex items-center justify-center text-night-muted italic">[Chart Placeholder]</div>
          </div>

          {/* Dummy Chart 2 */}
          <div className="bg-night-card p-5 rounded-xl shadow-soft">
            <h3 className="text-lg font-serif text-night-heading mb-3">📈 Credit Score Trend</h3>
            <div className="h-48 flex items-center justify-center text-night-muted italic">[Chart Placeholder]</div>
          </div>
        </motion.div>

        {/* Suggestions Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-night-card p-6 rounded-xl shadow-soft"
        >
          <h3 className="text-xl font-serif text-night-heading mb-4">💡 Suggestions</h3>
          <ul className="space-y-3 list-disc list-inside text-night-muted text-sm">
            <li>Maintain your credit score above 700 to retain eligibility.</li>
            <li>Reduce loan interest rate by opting for a shorter term.</li>
            <li>Improve income-to-loan ratio for better approval odds.</li>
            <li>Keep employment history stable for creditworthiness.</li>
          </ul>
        </motion.div>
      </div>
    </main>
    </>
  )
}

export default Results
