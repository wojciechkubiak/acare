import React, { useState } from "react";
import styled from "styled-components";

interface StyledProps {
  isOver: boolean;
  isActive?: boolean;
}

const Button = styled.div<StyledProps>`
  margin-bottom: 12px;
  margin-top: 12px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: 500ms all;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid ${(props) => (props.isActive ? "#515151" : "white")};
`;

const Image = styled.img<StyledProps>`
  transition: 500ms all;
  width: 36px;
  height: 36px;
  --webkit-filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
  filter: ${(props) => (props.isOver ? "invert(25%)" : "invert(15%)")};
`;

interface IVerticalMenuButton {
  text: string;
  imgSrc: string;
  onClick: () => void;
  isActive: boolean;
}

const VerticalMenuButton = ({
  text,
  imgSrc,
  onClick,
  isActive,
}: IVerticalMenuButton) => {
  const [isOver, setIsOver] = useState<boolean>(true);

  return (
    <Button
      onMouseOver={() => setIsOver(false)}
      onMouseOut={() => setIsOver(true)}
      onClick={onClick}
      isOver={isOver}
      isActive={isActive}
    >
      <Image src={imgSrc} alt="animated-btn" isOver={isOver} />
    </Button>
  );
};

export default VerticalMenuButton;
