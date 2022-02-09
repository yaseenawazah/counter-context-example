import { useCounterContext } from "../context";

export const IncrementButton = () => {
  const { increment } = useCounterContext();

  return <button onClick={increment}>+</button>;
};
