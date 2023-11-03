import { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #090003;
  font-size: 18px;
`;

const Input = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;

const Subtasks = ({ subtasks, handleSubtaskChange }) => {
  const [subtaskItem, setSubtaskItem] = useState("");

  const handleAddSubtask = (e) => {
    e.preventDefault();
    let subtaskArray = subtaskItem
      ? [...subtasks, { subtask: subtaskItem }]
      : "";
    handleSubtaskChange(subtaskArray);
    setSubtaskItem("");
  };

  return (
    <Container>
      <Label htmlFor="subtasks">Add Checklist for subtasks</Label>
      <Input
        type="text"
        id="subtasks"
        name="subtasks"
        value={subtaskItem}
        onChange={(e) => {
          setSubtaskItem(e.target.value);
        }}
      ></Input>
      <button onClick={handleAddSubtask}>Add subtask</button>
    </Container>
  );
};

Subtasks.propTypes = {
  subtasks: PropTypes.array,
  handleSubtaskChange: PropTypes.func,
};

export default Subtasks;
