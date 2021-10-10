import React from "react";

const LoadingContext = React.createContext({
  isLoading: false,
  setIsLoading: (data: boolean): void => {},
});

export default LoadingContext;
