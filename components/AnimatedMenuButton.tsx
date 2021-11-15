import React, { useState } from "react";
import styled from "styled-components";

interface StyledProps {
  isOver: boolean;
}

const Button = styled.div`
  width: 220px;
  height: 220px;
  margin: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  cursor: pointer;
`;

const Header = styled.h1<StyledProps>`
  transition: 500ms all;
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: ${(props) => (!props.isOver ? "#9CADCE" : "rgba(0, 0, 0, 0.67)")};
  & * {
    pointer-events: none;
  }
`;

const Image = styled.img`
  --webkit-filter: invert(25%);
  filter: invert(25%);
`;

interface IAnimatedMenuButton {
  text: string;
  imgSrc: string;
  onClick: () => void;
}

const AnimatedMenuButton = ({ text, imgSrc, onClick }: IAnimatedMenuButton) => {
  const [isOver, setIsOver] = useState<boolean>(true);

  return (
    <Button
      onMouseOver={() => setIsOver(false)}
      onMouseOut={() => setIsOver(true)}
      onClick={onClick}
    >
      <Image src={imgSrc} alt="animated-btn" />
      <Header isOver={isOver}>{text}</Header>
    </Button>
  );
};

export default AnimatedMenuButton;
