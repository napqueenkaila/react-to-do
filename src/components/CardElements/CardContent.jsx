import { PropTypes } from "prop-types";
import styled from "styled-components";

const ContentContainer = styled.div``;

const StyledIcon = styled.i`
  color: #090003;
`;

const StyledSpan = styled.span`
  color: #717171;
`;

const CardContent = ({ toDo }) => {
  return (
    <ContentContainer>
      <div>
        <StyledIcon className="fa-regular fa-calendar" />
        <StyledSpan>Due Date:</StyledSpan>
        <span>{toDo.date}</span>
      </div>
      <div>
        <StyledIcon className="fa-solid fa-arrow-up" />
        <StyledSpan>Priority:</StyledSpan>
        <span>{toDo.priority}</span>
      </div>
      <div>
        <StyledIcon className="fa-solid fa-arrows-up-down-left-right" />
        <StyledSpan>Complexity:</StyledSpan>
        <span>{toDo.complexity}</span>
      </div>
    </ContentContainer>
  );
};

CardContent.propTypes = {
  toDo: PropTypes.object,
};

export default CardContent;
