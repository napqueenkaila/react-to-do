import { PropTypes } from "prop-types";
import styled from "styled-components";
import {
  getDateObj,
  formatComplexity,
  formatPriority,
} from "../../utils/formatData";
import ProgressBar from "./ProgressBar";
import ProgressRadial from "./ProgressRadial";

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

const DateSpan = styled.span`
  color: ${(props) => props.color};
`;

const Tag = styled.div`
  background: #fff6e8;
  padding: 6px 8px;
  border-radius: 60px;
  font-size: 12px;
  text-align: center;
`;

const CardContent = ({
  toDo,
  hasProgressBar,
  hasProgressRadial,
  completionPercentage,
}) => {
  const dateObj = getDateObj(toDo.date, toDo.time);

  return (
    <ContentContainer>
      <div>
        <ContentDiv>
          <StyledIcon className="fa-regular fa-calendar" />
          <StyledSpan>Due Date:</StyledSpan>
          <DateSpan color={dateObj.color}>{dateObj.date}</DateSpan>
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
        <ContentDiv>
          {toDo.tags.map((tag) => {
            return <Tag key={tag.id}>{tag.tag}</Tag>;
          })}
        </ContentDiv>
        {hasProgressBar ? (
          <ProgressBar completionPercentage={completionPercentage} />
        ) : null}
      </div>
      <div>
        {hasProgressRadial ? (
          <ProgressRadial
            completionPercentage={completionPercentage}
            color={dateObj.color}
          />
        ) : null}
      </div>
    </ContentContainer>
  );
};

export default CardContent;

CardContent.propTypes = {
  toDo: PropTypes.object,
  hasProgressBar: PropTypes.bool,
  hasProgressRadial: PropTypes.bool,
  completionPercentage: PropTypes.number,
};
