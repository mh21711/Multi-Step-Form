import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

function Home() {
  const [step, setStep] = useState<number>(1);

  // Step One
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [number, setNumber] = useState<string>("");

  // Step Two
  const [plan, setPlan] = useState<string>("");
  const [time, setTime] = useState<string>("monthly");

  // Step Three
  const [addones, setAddOnes] = useState<string[]>([]);

  return (
    <div className="container">
      <div className="steps">
        <div className="step">
          <div className={step === 1 ? "num active" : "num"}>1</div>
          <div>
            <p>STEP 1</p>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="step">
          <div className={step === 2 ? "num active" : "num"}>2</div>
          <div>
            <p>STEP 2</p>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="step">
          <div className={step === 3 ? "num active" : "num"}>3</div>
          <div>
            <p>STEP 3</p>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="step">
          <div className={step === 4 || step === 5 ? "num active" : "num"}>4</div>
          <div>
            <p>STEP 4</p>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
      <div className="forms">
        {step === 1 && (
          <StepOne
            name={name}
            email={email}
            number={number}
            setName={setName}
            setNumber={setNumber}
            setEmail={setEmail}
            step={step}
            setStep={setStep}
          />
        )}

        {step === 2 && (
          <StepTwo
            step={step}
            setStep={setStep}
            plan={plan}
            setPlan={setPlan}
            time={time}
            setTime={setTime}
          />
        )}

        {step === 3 && (
          <StepThree
            step={step}
            setStep={setStep}
            addones={addones}
            setAddOnes={setAddOnes}
            time={time}
          />
        )}

        {step === 4 && (
          <StepFour
            step={step}
            setStep={setStep}
            plan={plan}
            time={time}
            addons={addones}
          />
        )}

        {step === 5 && (
          <StepFive />
        )}
      </div>
    </div>
  );
}

export default Home;
