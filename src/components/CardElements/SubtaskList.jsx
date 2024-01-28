import { useContext } from "react";
import { PropTypes } from "prop-types";
import { ToDoContext } from "../../context/ToDoContext";
import {
  ListContainer,
  Title,
  StyledList,
  SubtaskItem,
  StyledDiv,
  ButtonDiv,
  CompleteSubtaskBtn,
  RemoveSubtaskBtn,
} from "./styles/SubtaskList.styled";

const SubtaskList = ({ currentToDo }) => {
  const { handleCompleteSubtask, handleDeleteSubtask } =
    useContext(ToDoContext);

  return (
    <ListContainer>
      <Title>Checklist for Subtasks</Title>
      <StyledList>
        {currentToDo.subtasks.map((subtask) => {
          return (
            <SubtaskItem key={subtask.id}>
              <StyledDiv>
                {subtask.subtask}
                <ButtonDiv>
                  <CompleteSubtaskBtn
                    onClick={() =>
                      handleCompleteSubtask(subtask.id, currentToDo)
                    }
                    $completed={subtask.completed.toString()}
                    style={
                      subtask.completed
                        ? { background: "#0d99ff" }
                        : { background: "#deecf6" }
                    }
                  >
                    <i className="fa-solid fa-check"></i>
                  </CompleteSubtaskBtn>
                  <RemoveSubtaskBtn
                    onClick={() => handleDeleteSubtask(subtask.id, currentToDo)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </RemoveSubtaskBtn>
                </ButtonDiv>
              </StyledDiv>
            </SubtaskItem>
          );
        })}
      </StyledList>
    </ListContainer>
  );
};

export default SubtaskList;

SubtaskList.propTypes = {
  currentToDo: PropTypes.object,
  currentToDoId: PropTypes.string,
};
