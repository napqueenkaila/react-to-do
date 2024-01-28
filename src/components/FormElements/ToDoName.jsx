import { PropTypes } from "prop-types";
import { Label, Input } from "./styles/ToDoName.styled";

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
