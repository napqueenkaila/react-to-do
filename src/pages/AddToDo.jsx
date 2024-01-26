import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import Form from "../components/FormElements/Form";
import { ToDoContext } from "../context/ToDoContext";

const AddToDoContainer = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 35px;
  position: relative;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #000;
  font-weight: 500;
`;

const BackButton = styled.i`
  background: #fff;
  padding: 11px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 16px;
`;

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
    <AddToDoContainer>
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
          submitNewToDo( formData);
          navigate("/");
        }}
      />
    </AddToDoContainer>
  );
};

export default AddToDo;
