import React from "react";

const LoadingContext = React.createContext({
  isLoading: true,
  setIsLoading: (data: boolean): void => {},
  isContentVisible: false,
  setIsContentVisible: (data: boolean): void => {},
});

export default LoadingContext;
