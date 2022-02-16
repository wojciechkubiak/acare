import React from "react";
import { Button, Header } from "./OptionPickerStyled";

interface IAppNameHeader {
  text?: string;
  isActive?: boolean;
  isLeft?: boolean;
  onClick?: () => void;
}

const OptionPicker = ({ text, isActive, onClick, isLeft }: IAppNameHeader) => (
  <Button isActive={isActive} isLeft={isLeft} onClick={onClick}>
    <Header isActive={isActive}>{text ?? "Acare"}</Header>
  </Button>
);

export default OptionPicker;
