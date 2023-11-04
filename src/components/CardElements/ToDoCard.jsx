import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import useLocalState from "../../utils/LocalStorage";

const CardContainer = styled.div`
  border-radius: 18px;
  background: #fff;
  margin-bottom: 10px;
  font-family: Inter;
  padding: 20px 12px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditButton = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const StyledIcon = styled.i`
  color: #090003;
`;

const StyledSpan = styled.span`
  color: #717171
`;

const ToDoCard = ({toDo}) => {
  const [toDos, setToDos] = useLocalState("toDos", []);

  return (
    <>
      <CardContainer key={toDo.id}>
        <CardHeader>
          <h3>{toDo.toDoName}</h3>
          <Links to={`/editToDo/${toDo.id}`}>
            <EditButton className="fa-solid fa-pen-to-square"></EditButton>
          </Links>
        </CardHeader>
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
      </CardContainer>
    </>
  );
};

ToDoCard.propTypes = {
  toDo: PropTypes.object
};

export default ToDoCard;
