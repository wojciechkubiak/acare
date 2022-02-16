import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const InputLabel = styled.label`
  margin-top: 8px;
  margin-left: 32px;
  padding: 2px 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 12px;
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
  position: absolute;
  z-index: 100;
  background-color: rgb(155, 190, 156);
  border-radius: 24px;
`;

export const InputField = styled.input`
  margin-top: 13px;
  padding: 16px 10px 16px 10px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(80%);
  border: none;
  border-bottom: 2px solid #e1e1e1;
  box-shadow: none;
  position: relative;
  text-align: center;
  color: rgba(0, 0, 0, 0.67);
  font-size: 20px;
  transition: 1000ms;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:active {
    outline: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 600000s 0s, color 600000s 0s;
    font-size: 20px !important;
  }
`;
