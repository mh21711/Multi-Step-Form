import Image from "next/image";
import { useState } from "react";

interface StepTwoProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<string>>;
  setPlan: React.Dispatch<React.SetStateAction<string>>;
  plan: string;
  time: string;
}

function StepTwo({
  step,
  setStep,
  plan,
  setPlan,
  time,
  setTime,
}: StepTwoProps) {
  const [submit, setSubmit] = useState<boolean>(false);

  function ClickFunction() {
    setSubmit(true);

    if (plan !== "" && time !== "") {
      setStep(3);
    }
  }

  function PreviousFunction() {
    setStep(1);
  }

  return (
    <>
      <div className="form-1">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="plan">
          <label
            htmlFor="arcade"
            className={plan === "Arcade" ? "active" : "unactive"}
          >
            <Image
              src="/images/icon-arcade.svg"
              width={20}
              height={20}
              alt="Arcade Image"
            />
            <div>
              <p className="type">Arcade</p>
              {time === "monthly" ? (
                <p className="price">$9/mo</p>
              ) : (
                <>
                  <p className="price">$90/yr</p>
                  <p className="free">2 Months Free</p>
                </>
              )}
            </div>
          </label>
          <input
            type="radio"
            name="plan"
            id="arcade"
            onClick={() => setPlan("Arcade")}
          />
          <label
            htmlFor="advanced"
            className={plan === "Advanced" ? "active" : "unactive"}
          >
            <Image
              src="/images/icon-advanced.svg"
              width={20}
              height={20}
              alt="Arcade Image"
            />
            <div>
              <p className="type">Advanced</p>
              {time === "monthly" ? (
                <p className="price">$12/mo</p>
              ) : (
                <>
                  <p className="price">$120/yr</p>
                  <p className="free">2 Months Free</p>
                </>
              )}
            </div>
          </label>
          <input
            type="radio"
            name="plan"
            id="advanced"
            onClick={() => setPlan("Advanced")}
          />
          <label
            htmlFor="pro"
            className={plan === "Pro" ? "active" : "unactive"}
          >
            <Image
              src="/images/icon-pro.svg"
              width={20}
              height={20}
              alt="Arcade Image"
            />
            <div>
              <p className="type">Pro</p>
              {time === "monthly" ? (
                <p className="price">$15/mo</p>
              ) : (
                <>
                  <p className="price">$150/yr</p>
                  <p className="free">2 Months Free</p>
                </>
              )}
            </div>
          </label>
          <input
            type="radio"
            name="plan"
            id="pro"
            onClick={() => setPlan("Pro")}
          />
        </div>
        <div className="time">
          <p className={time === "monthly" ? "mon act" : "mon"}>Monthly</p>
          <div
            onClick={() =>
              time === "monthly" ? setTime("yearly") : setTime("monthly")
            }
          >
            <div className={time === "monthly" ? "mo" : "ye"}></div>
          </div>
          <p className={time === "yearly" ? "yer act" : "yer"}>Yearly</p>
        </div>
        {submit &&
          (plan === "" ? (
            <p
              className="error-message"
              style={{ textAlign: "center", margin: "20px" }}
            >
              Please Select A Plan.
            </p>
          ) : (
            ""
          ))}
      </div>
      <div>
        {step > 1 && (
          <button className="previous-step" onClick={PreviousFunction}>
            Go Back
          </button>
        )}
        <button className="next-step" onClick={ClickFunction}>
          Next Step
        </button>
      </div>
    </>
  );
}

export default StepTwo;
