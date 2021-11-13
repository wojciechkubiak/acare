import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 20px;
  cursor: pointer;
  transition: 500ms all;
  background-color: transparent;
  box-shadow: none;
  border: 4px solid #ebb8c6;
  border-radius: 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 22px;
  width: 200px;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    border: 4px solid #d37992;
  }
`;

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
