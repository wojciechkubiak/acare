import React from "react";
import styled from "styled-components";

interface IProps {
  text: string;
}

const Header = styled.h1`
  font-family: "Merienda", cursive;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.67);
  font-size: 24px;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
`;

const SectionHeader = ({ text }: IProps) => <Header>{text}</Header>;

export default SectionHeader;
