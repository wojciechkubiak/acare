import styled from "styled-components";
import { Form } from "react-bootstrap";
import { MdLibraryAdd } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";

type AnimalContainerStyle = {
  isEmpty: boolean;
};

export const Container = styled.div`
  min-width: 1040px;
  width: 70%;
  min-height: 200px;
  background-color: white;
  overflow: hidden;
  box-shadow: rgba(50, 50, 93, 0.25) 0 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  margin-bottom: 24px;
`;

export const AnimalsContainer = styled.div<AnimalContainerStyle>`
  width: 100%;
  min-height: 200px;
  border: 3px dotted #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 24px;
  transition: 500ms all;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: ${(props) => (props.isEmpty ? "pointer" : "default")};

  & :hover {
    transition: 500ms all;
  }
`;

export const AnimalContainers = styled.div`
  width: 100%;
  min-height: 200px;
  border: 3px dotted #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 24px;
  transition: 500ms all;

  & :hover {
    transition: 500ms all;
  }
`;

export const Info = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 16px;
`;

export const FormHeader = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ControlHeader = styled.h3`
  margin-top: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 28px;
  text-align: center;
`;

export const ID = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 24px;
  text-align: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: end;
  padding: 0;
`;

export const Control = styled(Form.Control)`
  margin-top: 32px;
  margin-bottom: 12px;
  width: 100%;
  border: 3px solid #7a7a7a;
  padding: 16px 10px 16px 10px;
  border-radius: 16px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.8);
  font-family: "Roboto", sans-serif;
  text-align: center;

  &:focus {
    border: 3px solid #515151;
    outline: none;
    box-shadow: none;
  }
  &:active {
    border: 3px solid #515151;
    outline: none;
    box-shadow: none;
  }
`;

export const Label = styled(Form.Label)`
  margin-top: 8px;
  padding-left: 4px;
  margin-left: 4px;
  padding-bottom: 8px;
  padding-right: 8px;
  font-family: Ubuntu, sans-serif;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 500;
  letter-spacing: 1px;
  position: absolute;
  z-index: 100;
  background-color: white;
  border-radius: 24px;
`;

export const Option = styled.option`
  color: #515151;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  padding: 20px 10px 20px 10px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 24px;
  cursor: pointer;
`;

export const AddIcon = styled(MdLibraryAdd)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

export const TransferIcon = styled(BiTransferAlt)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;

export const RemoveIcon = styled(FaTrash)`
  transition: 500ms all;
  --webkit-filter: invert(25%);
  filter: invert(25%);

  &:hover {
    --webkit-filter: invert(15%);
    filter: invert(15%);
  }
`;
