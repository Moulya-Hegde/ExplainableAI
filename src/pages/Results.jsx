import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const Results = () => {
  const {
    result,
    justification,
    feature_explanation,
    feature_contributions,
    suggestions,
    probability,
  } = useSelector((state) => state.result)

  return (
    <>
      
      <main className="min-h-screen bg-night-bg text-night-text px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-serif text-night-heading font-bold mb-3">
              Prediction Results
            </h1>
            <p className="text-night-muted text-lg font-mono">
              Overview of the loan decision and model interpretation
            </p>
          </motion.div>

          {/* Decision Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#2e2e38] to-[#1f1f27] p-8 rounded-xl shadow-card"
          >
            <h2 className="text-2xl font-serif text-night-heading mb-4">🧾 Loan Application Decision</h2>
            <p className="text-night-muted text-lg leading-relaxed">
              The application was
              {' '}
              <span className={result === 'Loan Approved' ? 'text-green-400 font-bold' : 'text-red-400 font-bold'}>
                {result}
              </span>
              . Confidence Score:
              {' '}
              <span className="text-night-accent font-bold">{probability}%</span>
              <br /><br />
              {justification}
            </p>
          </motion.div>

          {/* Feature-Level Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-night-card p-8 rounded-xl shadow-soft"
          >
            <h3 className="text-2xl font-serif text-night-heading mb-4">🔍 Feature-Level Explanation</h3>
            <p className="text-night-muted whitespace-pre-line text-lg">{feature_explanation}</p>
          </motion.div>

          {/* Feature Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-night-card p-8 rounded-xl shadow-soft"
          >
            <h3 className="text-2xl font-serif text-night-heading mb-4">📊 Feature Contributions (Top 5)</h3>
            <pre className="text-night-muted whitespace-pre-line text-lg font-mono">{feature_contributions}</pre>
          </motion.div>

          {/* Suggestions Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-night-card p-8 rounded-xl shadow-soft"
          >
            <h3 className="text-2xl font-serif text-night-heading mb-4">💡 How to Improve Approval Chances</h3>
            <p className="text-night-muted whitespace-pre-line text-lg">{suggestions}</p>
          </motion.div>

        </div>
      </main>
    </>
  )
}

export default Results
