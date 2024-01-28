import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px auto;
`;

export const StyledIcon = styled.i`
  color: #090003;
`;

export const StyledSpan = styled.span`
  color: #717171;
`;

export const DateSpan = styled.span`
  color: ${(props) => props.color};
`;

export const Tag = styled.div`
  padding: 6px 8px;
  border-radius: 60px;
  font-size: 12px;
  text-align: center;
`;
