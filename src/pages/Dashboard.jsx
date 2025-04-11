import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip
} from 'recharts';
import { Link } from 'react-router-dom';

const approvalData = [
  { name: 'Approved', value: 70 },
  { name: 'Rejected', value: 30 },
];
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

  return (
    <main className="min-h-screen px-6 py-20 bg-night-bg text-night-text font-sans">
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
        data={approvalData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={100}
        paddingAngle={4}
        dataKey="value"
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
      >
        {approvalData.map((entry, index) => (
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


            {/* Bar Chart */}
            <div className="bg-night-card p-6 rounded-xl border border-night-border shadow-card">
              <h2 className="text-xl font-serif text-night-heading mb-4">Monthly Applications</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={monthlyData}>
                  <XAxis dataKey="month" stroke="#a78bfa" />
                  <YAxis stroke="#a78bfa" />
                  <Tooltip />
                  <Bar dataKey="apps" fill="#a78bfa" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Column: Metrics */}
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Total Applications', value: '2,450' },
                { label: 'Approved', value: '1,715' },
                { label: 'Rejected', value: '735' },
                { label: 'Avg Credit Score', value: '678' },
                { label: 'Avg Interest Rate', value: '4.7%' },
                { label: 'Default Rate', value: '2.3%' },
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-night-surface p-5 rounded-lg border border-night-border shadow-soft hover:shadow-card transition"
                >
                  <p className="text-sm text-night-muted">{metric.label}</p>
                  <p className="text-xl font-semibold text-night-heading">{metric.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Table */}
            <div className="bg-night-card p-6 rounded-xl border border-night-border shadow-card">
              <h2 className="text-xl font-serif text-night-heading mb-4">Recent Applications</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-night-text">
                  <thead className="text-xs text-night-muted uppercase border-b border-night-border">
                    <tr>
                      <th className="py-2">Name</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Credit Score</th>
                      <th className="py-2">Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentApps.map((app, idx) => (
                      <tr key={idx} className="border-b border-night-border hover:bg-night-surface">
                        <td className="py-2">{app.name}</td>
                        <td className={`py-2 ${app.status === 'Approved' ? 'text-green-400' : 'text-red-400'}`}>{app.status}</td>
                        <td className="py-2">{app.score}</td>
                        <td className="py-2">{app.risk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
