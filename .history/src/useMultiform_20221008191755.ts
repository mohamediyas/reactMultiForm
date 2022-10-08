import { ReactElement, useState } from "react";

export function useMultiform(steps: ReactElement[]) {
  const [currentstepIndex, setCurrentstepIndex] = useState(0);

  function next() {
    setCurrentstepIndex((prev) => {
      if (prev >= steps.length - 1) return 1;

      return prev + 1;
    });
  }

  function back() {}

  function goTo(index: number) {
    setCurrentstepIndex(index);
  }

  return {
    currentstepIndex,
    steps: steps[currentstepIndex],

    goTo,
  };
}
