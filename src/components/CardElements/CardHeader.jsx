import { useContext } from "react";
import { PropTypes } from "prop-types";
import { ToDoContext } from "../../context/ToDoContext";
import { getDateObj } from "../../utils/formatData";
import {
  HeaderDiv,
  TitleDiv,
  Title,
  IconDiv,
  HeaderIcons,
  StyledLink,
} from "./styles/CardHeader.styled";

const CardHeader = ({ toDo, hasButtons }) => {
  const { handleCompleteToDo } = useContext(ToDoContext);
  const dateObj = getDateObj(toDo.date, toDo.time);
  return (
    <HeaderDiv>
      <TitleDiv>
        <div
          style={{
            backgroundColor: `${dateObj.color}`,
            width: "15px",
            height: "15px",
            borderRadius: "50%",
          }}
        />
        <Title>{toDo.toDoName}</Title>
      </TitleDiv>
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
            onClick={() => handleCompleteToDo(toDo.id, toDo.completed)}
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
};
