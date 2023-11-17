import { PropTypes } from "prop-types";
import styled from "styled-components";
import ToDoName from "./ToDoName";
import { PriorityButtons, ComplexityButtons } from "./PriorityComplexity";
import { DueDate, DueTime } from "./Due";
import Subtasks from "./Subtasks";
import Tags from "./Tags";

const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SaveButton = styled.button`
  background: #0d99ff;
  color: #fff;
  border-radius: 90px;
  width: 175px;
  padding: 20px 50px;
  border: none;
  font-size: 18px;
`;

export const Form = ({ formData, setFormData, submitNewToDo }) => {
  const handleFormChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.id)
  };

  const handleSubtaskChange = (subtaskArray) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        subtasks: subtaskArray,
      };
    });
  };

  const handleTagChange = (tagArray) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        tags: tagArray,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitNewToDo(e);
    console.log("submit")
  };

  return (
    <ToDoForm onSubmit={handleFormSubmit}>
      <ToDoName handleFormChange={handleFormChange} value={formData.toDoName} />
      <PriorityButtons handleFormChange={handleFormChange} priority={formData?.priority} />
      <ComplexityButtons handleFormChange={handleFormChange} complexity={formData?.complexity} />
      <DateContainer>
        <DueDate handleFormChange={handleFormChange} value={formData.date} />
        <DueTime handleFormChange={handleFormChange} value={formData.time} />
      </DateContainer>
      <Subtasks
        subtasks={formData.subtasks}
        handleSubtaskChange={handleSubtaskChange}
      />
      <Tags tags={formData.tags} handleTagChange={handleTagChange} />
      <SaveButton>Save</SaveButton>
    </ToDoForm>
  );
};

Form.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  submitNewToDo: PropTypes.func,
};
