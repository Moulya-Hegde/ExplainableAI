import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setResultData } from '../redux/resultSlice'
import Results from "./Results";
export default function CheckApprovalForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState({
    age: "",
    name: "",
    email: "",
    gender: "",
    edu: "",
    inc: "",
    emp: "",
    pho: "",
    amt: "",
    intent: "",
    rate: "",
    percinc: "",
    cpc: "",
    credit: "",
    prev: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.age || formData.age < 18 || formData.age > 100)
      newErrors.age = "Age must be between 18 and 100";
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.edu) newErrors.edu = "Education is required";
    if (!formData.inc || formData.inc < 0)
      newErrors.inc = "Income must be positive";
    if (!formData.emp || formData.emp < 0)
      newErrors.emp = "Experience must be positive";
    if (!formData.pho) newErrors.pho = "Select home ownership";
    if (!formData.amt || formData.amt < 500 || formData.amt > 40000)
      newErrors.amt = "Loan amount must be Rs.100 - Rs.10,00,000";
    if (!formData.intent) newErrors.intent = "Select loan intent";
    if (!formData.rate || formData.rate < 5 || formData.rate > 30)
      newErrors.rate = "Interest rate must be 5% - 30%";
    if (!formData.percinc || formData.percinc > 100)
      newErrors.percinc = "Must be within 0 - 100";
    if (!formData.cpc) newErrors.cpc = "Credit history is required";
    if (!formData.credit || formData.credit < 200 || formData.credit > 850)
      newErrors.credit = "Credit score must be 300 - 850";
    if (formData.prev === "") newErrors.prev = "Select previous default option";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    setLoading(true);
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        age: Number(formData.age),
        gender: Number(formData.gender),
        edu: Number(formData.edu),
        inc: Number(formData.inc),
        emp: Number(formData.emp),
        pho: Number(formData.pho),
        amt: Number(formData.amt),
        intent: Number(formData.intent),
        rate: Number(formData.rate),
        percinc: Number(formData.percinc),
        cpc: Number(formData.cpc),
        credit: Number(formData.credit),
        prev: Number(formData.prev),
      };
 
      const response = await axios.post(
        "http://localhost:5000/getapproval",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { result, justification,feature_explanation,feature_contributions, suggestions, probability } = response.data
      dispatch(setResultData({
        result,
        justification: justification,
        feature_explanation: feature_explanation,
        feature_contributions: feature_contributions,
        suggestions: suggestions,
        probability: (probability * 100).toFixed(2),
      }))
      setShowResults(true);
    } catch (err) {
      console.error("Submission error:", err);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      
    
      {!showResults?(
        
        <div className="min-h-screen bg-night-bg text-night-text py-20 px-4 flex items-center justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-br from-[#1f1f27] via-[#2e2e38] to-[#1f1f27] shadow-2xl rounded-3xl p-10 ring-2 ring-night-accent/20">
            <h1 className="text-5xl font-serif text-night-heading mb-2 text-center font-bold">
              Check Loan Approval
            </h1>
            <p className="text-night-muted mb-10 text-center font-mono text-xl">
              Explore customer eligibility with AI insights
            </p>
  
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
              onSubmit={handleSubmit}
            >
              <Input label="Name" name="name" placeholder="e.g., Jane Doe" value={formData.name} onChange={handleChange} error={errors.name} />
              <Input label="Email" name="email" placeholder="abcd@gmail.com" value={formData.email} onChange={handleChange} error={errors.name} type="email" />
              <Input label="Age" name="age" type="number" min={18} max={100} placeholder="e.g., 32" value={formData.age} onChange={handleChange} error={errors.age} />
              <RadioGroup label="Gender" name="gender" options={[["0", "Male"], ["1", "Female"]]} value={formData.gender} onChange={handleChange} error={errors.gender} />
              <Select label="Education" name="edu" options={[["0", "Associate"], ["1", "Bachelor"], ["2", "Doctorate"], ["3", "High School"], ["4", "Master"]]} value={formData.edu} onChange={handleChange} error={errors.edu} />
              <Input label="Monthly Income (Rs)" name="inc" type="number" min={0} placeholder="e.g., 5000" value={formData.inc} onChange={handleChange} error={errors.inc} />
              <Input label="Experience (Years)" name="emp" type="number" min={0} max={50} placeholder="e.g., 5" value={formData.emp} onChange={handleChange} error={errors.emp} />
              <Select label="Home Ownership" name="pho" options={[["0", "OWN"], ["1", "RENT"]]} value={formData.pho} onChange={handleChange} error={errors.pho} />
              <Input label="Loan Amount (Rs)" name="amt" type="number" min={500} max={40000} placeholder="e.g., 15000" value={formData.amt} onChange={handleChange} error={errors.amt} />
              <Select label="Loan Intent" name="intent" options={[["0", "DEBT CONSOLIDATION"], ["1", "EDUCATION"], ["2", "HOME IMPROVEMENT"], ["3", "MEDICAL"], ["4", "PERSONAL"], ["5", "VENTURE"]]} value={formData.intent} onChange={handleChange} error={errors.intent} />
              <Input label="Interest Rate (%)" name="rate" type="number" step="0.1" min={5} max={30} placeholder="e.g., 11.5" value={formData.rate} onChange={handleChange} error={errors.rate} />
              <Input label="% of Income" name="percinc" type="number" step="0.1" min={0} max={100} placeholder="e.g., 28.3" value={formData.percinc} onChange={handleChange} error={errors.percinc} />
              <Input label="Credit History (Years)" name="cpc" type="number" min={0} max={40} placeholder="e.g., 6" value={formData.cpc} onChange={handleChange} error={errors.cpc} />
              <Input label="Credit Score" name="credit" type="number" min={300} max={850} placeholder="e.g., 720" value={formData.credit} onChange={handleChange} error={errors.credit} />
              <RadioGroup label="Previous Default?" name="prev" options={[["1", "Yes"], ["0", "No"]]} value={formData.prev} onChange={handleChange} error={errors.prev} />
            <div className="mt-12 text-center">
              <button
                type="submit" disabled={loading}
                className="bg-button-gradient hover:bg-hover-button-gradient text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg tracking-wide"
              >
                {loading ? "Checking..." : "Check Approval"}
              </button>
            </div>
            </form>
  
          </div>
        </div>
        
      ):(<Results />)}
      </>
  );
}

// COMPONENTS

function Input({ label, name, value, onChange, error, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        className={`w-full px-4 py-2 rounded-lg bg-night-surface text-night-text placeholder:text-night-muted focus:outline-none focus:ring-2 focus:ring-night-accent transition ${error ? "ring-2 ring-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, value, onChange, error }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 rounded-lg bg-night-surface text-night-text focus:outline-none focus:ring-2 focus:ring-night-accent transition ${error ? "ring-2 ring-red-500" : ""}`}
      >
        <option value="">Select</option>
        {options.map(([val, text]) => (
          <option key={val} value={val}>
            {text}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
}

function RadioGroup({ label, name, options, value, onChange, error }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <div className="flex gap-6 items-center mt-1">
        {options.map(([val, text]) => (
          <label key={val} className="inline-flex items-center gap-2 text-night-muted font-medium">
            <input
              type="radio"
              name={name}
              value={val}
              checked={value === val}
              onChange={onChange}
              className="accent-night-accent scale-110"
            />
            {text}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>}
    </div>
  );
}
