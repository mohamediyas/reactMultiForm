import { ReactElement, useState } from "react";

export function useMultiform(steps: ReactElement[]) {
  const [currentstepIndex, setCurrentstepIndex] = useState(0);

  return {
    currentstepIndex,
    steps: steps[currentstepIndex],
  };
}
