import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import RecentApplications from '../components/RecentApplications';

const COLORS = ['#8b5cf6', '#f87171'];


const monthlyData = [
  { month: 'Nov', apps: 140 },
  { month: 'Dec', apps: 180 },
  { month: 'Jan', apps: 220 },
  { month: 'Feb', apps: 210 },
  { month: 'Mar', apps: 250 },
  { month: 'Apr', apps: 300 },
];

const recentApps = [
  { name: 'Jane Doe', status: 'Approved', score: 720, risk: 'Low' },
  { name: 'John Smith', status: 'Rejected', score: 590, risk: 'High' },
  { name: 'Priya Patel', status: 'Approved', score: 660, risk: 'Medium' },
];

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState('approval');
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/getstats') // Change to your backend URL
      .then((res) => {
        const data = Array.isArray(res.data) ? res.data[0] : res.data; // Handle array or object
        setStats(data);
      })
      .catch((error) => {
        console.error('Failed to fetch stats:', error);
      });
  }, []);
  
  
  

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-6 py-20 bg-night-bg text-night-text font-sans pt-5">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {/* Heading */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 px-2 sm:px-4">
            {/* Heading + Subtext */}
            <div className="text-center md:text-left md:flex-1">
              <h1 className="text-5xl font-serif text-night-heading mb-1 font-bold">Dashboard</h1>
              <p className="text-night-muted font-semibold font-mono pt-2 text-xl">
                Explore loan trends, approvals, and AI-driven decisions in one place
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 md:mt-0 md:text-right text-center">
              <Link
                to="/check-approval"
                className="inline-block px-6 py-3 rounded-lg bg-button-gradient text-white font-semibold hover:opacity-90 transition text-lg mx-auto md:mx-0"
              >
                Check Loan Approval
              </Link>
            </div>
          </div>

          {/* Layout: Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="flex flex-col gap-8">

              {/* Pie Chart */}
              <div className="bg-night-card p-6 rounded-xl border border-night-border shadow-card">
                <h2 className="text-2xl font-serif text-night-heading mb-2">Approval Breakdown</h2>
                <p className="text-sm text-night-muted mb-4">Overview of loan application results</p>

                <ResponsiveContainer width="100%" height={250}>
  <PieChart>
    <Pie
      data={[
        { name: 'Approved', value: stats?.approved || 0 },  // Dynamic data
        { name: 'Rejected', value: stats?.rejected || 0 },  // Dynamic data
      ]}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={100}
      paddingAngle={4}
      dataKey="value"
      labelLine={false}
      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
    >
      {/* Corrected: using the inline data directly */}
      {[{ name: 'Approved', value: stats?.approved || 0 }, { name: 'Rejected', value: stats?.rejected || 0 }]
        .map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
    </Pie>
    <Tooltip
      formatter={(value, name) => [`${value}`, name]}
      contentStyle={{ backgroundColor: '#1f1f27', borderColor: '#2e2e38', color: '#fff' }}
    />
  </PieChart>
</ResponsiveContainer>

              </div>

              </div>

            {/* Right Column: Metrics */}
            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-2 gap-4">
                {!stats ? (
                  // Show loading skeletons
                  [...Array(6)].map((_, idx) => (
                    <div
                      key={idx}
                      className="bg-night-surface p-5 rounded-lg border border-night-border shadow-soft animate-pulse"
                    >
                      <div className="h-4 bg-night-muted rounded w-3/4 mb-2" />
                      <div className="h-6 bg-night-muted rounded w-1/2" />
                    </div>
                  ))
                ) : (
                  [
                    { label: 'Total Applications', value: stats.total },
                    { label: 'Approved', value: stats.approved },
                    { label: 'Rejected', value: stats.rejected },
                    { label: 'Avg Credit Score', value: stats.averagecredit },
                    { label: 'Avg Interest Rate', value: `${stats.averageinterest}%` },
                    { label: 'Default Rate', value: `${stats.default}%` },
                  ].map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-night-surface p-5 rounded-lg border border-night-border shadow-soft hover:shadow-card transition"
                    >
                      <p className="text-sm text-night-muted">{metric.label}</p>
                      <motion.p
                        className="text-xl font-semibold text-night-heading"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                      >
                        {metric.value}
                      </motion.p>
                    </div>
                  ))
                )}
              </div>

              <RecentApplications />
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
