import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(250, 255, 250);
  background: linear-gradient(
    180deg,
    rgb(253, 255, 253) 0%,
    rgb(251, 255, 251) 34%,
    rgb(251, 255, 251) 100%
  );
`;

export const MenuContainer = styled.div`
  max-width: 1040px;
  background-color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;
