import { PropTypes } from "prop-types";
import styled from "styled-components";
import { formatDate, formatComplexity, formatPriority } from "../../utils/formatData";

const ContentContainer = styled.div``;

const ContentDiv = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px auto;
`;

const StyledIcon = styled.i`
  color: #090003;
`;

const StyledSpan = styled.span`
  color: #717171;
`;

const CardContent = ({toDo}) => {
    return (
        <ContentContainer>
            <ContentDiv>
                <StyledIcon className="fa-regular fa-calendar" />
                <StyledSpan>Due Date:</StyledSpan>
                {/* <span>{toDo.date}{toDo.time}</span> */}
                <span>{formatDate(toDo.date, toDo.time)}</span>
            </ContentDiv>
            <ContentDiv>
                <StyledIcon className="fa-solid fa-arrow-up" />
                <StyledSpan>Priority:</StyledSpan>
                <span>{formatPriority(toDo.priority)}</span>
            </ContentDiv>
            <ContentDiv>
                <StyledIcon className="fa-solid fa-arrows-up-down-left-right" />
                <StyledSpan>Complexity:</StyledSpan>
                <span>{formatComplexity(toDo.complexity)}</span>
            </ContentDiv>
        </ContentContainer>
    )
};

export default CardContent

CardContent.propTypes = {
    toDo: PropTypes.object,
};