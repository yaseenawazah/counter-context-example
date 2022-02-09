import { CounterView, DecrementButton, IncrementButton } from "./components";
import { CounterProvider } from "./Provider";

export const Counter = () => {
  return (
    <CounterProvider>
      <DecrementButton />
      <CounterView />
      <IncrementButton />
    </CounterProvider>
  );
};
