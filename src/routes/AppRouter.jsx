import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import CheckApproval from '../pages/CheckApproval';
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/check-approval" element={<CheckApproval />} />
       
    </Routes>
  )
}

export default AppRouter
