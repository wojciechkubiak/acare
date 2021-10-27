import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 20px;
  cursor: pointer;
  transition: 500ms all;
  background-color: #d396a7;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 22px;
  color: white;

  &:hover {
    background-color: #d37992;
  }
`;

interface ISubmitButton {
  text: string;
  isDisabled: boolean;
}

const SubmitButton = (props: ISubmitButton) => (
  <Btn type="submit" disabled={props.isDisabled}>
    {props.text}
  </Btn>
);

export default SubmitButton;
