import React from "react";

const CounterContext = React.createContext({
  Count: 0,
  SetCount: () => {},
});

export const CounterContextProvider = CounterContext.Provider;
export default CounterContext;
