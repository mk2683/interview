import React, { useState, useRef, useEffect } from "react";
import "./Stepper.css";

export default function Stepper({ data }) {
  const [step, setStep] = useState(0);
  const [margin, setMargin] = useState({
    marginLeft: 0,
    marginright: 0,
  });

  const ActiveComponent = data[step]?.component;

  const stepRef = useRef([]);

  useEffect(() => {
    setMargin({
      marginLeft: stepRef.current[0].offsetWidth / 2,
      marginRight: stepRef.current[data.length - 1].offsetWidth / 2,
    });
  }, [data.length]);

  const progressWidth = (100 / (data.length - 1)) * step;

  const handleOnPrev = () => {
    if (step !== 0) {
      setStep(step - 1);
    }
  };

  const handleOnNext = () => {
    if (step !== data.length - 1) {
      setStep(step + 1);
    } else {
      alert("You have reached the end of the stepper!");
    }
  };

  return (
    <div className="step-container">
      <div className="step-wrapper">
        {data.map((item, index) => {
          return (
            <div
              className="step-header"
              key="index"
              ref={(el) => (stepRef.current[index] = el)}
            >
              <div
                className={`step-number ${index == step ? "active" : ""} ${
                  index < step ? "completed" : ""
                }`}
                onClick={() => setStep(index)}
              >
                {index < step ? <span>&#10003;</span> : index + 1}
              </div>
              <div className="step-name">{item.name}</div>
            </div>
          );
        })}
      </div>
      <div
        className="step-line"
        style={{
          width: `calc(${progressWidth}% - ${
            margin.marginLeft + margin.marginRight
          }px)`,
          marginLeft: margin.marginLeft,
          marginRight: margin.marginRight,
        }}
      ></div>
      <div className="step-content">
        <ActiveComponent />
      </div>
      <div className="step-footer">
        <button
          className="step-btn"
          onClick={handleOnPrev}
          disabled={step == 0 ? true : false}
        >
          Prev
        </button>
        <button className="step-btn" onClick={handleOnNext}>
          {step === data.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}
