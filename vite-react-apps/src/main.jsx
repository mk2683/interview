import React from "react";
import ReactDOM from "react-dom/client";
import StepperApp from "./pages/StepperApp.jsx";
import UseReducer from "./components/ReactHooks/UseReducer.jsx";
import UseState from "./components/ReactHooks/UseState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      {/* <StepperApp /> */}
      {/* < UseState /> */}
      <UseReducer />
    </React.StrictMode>
  </>,
);
