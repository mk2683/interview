import React from "react";
import Stepper from "../components/Stepper/Stepper";

function Customer() {
  return (
    <div>
      <h1>Customer</h1>
    </div>
  );
}

function Shipping() {
  return (
    <div>
      <h1>Shipping</h1>
    </div>
  );
}
function Payment() {
  return (
    <div>
      <h1>Payment</h1>
    </div>
  );
}
function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
    </div>
  );
}

const data = [
  {
    name: "Customer Info",
    component: () => <Customer />,
  },
  {
    name: "Shipping Info",
    component: () => <Shipping />,
  },
  {
    name: "Payment Info",
    component: () => <Payment />,
  },
  {
    name: "Checkout Info",
    component: () => <Checkout />,
  },
];

export default function StepperApp() {
  return <Stepper data={data} />;
}
