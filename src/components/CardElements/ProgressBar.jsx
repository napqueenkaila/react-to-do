import { PropTypes } from "prop-types";
import {
  ProgressContainer,
  HeaderDiv,
  Header,
  CompletionPercentage,
  ProgressBarDiv,
  Progress,
} from "./styles/ProgressBar.styled";

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
