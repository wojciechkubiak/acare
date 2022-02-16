import React from "react";
import styled from "styled-components";

import { Text } from "./ErrorTextStyled";

interface IErrorText {
  text?: string;
}

const ErrorText = (props: IErrorText) => <Text>{props.text}</Text>;

export default ErrorText;
