import React, { ReactNode } from "react";
import styled from "styled-components";

const FormContainerBody = styled.div`
  min-width: 500px;
  width: 25%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  border: 4px solid #515151;
  transform: translate(-50%, -50%);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 1000ms all;
`;

type Props = {
  children: ReactNode;
};

const FormContainer: React.FC = ({ children }: Props) => (
  <FormContainerBody>{children}</FormContainerBody>
);

export default FormContainer;
