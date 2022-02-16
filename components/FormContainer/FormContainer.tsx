import React, { ReactNode } from "react";
import { FormContainerBody } from "./FormContainerStyled";

type IFormContainer = {
  children: ReactNode;
};

const FormContainer: React.FC = ({ children }: IFormContainer) => (
  <FormContainerBody>{children}</FormContainerBody>
);

export default FormContainer;
