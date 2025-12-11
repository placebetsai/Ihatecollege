import { useState } from "react";
import Link from "next/link";

const SCENARIOS = [
  {
    id: "start",
    question: "Be honest: Why are you thinking about college?",
    options: [
      { label: "My parents will kill me if I don't", next: "parents" },
      { label: "I want to make money ASAP", next: "money" },
      { label: "I want the 'party/social' experience", next: "party" }
    ]
  },
  {
    id: "parents",
    question: "If you showed your parents a plan to make $60k/year without debt, would they listen?",
    options: [
      { label: "Yes, they just want me secure", result: "plan_b" },
      { label: "No, they are obsessed with status", result: "hard_truth" }
    ]
  },
  {
    id: "money",
    question: "Are you willing to learn technical or hands-on skills?",
    options: [
      { label: "I like computers/tech", result: "tech" },
      { label: "I like working with my hands", result: "trades" },
      { label: "I like talking to people/sales", result: "sales" }
    ]
  },
  {
    id: "party",
    question: "Do you have $120,000 cash to pay for a 4-year party?",
    options: [
      { label: "No, I'd need loans", result: "debt_trap" },
      { label: "Yes, money isn't an issue", result: "rich_kid" }
    ]
  }
];

const RESULTS = {
  plan_b: { title: "The 'Plan B' Pivot", text: "Your parents fear your failure. Show them a concrete roadmap: A Google Cert or Trade Apprenticeship with a specific salary trajectory. Data beats emotion.", link: "/alternatives", btn: "See Alternatives" },
  hard_truth: { title: "The Hard Truth", text: "You might have to go to community college for 2 years to save $40k, then transfer. Don't go into 6-figure debt just to make them smile.", link: "/debt-calculator", btn: "Calculate Cost" },
  tech: { title: "Tech Accelerator", text: "Skip the CS degree. Look at Cybersecurity (Sec+) or Cloud (AWS). You can be earning $70k in 12 months.", link: "/cheat-sheets", btn: "Get Cheat Sheets" },
  trades: { title: "The Six-Figure Blue Collar", text: "Elevator mechanics and specialized welders make more than most MBA grads. Zero debt. Paid apprenticeship.", link: "/trade-schools", btn: "Find Trade Schools" },
  sales: { title: "High Ticket Sales", text: "Real Estate or Tech Sales (SDR). Your income is based on hustle, not a degree. High risk, high reward.", link: "/alternatives", btn: "Sales Paths" },
  debt_trap: { title: "The Debt Trap", text: "Taking $100k in loans to 'have fun' is financial suicide. You will be paying $1,200/month for 20 years. Don't do it.", link: "/debt-calculator", btn: "See the Numbers" },
  rich_kid: { title: "Go Have Fun", text: "If you can pay cash, go enjoy it. Just make sure you actually learn something, or you'll be behind everyone else in 4 years.", link: "/rank-your-school", btn: "Rank Schools" }
};

export default function DecisionWizard() {
  const [step, setStep] = useState("start");
  const currentScenario = SCENARIOS.find(s => s.id === step);
  const result = RESULTS[step];

  const handleOption = (opt) => {
    if (opt.result) setStep(opt.result);
    else setStep(opt.next);
  };

  const reset = () => setStep("start");

  return (
    <div className="wizard-container">
      <div className="wizard-card">
        
        {!result ? (
          <div className="animate-fade">
            <h3 className="wizard-question">{currentScenario?.question}</h3>
            <div className="options-grid">
              {currentScenario?.options.map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => handleOption(opt)}
                  className="wizard-btn"
                >
                  {opt.label} 
                  <span className="arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-fade result-view">
            <div className="verdict-label">Verdict</div>
            <h3 className="result-title">{result.title}</h3>
            <p className="result-text">{result.text}</p>
            <div className="action-row">
              <Link href={result.link} className="action-btn primary">
                {result.btn}
              </Link>
              <button onClick={reset} className="action-btn secondary">
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .wizard-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 4px;
          background: linear-gradient(to right, #22d3ee, #3b82f6);
          border-radius: 16px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }
        .wizard-card {
          background: #0f172a;
          border-radius: 14px;
          padding: 2.5rem;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          color: white;
        }
        .wizard-question {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 2rem;
          line-height: 1.3;
          color: #f8fafc;
        }
        .options-grid {
          display: grid;
          gap: 1rem;
        }
        .wizard-btn {
          width: 100%;
          padding: 1.25rem;
          border-radius: 12px;
          background: #1e293b;
          border: 1px solid #334155;
          color: #e2e8f0;
          font-size: 1.1rem;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wizard-btn:hover {
          background: #334155;
          border-color: #22d3ee;
          transform: translateY(-2px);
          color: white;
        }
        .wizard-btn:hover .arrow {
          opacity: 1;
          transform: translateX(4px);
        }
        .arrow {
          color: #22d3ee;
          opacity: 0.5;
          transition: all 0.2s ease;
          font-weight: bold;
        }
        .verdict-label {
          color: #22d3ee;
          font-size: 0.875rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }
        .result-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: white;
        }
        .result-text {
          font-size: 1.2rem;
          color: #cbd5e1;
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        .action-row {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .action-btn {
          padding: 1rem 2rem;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .action-btn.primary {
          background: #22d3ee;
          color: #0f172a;
          border: none;
        }
        .action-btn.primary:hover {
          background: #67e8f9;
          transform: scale(1.05);
        }
        .action-btn.secondary {
          background: transparent;
          border: 2px solid #475569;
          color: #cbd5e1;
        }
        .action-btn.secondary:hover {
          background: #1e293b;
          border-color: #cbd5e1;
          color: white;
        }
        .animate-fade {
          animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}