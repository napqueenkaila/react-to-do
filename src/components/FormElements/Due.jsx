import { PropTypes } from "prop-types";
import { Container, Label, Input } from "./styles/Due.styled";

export const DueDate = ({ value, handleFormChange }) => {
  return (
    <Container>
      <Label htmlFor="date">Select Due Date</Label>
      <Input
        type="date"
        id="date"
        name="date"
        value={value}
        onChange={handleFormChange}
      ></Input>
    </Container>
  );
};

export const DueTime = ({ value, handleFormChange }) => {
  return (
    <Container>
      <Label htmlFor="time">Select Time</Label>
      <Input
        type="time"
        id="time"
        name="time"
        value={value}
        onChange={handleFormChange}
      ></Input>
    </Container>
  );
};

DueDate.propTypes = {
  value: PropTypes.string,
  handleFormChange: PropTypes.func,
};

DueTime.propTypes = {
  value: PropTypes.string,
  handleFormChange: PropTypes.func,
};
