import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 20px;
  cursor: pointer;
  transition: 500ms all;
  background-color: transparent;
  width: 60%;
  box-shadow: none;
  border: 4px solid #ebb8c6;
  border-radius: 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 22px;
  color: white;
  color: rgba(0, 0, 0, 0.6);

  &:hover {
    border: 4px solid #d37992;
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
