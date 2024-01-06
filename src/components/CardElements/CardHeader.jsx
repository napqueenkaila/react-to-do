import { Link } from "react-router-dom";
import { PropTypes } from "prop-types"
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const HeaderIcons = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CardHeader = ({toDo, hasButtons, handleCompleteTask}) => {
    return (
      <HeaderDiv>
        <Title>{toDo.toDoName}</Title>
        {hasButtons ? (
          <IconDiv>
            <StyledLink to={`/editToDo/${toDo.id}`}>
              <HeaderIcons className="fa-solid fa-pen-to-square" />
            </StyledLink>
            <HeaderIcons
              className="fa-solid fa-check"
              style={
                toDo.completed
                  ? { backgroundColor: "#0d99ff", color: "#fff" }
                  : { backgroundColor: "#DEECF6", color: "#25282B" }
              }
              onClick={() => handleCompleteTask(toDo.id, toDo.completed)}
            />
          </IconDiv>
        ) : null}
      </HeaderDiv>
    );
};

export default CardHeader;

CardHeader.propTypes = {
  toDo: PropTypes.object,
  hasButtons: PropTypes.bool,
  handleCompleteTask: PropTypes.func,
};