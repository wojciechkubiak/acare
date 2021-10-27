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
  box-shadow: rgba(0, 0, 0, 0.15) 0 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.05) 0px 4px 6px,
    rgba(0, 0, 0, 0.07) 0px 12px 13px, rgba(0, 0, 0, 0.05) 0px -3px 5px;
  transition: 1000ms all;
`;

type Props = {
  children: ReactNode;
};

const FormContainer: React.FC = (props: Props) => (
  <FormContainerBody>{props.children}</FormContainerBody>
);

export default FormContainer;
