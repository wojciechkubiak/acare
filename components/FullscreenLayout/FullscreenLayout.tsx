import React, { ReactNode } from "react";

import { Layout } from "./FullscreenLayoutStyled";

type IFullscreenLayout = {
  children: ReactNode;
};

const FullscreenLayout: React.FC<IFullscreenLayout> = ({
  children,
}: IFullscreenLayout) => <Layout>{children}</Layout>;

export default FullscreenLayout;
