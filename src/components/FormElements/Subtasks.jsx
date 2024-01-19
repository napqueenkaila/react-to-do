import { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #090003;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;
const InputDiv = styled.div`
display: flex;
align-items: center;
`;

const Input = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 20px;
  flex-grow: 1;
`;

const AddSubtaskBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  color: #fff;
  background-color: #0d99ff;
  font-size: 24px;
`;

const SubtaskList = styled.div`
  padding: 0;
  list-style-position: inside;
  counter-reset: list-number;
`;

const ListItem = styled.div`
  background: #fff;
  border-radius: 90px;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  counter-increment: list-number;
  &:before {
    content: counter(list-number) ".";
    margin: 10px;
  }
`;

const RemoveSubtaskBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #deecf6;
`;

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
        <AddSubtaskBtn onClick={handleAddSubtask}>+</AddSubtaskBtn>
      </InputDiv>
      <SubtaskList>
        {subtasks.map((subtask) => {
          return (
            <ListItem key={subtask.id}>
              {subtask.subtask}
              <RemoveSubtaskBtn onClick={() => removeSubtask(subtask.id)}>
                <i className="fa-solid fa-trash"></i>
              </RemoveSubtaskBtn>
            </ListItem>
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
