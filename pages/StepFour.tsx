import { useEffect, useState } from "react";

interface StepFourProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  plan: string;
  time: string;
  addons: string[];
}

function StepFour({ step, setStep, time, plan, addons }: StepFourProps) {
  const [total, setTotal] = useState<number>(0);

  // Plan prices
  const planPrices: Record<string, { monthly: number; yearly: number }> = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  // Addon prices
  const addonPrices: Record<string, { monthly: number; yearly: number }> = {
    storage: { monthly: 2, yearly: 20 },
    online: { monthly: 1, yearly: 10 },
    profile: { monthly: 2, yearly: 20 },
  };

  useEffect(() => {
    const planCost = planPrices[plan]?.[time === "monthly" ? "monthly" : "yearly"] || 0;
    const addonsCost = addons.reduce((sum, addon) => {
      const addonCost = addonPrices[addon]?.[time === "monthly" ? "monthly" : "yearly"] || 0;
      return sum + addonCost;
    }, 0);

    setTotal(planCost + addonsCost);
  }, [plan, time, addons]);

  console.log(total)

  function ClickFunction() {
    setStep(5);
  }

  function PreviousFunction() {
    setStep(3);
  }

  return (
    <div className="form-3">
      <h1>Finishing Up</h1>
      <p>Double Check if everything looks ok before confirming.</p>
      <div>
        <div>
          <div>
            <div>
              <p className="bold">
                {plan} ({time.toUpperCase()})
              </p>
              <p onClick={() => setStep(2)}>Change</p>
            </div>
            <div>
              {time === "monthly" ? (
                plan === "Arcade" ? (
                  <p className="bold">$9/mo</p>
                ) : plan === "Advanced" ? (
                  <p className="bold">$12/mo</p>
                ) : plan === "Pro" ? (
                  <p className="bold">$15/mo</p>
                ) : null
              ) : plan === "Arcade" ? (
                <p className="bold">$90/yr</p>
              ) : plan === "Advanced" ? (
                <p className="bold">$120/yr</p>
              ) : plan === "Pro" ? (
                <p className="bold">$150/yr</p>
              ) : null}
            </div>
          </div>
          {time === "monthly" ? (
            <>
              {addons.includes("storage") && (
                <div>
                  <p>Larger Storage</p>
                  <p>+$2/mo</p>
                </div>
              )}
              {addons.includes("online") && (
                <div>
                  <p>Online Services</p>
                  <p>+$1/mo</p>
                </div>
              )}
              {addons.includes("profile") && (
                <div>
                  <p>Customizable Profile</p>
                  <p>+$2/mo</p>
                </div>
              )}
            </>
          ) : (
            <>
              {addons.includes("storage") && (
                <div>
                  <p>Larger Storage</p>
                  <p>+$20/yr</p>
                </div>
              )}
              {addons.includes("online") && (
                <div>
                  <p>Online Services</p>
                  <p>+$10/yr</p>
                </div>
              )}
              {addons.includes("profile") && (
                <div>
                  <p>Customizable Profile</p>
                  <p>+$20/yr</p>
                </div>
              )}
            </>
          )}
        </div>
        <div>
          <p>Total {time === "monthly" ? "(Per Month)" : "(Per Year)"}</p>
          <p>
            ${total}/{time === "monthly" ? "mo" : "yr"}
          </p>
        </div>
      </div>
      <div>
        {step > 1 && (
          <button className="previous-step" onClick={PreviousFunction}>
            Go Back
          </button>
        )}
        <button className="next-step special" onClick={ClickFunction}>
          Confirm
        </button>
      </div>
    </div>
  );
}

export default StepFour;
