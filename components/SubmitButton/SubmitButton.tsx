import React, { useState } from "react";

import { Btn, Arrow } from "./SubmitButtonStyled";

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
      <Arrow size={52} isOver={isOver} color="white" />
    </Btn>
  );
};

export default SubmitButton;
