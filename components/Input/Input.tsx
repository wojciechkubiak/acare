import React from "react";

import { InputContainer, InputLabel, InputField } from "./InputStyled";

interface IInput {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  onChange: (value: string, name: string) => void;
  isRequired: boolean;
  disabled: boolean;
}

const Input = (props: IInput) => (
  <InputContainer>
    <InputLabel>{props.label} :</InputLabel>
    <InputField
      type={props.type}
      value={props.value}
      name={props.name}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        props.onChange(e.currentTarget.value, e.currentTarget.name)
      }
      placeholder={props.placeholder}
      required={props.isRequired}
      disabled={props.disabled}
    />
  </InputContainer>
);

export default Input;
