import { PropTypes } from "prop-types";
import styled from "styled-components";
import { getDateObj, formatDate, formatComplexity, formatPriority } from "../../utils/formatData";

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

const DateSpan = styled.span`
    color: ${(props) => props.color}
`;

const Tag = styled.div`
    background: #FFF6E8;
    padding: 6px 8px;
    border-radius: 60px;
    font-size: 12px;
    text-align: center;
`;

const CardContent = ({ toDo }) => {
    const dateObj = getDateObj(toDo.date, toDo.time)
    const dueDate = formatDate(dateObj)

    return (
        <ContentContainer>
            <ContentDiv>
                <StyledIcon className="fa-regular fa-calendar" />
                <StyledSpan>Due Date:</StyledSpan>
                <DateSpan color={dueDate.color}>{dueDate.date}</DateSpan>
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
                    return (<Tag key={tag.id}>{ tag.tag}</Tag>)
                })}
            </ContentDiv>
        </ContentContainer>
    )
};

export default CardContent

CardContent.propTypes = {
    toDo: PropTypes.object,
};