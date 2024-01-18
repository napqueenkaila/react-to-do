import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

const ListContainer = styled.div``;

const Title = styled.h3`
  font-size: 18px;
`;

const CompleteSubtaskBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

const RemoveSubtaskBtn = styled.button`
  border: none;
`;

const SubtaskList = ({ currentToDo, currentToDoId }) => {
  const { handleCompleteSubtask, handleDeleteSubtask } =
    useContext(ToDoContext);

  return (
    <ListContainer>
      <Title>Checklist for Subtasks</Title>
      <ol>
        {currentToDo.subtasks.map((subtask) => {
          return (
            <li key={subtask.id}>
              {subtask.subtask}
              <CompleteSubtaskBtn
                onClick={() =>
                  handleCompleteSubtask(subtask.id, currentToDo, currentToDoId)
                }
                completed={subtask.completed.toString()}
                style={
                  subtask.completed
                    ? { background: "#0d99ff" }
                    : { background: "#deecf6" }
                }
              >
                <i className="fa-solid fa-check"></i>
              </CompleteSubtaskBtn>
              <RemoveSubtaskBtn
                onClick={() =>
                  handleDeleteSubtask(subtask.id, currentToDo, currentToDoId)
                }
              >
                <i className="fa-solid fa-trash"></i>
              </RemoveSubtaskBtn>
            </li>
          );
        })}
      </ol>
    </ListContainer>
  );
};

export default SubtaskList;

SubtaskList.propTypes = {
  currentToDo: PropTypes.object,
  currentToDoId: PropTypes.string,
};
