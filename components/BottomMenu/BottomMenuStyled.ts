import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  position: fixed;
  z-index: 1100;
  height: 100px;
  border-radius: 24px;
  min-width: 100px;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
`;
