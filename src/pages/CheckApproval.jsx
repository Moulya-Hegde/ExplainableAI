import React from 'react';

export default function CheckApprovalForm() {
  return (
    <div className="min-h-screen bg-night-bg text-night-text py-20 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-gradient-to-br from-[#1f1f27] via-[#2e2e38] to-[#1f1f27] shadow-2xl rounded-3xl p-10 ring-2 ring-night-accent/20">
        <h1 className="text-5xl font-serif text-night-heading mb-2 text-center font-bold">
          Check Loan Approval
        </h1>
        <p className="text-night-muted mb-10 text-center font-mono text-xl">
          Explore customer eligibility with AI insights
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Age */}
          <Input label="Age" type="number" placeholder="e.g., 32" min={18} max={100} />

          {/* Gender */}
          <RadioGroup label="Gender" name="gender" options={[['0', 'Male'], ['1', 'Female']]} />

          {/* Education */}
          <Select
            label="Education"
            options={[
              ['0', 'High School'],
              ['1', 'Graduate'],
              ['2', 'Postgraduate'],
            ]}
          />

          {/* Income */}
          <Input label="Monthly Income ($)" type="number" placeholder="e.g., 5000" min={0} />

          {/* Employment Experience */}
          <Input label="Experience (Years)" type="number" placeholder="e.g., 5" min={0} max={50} />

          {/* Home Ownership */}
          <Select
            label="Home Ownership"
            options={[
              ['0', 'OWN'],
              ['1', 'MORTGAGE'],
              ['2', 'RENT'],
            ]}
          />

          {/* Loan Amount */}
          <Input label="Loan Amount ($)" type="number" placeholder="e.g., 15000" min={500} max={40000} />

          {/* Loan Intent */}
          <Select
            label="Loan Intent"
            options={[
              ['0', 'EDUCATION'],
              ['1', 'MEDICAL'],
              ['2', 'VENTURE'],
              ['3', 'PERSONAL'],
              ['4', 'DEBT CONSOLIDATION'],
              ['5', 'HOME IMPROVEMENT'],
            ]}
          />

          {/* Interest Rate */}
          <Input label="Interest Rate (%)" type="number" placeholder="e.g., 11.5" min={5} max={30} step="0.1" />

          {/* % of Income */}
          <Input label="% of Income" type="number" placeholder="e.g., 28.3" min={0} max={100} step="0.1" />

          {/* Credit History Length */}
          <Input label="Credit History (Years)" type="number" placeholder="e.g., 6" min={0} max={40} />

          {/* Credit Score */}
          <Input label="Credit Score" type="number" placeholder="e.g., 720" min={300} max={850} />

          {/* Previous Loan Default */}
          <RadioGroup label="Previous Default?" name="prev" options={[['1', 'Yes'], ['0', 'No']]} />
        </form>

        <div className="mt-12 text-center">
          <button className="bg-button-gradient hover:bg-hover-button-gradient text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 text-lg tracking-wide">
            Check Approval
          </button>
        </div>
      </div>
    </div>
  );
}

// Components
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-night-surface text-night-text placeholder:text-night-muted focus:outline-none focus:ring-2 focus:ring-night-accent transition"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <select className="w-full px-4 py-2 rounded-lg bg-night-surface text-night-text focus:outline-none focus:ring-2 focus:ring-night-accent transition">
        <option value="">Select</option>
        {options.map(([val, text]) => (
          <option key={val} value={val}>
            {text}
          </option>
        ))}
      </select>
    </div>
  );
}

function RadioGroup({ label, name, options }) {
  return (
    <div>
      <label className="block mb-1 text-night-muted font-semibold">{label}</label>
      <div className="flex gap-6 items-center mt-1">
        {options.map(([val, text]) => (
          <label key={val} className="inline-flex items-center gap-2 text-night-muted font-medium">
            <input type="radio" name={name} value={val} className="accent-night-accent scale-110" />
            {text}
          </label>
        ))}
      </div>
    </div>
  );
}
