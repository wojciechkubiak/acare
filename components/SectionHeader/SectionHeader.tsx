import React from "react";

import { Header } from "./SectionHeaderStyled";

interface ISectionHeader {
  text: string;
}

const SectionHeader = ({ text }: ISectionHeader) => <Header>{text}</Header>;

export default SectionHeader;
