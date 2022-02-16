import React from "react";

import { TextBtn } from "./TextButtonStyled";

interface ITextButton {
  onClick: () => void;
  text: string;
}

const TextButton = (props: ITextButton) => (
  <TextBtn onClick={props.onClick}>{props.text}</TextBtn>
);

export default TextButton;
