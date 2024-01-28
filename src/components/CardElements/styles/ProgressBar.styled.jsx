import styled from "styled-components";

export const ProgressContainer = styled.div``;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Header = styled.span`
  font-size: 20px;
`;

export const CompletionPercentage = styled.span`
  font-size: 20px;
  color: var(--Primary, #0d99ff);
  font-weight: 500;
`;

export const ProgressBarDiv = styled.div`
  width: 100%;
  height: 15px;
  background: #deecf6;
  border-radius: 60px;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => `${props.$completionPercentage}%`};
  background-color: #0d99ff;
  border-radius: 60px;
`;
