import React, { useState } from "react";
import styled from "styled-components";
import { BsPlusSquareDotted } from "react-icons/bs";

interface StyledProps {
  isOver: boolean;
}

const Btn = styled.button`
  cursor: pointer;
  transition: 500ms all;
  background-color: transparent;
  box-shadow: none;
  border: none;
`;

const Add = styled(BsPlusSquareDotted)<StyledProps>`
  transition: 500ms all;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;

interface ISubmitButton {
  isDisabled: boolean;
  onClick?: () => void;
}

const SubmitButton = ({ isDisabled, onClick }: ISubmitButton) => {
  const [isOver, setIsOver] = useState<boolean>(false);

  return (
    <Btn
      type="button"
      disabled={isDisabled}
      onMouseOver={() => setIsOver(false)}
      onMouseOut={() => setIsOver(true)}
      onClick={onClick}
    >
      <Add size={32} isOver={isOver} />
    </Btn>
  );
};

export default SubmitButton;
