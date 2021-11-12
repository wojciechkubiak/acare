import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

const InputLabel = styled.label`
  margin-top: 8px;
  padding-left: 4px;
  margin-left: 32px;
  padding-bottom: 8px;
  padding-right: 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  letter-spacing: 1px;
  position: absolute;
  z-index: 100;
  background-color: white;
  border-radius: 24px;
`;

const InputField = styled.input`
  margin-top: 13px;
  padding: 16px 10px 16px 10px;
  border-radius: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(80%);
  border: 2px solid #e1e1e1;
  box-shadow: none;
  position: relative;
  text-align: center;
  color: rgba(0, 0, 0, 0.67);
  font-size: 20px;
  transition: 1000ms;

  &:focus {
    outline: none;
    border: 2px solid #9cadce;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:active {
    outline: none;
    border: 2px solid #9cadce;
    background-color: #d7d7d7;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 600000s 0s, color 600000s 0s;
    font-size: 20px !important;
  }
`;

interface IInput {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
  isRequired: boolean;
}

const Input = (props: IInput) => (
  <InputContainer>
    <InputLabel>{props.label} :</InputLabel>
    <InputField
      type={props.type}
      value={props.value}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        props.onChange(e.currentTarget.value)
      }
      placeholder={props.placeholder}
      required={props.isRequired}
    />
  </InputContainer>
);

export default Input;
