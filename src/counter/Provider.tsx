import { ReactNode, useState } from "react";

import { CounterContext } from "./context";

interface Props {
  children: ReactNode;
}

export const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <CounterContext.Provider
      value={{
        counter,
        increment,
        decrement,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
