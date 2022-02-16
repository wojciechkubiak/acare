import React, { useState } from "react";

import { Button, Image } from "./VerticalMenuButtonStyled";

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
