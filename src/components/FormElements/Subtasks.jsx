import { useState } from "react";
import { PropTypes } from "prop-types";
import { v4 as uuid } from "uuid";
import { Container, Label, InputDiv, Input, AddBtn,SubtaskList, SubtaskListItem, RemoveSubtaskBtn } from "./styles/SubtasksTags.styled";

const Subtasks = ({ subtasks, handleSubtaskChange }) => {
  const [subtaskItem, setSubtaskItem] = useState("");

  const handleAddSubtask = (e) => {
    e.preventDefault();
    let subtaskArray = subtaskItem
      ? [...subtasks, { id: uuid(), subtask: subtaskItem, completed: false }]
      : "";
    handleSubtaskChange(subtaskArray);
    setSubtaskItem("");
  };

  const removeSubtask = (subtaskId) => {
    const updatedSubtasks = subtasks.filter(
      (subtask) => subtask.id !== subtaskId
    );
    handleSubtaskChange(updatedSubtasks);
  };

  return (
    <Container>
      <Label htmlFor="subtasks">Add Checklist for subtasks</Label>
      <InputDiv>
        <Input
          type="text"
          id="subtasks"
          name="subtasks"
          placeholder="Add Subtask..."
          value={subtaskItem}
          onChange={(e) => {
            setSubtaskItem(e.target.value);
          }}
        />
        <AddBtn onClick={handleAddSubtask}>+</AddBtn>
      </InputDiv>
      <SubtaskList>
        {subtasks.map((subtask) => {
          return (
            <SubtaskListItem key={subtask.id}>
              {subtask.subtask}
              <RemoveSubtaskBtn onClick={() => removeSubtask(subtask.id)}>
                <i className="fa-solid fa-trash"></i>
              </RemoveSubtaskBtn>
            </SubtaskListItem>
          );
        })}
      </SubtaskList>
    </Container>
  );
};

Subtasks.propTypes = {
  subtasks: PropTypes.array,
  handleSubtaskChange: PropTypes.func,
  handleRemoveSubtask: PropTypes.func,
};

export default Subtasks;
