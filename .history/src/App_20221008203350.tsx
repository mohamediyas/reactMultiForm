import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";

import "./App.css";
import { useMultiform } from "./useMultiform";
import { UserForm } from "./userForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

function App() {
  const [count, setCount] = useState(0);

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return {
        ...prev,
        fields,
      };
    });
  }

  const { step, currentstepIndex, isLastPage, steps, isFirstStep, back, next } =
    useMultiform([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: "0.5rem",
        fontFamily: "Aerial",
      }}
    >
      <form onSubmit={submit}>
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          {currentstepIndex + 1} / {steps.length}
        </div>

        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastPage ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
}

export default App;
