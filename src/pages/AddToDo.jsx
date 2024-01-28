import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ToDoContext } from "../context/ToDoContext";
import Form from "../components/FormElements/Form";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  BackButton,
} from "./styles/shared.styled";

const AddToDo = () => {
  const { submitNewToDo } = useContext(ToDoContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: uuid(),
    toDoName: "",
    priority: "",
    complexity: "",
    date: "",
    time: "",
    subtasks: [],
    tags: [],
    completed: false,
  });

  return (
    <PageContainer>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left"></BackButton>
        </Link>
        <PageTitle>Add New Task</PageTitle>
      </PageHeader>
      <Form
        formData={formData}
        setFormData={setFormData}
        submitToDo={() => {
          submitNewToDo(formData);
          navigate("/");
        }}
      />
    </PageContainer>
  );
};

export default AddToDo;
