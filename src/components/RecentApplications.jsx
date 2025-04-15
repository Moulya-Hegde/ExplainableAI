import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RecentApplications() {
  const [recentApps, setRecentApps] = useState([]);

  // Fetch recent applications data
  useEffect(() => {
    // Replace with your actual API URL
    axios
      .get("http://localhost:5000/getuserdata")
      .then((res) => {
        setRecentApps(res.data); // Assuming the response is an array
      })
      .catch((error) => {
        console.error("Failed to fetch recent applications:", error);
      });
  }, []);

  return (
    <div className="bg-night-card p-6 rounded-xl border border-night-border shadow-card">
      <h2 className="text-xl font-serif text-night-heading mb-4">
        Recent Applications
      </h2>
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
            {recentApps.slice(-5).map((app) => (
              <tr
                key={app._id}
                className="border-b border-night-border hover:bg-night-surface"
              >
                <td className="py-2">{app.name}</td>
                <td
                  className={`py-2 ${
                    app.Status === "Loan Approved"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {app.Status}
                </td>
                <td className="py-2">{app.credit_score}</td>
                <td className="py-2">{app.Risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
