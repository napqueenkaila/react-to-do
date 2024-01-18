import styled from "styled-components";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoContext";

const ListContainer = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const StyledList = styled.ol`
  // list-style-position: inside;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

const SubtaskItem = styled.li`
  padding: 20px 25px;
  background: #fff;
  border-radius: 90px;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonDiv = styled.div``;

const CompleteSubtaskBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
`;

const RemoveSubtaskBtn = styled(CompleteSubtaskBtn)`
  background-color: #deecf6;
`;

const SubtaskList = ({ currentToDo, currentToDoId }) => {
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
                      handleCompleteSubtask(
                        subtask.id,
                        currentToDo,
                        currentToDoId
                      )
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
                      handleDeleteSubtask(
                        subtask.id,
                        currentToDo,
                        currentToDoId
                      )
                    }
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
