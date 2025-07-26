import type { Variants, Transition } from "framer-motion";

export const sharedTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
};

export function createSlideIn(
  axis: "x" | "y",
  distance: number,
  sign: 1 | -1 = 1
): Variants {
  // Base states without transition
  const initialState = {
    opacity: 0,
    [axis]: distance * sign,
  };

  const animateState = {
    opacity: 1,
    [axis]: 0,
  };

  const exitState = {
    opacity: 0,
    [axis]: distance * sign,
  };

  return {
    initial: initialState,
    animate: { ...animateState, transition: sharedTransition },
    exit: { ...exitState, transition: sharedTransition },
  };
}



