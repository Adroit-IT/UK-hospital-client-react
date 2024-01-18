import React, { useState } from "react";

interface WizardStep {
  label: string;
  content: React.ReactNode;
}

interface WizardProps {
  steps: WizardStep[];
  nextButtonLabel?: string;
  backButtonLabel?: string;
  onFinish?: () => void;
}

const Wizard: React.FC<WizardProps> = ({
  steps,
  nextButtonLabel = "Next",
  backButtonLabel = "Back",
  onFinish,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="inline-block w-full">
      <ul className="grid grid-cols-3 mb-5 text-center">
        {steps.map((step, index) => (
          <li key={index}>
            <div
              className={`${
                activeStep === index ? "!bg-primary text-white" : ""
              } block rounded-full bg-[#f3f2ee] p-2.5 dark:bg-[#1b2e4b]`}
              onClick={() => setActiveStep(index)}
            >
              {index + 1} {step.label}
            </div>
          </li>
        ))}
      </ul>

      <div>{steps[activeStep].content}</div>

      <div className="flex justify-between">
        <button
          type="button"
          className={`btn btn-primary ${activeStep === 0 ? "hidden" : ""}`}
          onClick={handleBack}
        >
          {backButtonLabel}
        </button>
        <button
          type="button"
          className="btn btn-primary ltr:ml-auto rtl:mr-auto"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? "Finish" : nextButtonLabel}
        </button>
      </div>
    </div>
  );
};

export default Wizard;
