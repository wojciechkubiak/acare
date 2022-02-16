import React, { ReactNode } from "react";

import { Button } from "./IconButtonStyled";

interface IIconButton {
  children: ReactNode;
  size: number;
  margin?: string;
  onClick: () => void;
}

const IconButton: React.FC<IIconButton> = ({
  children,
  onClick,
  margin,
  size,
}: IIconButton) => (
  <Button onClick={onClick} iconSize={size} margin={margin}>
    {children}
  </Button>
);

export default IconButton;
