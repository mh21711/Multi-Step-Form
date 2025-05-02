import Image from "next/image";

function StepFive() {
  return (
    <div className="finishing">
      <Image
        src="/images/icon-thank-you.svg"
        width={50}
        height={50}
        alt="Thank Image"
      />
      <h1>Thank You!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have Fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
