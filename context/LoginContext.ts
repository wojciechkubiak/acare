import React from "react";

export enum Step {
  LOADING,
  LOGIN,
}

interface IAuth {
  step: Step;
  setStep: (step: Step) => void;
}

const DEFAULT: IAuth = {
  step: Step.LOADING,
  setStep: () => {},
};

const LoginContext = React.createContext(DEFAULT);

export default LoginContext;
