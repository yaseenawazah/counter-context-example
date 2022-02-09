import { useCounterContext } from "../context";

export const CounterView = () => {
  const { counter } = useCounterContext();

  return <div>{counter}</div>;
};
