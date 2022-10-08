import { FormEvent, useState } from "react";
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";

import "./App.css";
import { useMultiform } from "./useMultiform";
import { UserForm } from "./userForm";

const INITIAL_DATA = {
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

  const { step, currentstepIndex, isLastPage, steps, isFirstStep, back, next } =
    useMultiform([<UserForm />, <AddressForm />, <AccountForm />]);

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
