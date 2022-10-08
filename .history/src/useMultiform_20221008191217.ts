import { ReactElement, useState } from "react";

export function useMultiform(steps: ReactElement[]) {
  const [currentstepIndex, setCurrentstepIndex] = useState(0);

  function next() {}

  function back() {}

  function goTo(index: Number) {
    setCurrentstepIndex(index);
  }

  return {
    currentstepIndex,
    steps: steps[currentstepIndex],

    goTo,
  };
}
