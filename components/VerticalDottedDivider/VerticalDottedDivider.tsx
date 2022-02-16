import React from "react";

import { Divider } from "./VerticalDottedDividerStyled";

type IVerticalDottedDivider = {
  height?: number;
};

const VerticalDottedDivider = ({ height }: IVerticalDottedDivider) => (
  <Divider height={height} />
);

export default VerticalDottedDivider;
