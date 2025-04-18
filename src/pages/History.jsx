import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setResultData } from '../redux/resultSlice';
import Results from './Results';
import axios from 'axios';


const History = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:5000/getuserdata')
      .then((res) => setUserData(res.data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  const handleFullReview = (data) => {
    dispatch(setResultData({
      result: data.Status,
      justification: data.justification,
      feature_explanation: data.feature_explanation,
      feature_contributions: data.feature_contributions,
      suggestions: data.suggestions,
      probability: data.Risk || '',
    }));
    setSelected(data._id);
  };

  const filtered = userData.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (selected) return <Results />;

  return (
    <>
    <div className="min-h-screen bg-night-bg px-6 py-12 text-night-text">
      <h1 className="text-4xl font-serif text-night-heading text-center mb-10">📜 History</h1>

      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full px-4 py-3 rounded-xl bg-night-surface text-night-text placeholder-night-muted outline-none focus:ring-2 ring-night-accent transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filtered.map((data, index) => {
          const [email, date, time] = data._id.split(' ');

          return (
            <div
              key={index}
              className="bg-night-surface rounded-xl shadow-lg p-6 transition hover:scale-[1.015] hover:shadow-2xl border border-night-muted/20"
            >
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-night-heading mb-1">{data.name}</h2>
                <p className="text-sm text-night-muted mb-1">📧 {email}</p>
                <p className="text-sm text-night-muted">🕒 {date} at {time}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className={`text-sm font-medium ${data.Status === 'Loan Denied' ? 'text-red-400' : 'text-green-400'}`}>
                  {data.Status}
                </span>
                <button
                  onClick={() => handleFullReview(data)}
                  className="text-sm px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow hover:scale-105 transition-transform"
                >
                  Full Analysis →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};

export default History;
