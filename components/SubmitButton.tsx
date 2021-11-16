import React, { useState } from "react";
import styled from "styled-components";
import { BsArrowRightSquareFill } from "react-icons/bs";

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

const Arrow = styled(BsArrowRightSquareFill)<StyledProps>`
  transition: 500ms all;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;

interface ISubmitButton {
  isDisabled: boolean;
  btnType?: "button" | "submit";
  onClick?: () => void;
}

const SubmitButton = ({
  isDisabled,
  onClick,
  btnType = "submit",
}: ISubmitButton) => {
  const [isOver, setIsOver] = useState<boolean>(false);

  return (
    <Btn
      type={btnType}
      disabled={isDisabled}
      onMouseOver={() => setIsOver(false)}
      onMouseOut={() => setIsOver(true)}
      onClick={onClick}
    >
      <Arrow size={64} isOver={isOver} />
    </Btn>
  );
};

export default SubmitButton;
