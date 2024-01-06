import { PropTypes } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Label = styled.label`
  color: #090003;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Input = styled.input`
  border: 1px solid #e5e0eb;
  border-radius: 90px;
  padding: 12px 24px;
  color: #aba7af;
`;

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

export const DueTime = ({value, handleFormChange}) => {
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
