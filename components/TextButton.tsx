import React from "react";
import styled from "styled-components";

const TextBtn = styled.p`
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
  font-family: Ubuntu, sans-serif;
  transition: 500ms;

  &:hover {
    color: #89a2d2;
  }
`;

interface ITextButton {
  onClick: () => void;
  text: string;
}

const TextButton = (props: ITextButton) => (
  <TextBtn onClick={props.onClick}>{props.text}</TextBtn>
);

export default TextButton;
