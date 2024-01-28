import { PropTypes } from "prop-types";
import ToDoName from "./ToDoName";
import { PriorityButtons, ComplexityButtons } from "./PriorityComplexity";
import { DueDate, DueTime } from "./Due";
import Subtasks from "./Subtasks";
import Tags from "./Tags";
import { ToDoForm, DateContainer, SaveButton } from "./styles/Form.styled";

const Form = ({ formData, setFormData, submitToDo }) => {
  const handleFormChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
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
    submitToDo();
  };

  return (
    <ToDoForm onSubmit={handleFormSubmit}>
      <ToDoName handleFormChange={handleFormChange} value={formData.toDoName} />
      <PriorityButtons
        handleFormChange={handleFormChange}
        priority={formData?.priority}
      />
      <ComplexityButtons
        handleFormChange={handleFormChange}
        complexity={formData?.complexity}
      />
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

export default Form;

Form.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  submitToDo: PropTypes.func,
};
