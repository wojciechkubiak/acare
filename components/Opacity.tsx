import React, { ReactNode, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const OpacityContainer = styled.div`
  opacity: ${(props) => props.theme.opacity};
  transition: 1000ms;
`;

interface Theme {
  opacity: number;
}

type Props = {
  children: ReactNode;
};

const Opacity = (props: Props) => {
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
      <OpacityContainer>{props.children}</OpacityContainer>
    </ThemeProvider>
  );
};

export default Opacity;
