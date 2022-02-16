import React from "react";
import { Btn } from "./ButtonOutlinedStyled";

interface IButton {
  text: string;
  isDisabled?: boolean;
  onClick: () => void;
}

const ButtonOutlined = ({ text, isDisabled = false, onClick }: IButton) => (
  <Btn onClick={onClick} disabled={isDisabled}>
    {text}
  </Btn>
);

export default ButtonOutlined;
