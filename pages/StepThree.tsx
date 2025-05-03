import Image from "next/image";

interface StepThreeProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  addones: string[];
  setAddOnes: React.Dispatch<React.SetStateAction<string[]>>;
  time: string;
}

function StepThree({
  step,
  setStep,
  addones,
  setAddOnes,
  time,
}: StepThreeProps) {
  function ClickFunction() {
    setStep(4);
  }

  function PreviousFunction() {
    setStep(2);
  }

  // 🔁 Handle checkbox toggle
  function handleCheckboxChange(value: string) {
    if (addones?.includes(value)) {
      setAddOnes((prev) => prev.filter((item) => item !== value));
    } else {
      setAddOnes((prev) => [...prev, value]);
    }
  }

  return (
    <div className="form-2">
      <h1>Pick Add-ons</h1>
      <p>Add-ons helps enhance your gaming experience.</p>
      <div className="add-ons">
        <label
          className={addones?.includes("online") ? "check active" : "check"}
          htmlFor="online"
        >
          <div>
            <div className="checkbox">
              {addones?.includes("online") ? (
                <Image
                  src="/images/icon-checkmark.svg"
                  width={10}
                  height={10}
                  alt="Check Image"
                />
              ) : (
                ""
              )}
            </div>
            <div className="text">
              <p>Online Services</p>
              <p>Access To Multiplay games</p>
            </div>
          </div>
          <div>{time === "monthly" ? <p>+$1/mo</p> : <p>+$10/yr</p>}</div>
        </label>
        <input
          type="checkbox"
          checked={addones?.includes("online")}
          onChange={() => handleCheckboxChange("online")}
          id="online"
        />

        <label
          className={addones?.includes("storage") ? "check active" : "check"}
          htmlFor="storage"
        >
          <div>
            <div className="checkbox">
              {addones?.includes("storage") ? (
                <Image
                  src="/images/icon-checkmark.svg"
                  width={10}
                  height={10}
                  alt="Check Image"
                />
              ) : (
                ""
              )}
            </div>
            <div className="text">
              <p>Larger Storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
          </div>
          <div>{time === "monthly" ? <p>+$2/mo</p> : <p>+$20/yr</p>}</div>
        </label>
        <input
          type="checkbox"
          checked={addones?.includes("storage")}
          onChange={() => handleCheckboxChange("storage")}
          id="storage"
        />

        <label
          className={addones?.includes("profile") ? "check active" : "check"}
          htmlFor="profile"
        >
          <div>
            <div className="checkbox">
              {addones?.includes("profile") ? (
                <Image
                  src="/images/icon-checkmark.svg"
                  width={10}
                  height={10}
                  alt="Check Image"
                />
              ) : (
                ""
              )}
            </div>
            <div className="text">
              <p>Customizable Profile</p>
              <p>Custom Theme On Your Proflie</p>
            </div>
          </div>
          <div>{time === "monthly" ? <p>+$2/mo</p> : <p>+$20/yr</p>}</div>
        </label>
        <input
          type="checkbox"
          checked={addones?.includes("profile")}
          onChange={() => handleCheckboxChange("profile")}
          id="profile"
        />
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
    </div>
  );
}

export default StepThree;
