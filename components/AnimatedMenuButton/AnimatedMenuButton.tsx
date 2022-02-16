import React, { useState } from "react";
import { Button, Image, Header } from "./AnimatedMenuButtonStyled";
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
      isOver={isOver}
    >
      <Image src={imgSrc} alt="animated-btn" isOver={isOver} />
      <Header isOver={isOver}>{text}</Header>
    </Button>
  );
};

export default AnimatedMenuButton;
