import { useState } from "react";

interface StepOneProps {
  name: string;
  email: string;
  number: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setNumber: React.Dispatch<React.SetStateAction<string>>;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function StepOne({
  name,
  email,
  number,
  setName,
  setNumber,
  setEmail,
  step,
  setStep,
}: StepOneProps) {
  const [submit, setSubmit] = useState<boolean>(false);

  function isValidEmail(email: string) {
    return email.includes("@");
  }

  function isValidNumber(input: string) {
    return /^\d+$/.test(input); // checks if input has only digits
  }

  function ClickFunction() {
    setSubmit(true);

    if (
      name !== "" &&
      email !== "" &&
      isValidEmail(email) &&
      number !== "" &&
      isValidNumber(number)
    ) {
      setStep(2);
    }
  }

  return (
    <>
      <div className="form">
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number.</p>
        <div>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {submit && name === "" && (
              <p className="error-message">Please Enter Your Name</p>
            )}
          </div>

          <div className="email">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@gmail.com"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {submit && (
              <>
                {email === "" && (
                  <p className="error-message">Please Enter Your Email</p>
                )}
                {email !== "" && !isValidEmail(email) && (
                  <p className="error-message">Please Enter A Valid Email</p>
                )}
              </>
            )}
          </div>

          <div className="number">
            <label htmlFor="number">Phone Number</label>
            <input
              type="text"
              placeholder="e.g, +1 234 567 890"
              id="number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
            {submit && (
              <>
                {number === "" && (
                  <p className="error-message">Please Enter Your Phone Number</p>
                )}
                {number !== "" && !isValidNumber(number) && (
                  <p className="error-message">Phone Number Must Be Numeric</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {step > 1 && <button className="previous-step">Go Back</button>}
      <button className="next-step" onClick={ClickFunction}>
        Next Step
      </button>
    </>
  );
}

export default StepOne;
