import styled from "styled-components";
import { PropTypes } from "prop-types";

const ProgressContainer = styled.div``;

const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
`;

const Header = styled.span`
  font-size: 20px;
`;

const CompletionPercentage = styled.span`
  font-size: 20px;
  color: var(--Primary, #0d99ff);
  font-weight: 500;
`;

const ProgressBarDiv = styled.div`
  width: 100%;
  height: 15px;
  background: #deecf6;
  border-radius: 60px;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => `${props.$completionPercentage}%`};
  background-color: #0d99ff;
  border-radius: 60px;
`;

const ProgressBar = ({ completionPercentage }) => {

  return (
    <ProgressContainer>
      <HeaderDiv>
        <Header>Task Complete</Header>
        <CompletionPercentage>{completionPercentage}%</CompletionPercentage>
      </HeaderDiv>
      <ProgressBarDiv>
        <Progress $completionPercentage={completionPercentage} />
      </ProgressBarDiv>
    </ProgressContainer>
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  completionPercentage: PropTypes.number,
};
