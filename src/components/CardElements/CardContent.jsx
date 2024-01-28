import { PropTypes } from "prop-types";
import {
  getDateObj,
  formatComplexity,
  formatPriority,
} from "../../utils/formatData";
import ProgressBar from "./ProgressBar";
import ProgressRadial from "./ProgressRadial";
import {
  ContentContainer,
  ContentDiv,
  StyledIcon,
  StyledSpan,
  DateSpan,
  Tag,
} from "./styles/CardContent.styled";

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
            return <Tag key={tag.id} style={{backgroundColor: tag.color}}>{tag.tag}</Tag>;
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
