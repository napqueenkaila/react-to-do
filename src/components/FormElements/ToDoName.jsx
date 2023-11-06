import { PropTypes } from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #090003;
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 90px;
  border: 1px solid #e2e2e2;
  background: #fff;
  padding: 20px 0px 20px 25px;
  font-size: 16px;
`;

const ToDoName = ({ value, handleFormChange }) => {
  return (
    <>
      <Label htmlFor="toDoName">Task Name</Label>
      <Input
        type="text"
        placeholder="Name of task..."
        id="toDoName"
        name="toDoName"
        value={value}
        onChange={handleFormChange}
      ></Input>
    </>
  );
};

export default ToDoName;

ToDoName.propTypes = {
  value: PropTypes.string,
  handleFormChange: PropTypes.func,
};
