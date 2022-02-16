import React, { useState } from "react";
import { Btn, Add } from "./AddButtonStyled";

interface IAddButton {
  isDisabled: boolean;
  onClick?: () => void;
}

const AddButton = ({ isDisabled, onClick }: IAddButton) => {
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

export default AddButton;
