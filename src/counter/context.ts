import { createContext, useContext } from "react";

interface CounterContextProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

export const CounterContext = createContext<CounterContextProps | null>(null);

export const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (context === null) {
    throw new Error("useCounterContext must be used within a CounterContext");
  }
  return context;
};
