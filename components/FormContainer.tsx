import React, { ReactNode } from "react";
import styled from "styled-components";

const FormContainerBody = styled.div`
  min-width: 500px;
  width: 25%;
  padding: 0 20px 40px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 18px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: 1000ms all;
`;

type Props = {
  children: ReactNode;
};

const FormContainer: React.FC = (props: Props) => (
  <FormContainerBody>{props.children}</FormContainerBody>
);

export default FormContainer;
