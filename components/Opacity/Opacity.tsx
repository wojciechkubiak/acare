import React, { ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { OpacityContainer } from "./OpacityStyled";

interface Theme {
  opacity: number;
}

interface IOpacity {
  children: ReactNode;
}

const Opacity = ({ children }: IOpacity) => {
  const [theme, setTheme] = useState<Theme>({
    opacity: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setTheme({
        opacity: 1,
      });
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <OpacityContainer>{children}</OpacityContainer>
    </ThemeProvider>
  );
};

export default Opacity;
