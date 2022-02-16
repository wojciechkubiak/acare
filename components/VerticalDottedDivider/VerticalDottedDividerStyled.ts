import styled from "styled-components";

type StyledProps = {
  height?: number;
};

export const Divider = styled.div<StyledProps>`
  height: ${(props) => (props.height ? `${props.height}` : "100%")};
  width: 2px;
  border-right: 4px dotted #515151;
`;
