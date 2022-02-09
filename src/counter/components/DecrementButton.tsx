import { useCounterContext } from "../context";

export const DecrementButton = () => {
  const { decrement } = useCounterContext();

  return <button onClick={decrement}>-</button>;
};
