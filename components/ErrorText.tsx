import React from "react";
import styled from "styled-components";

const Text = styled.p`
  min-height: 32px;
  color: #de6f6f;
  margin: 0 !important;
  text-align: center;
  font-family: Ubuntu, sans-serif;
  font-size: 16px;
`;

interface IErrorText {
  text?: string;
}

const ErrorText = (props: IErrorText) => <Text>{props.text}</Text>;

export default ErrorText;
