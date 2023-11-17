import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { Form } from "../components/FormElements/Form";
import useLocalState from "../utils/LocalStorage";

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
  justify-content:center;
  width: 100%;
  margin-bottom: 35px;
  position: relative
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
  const [formData, setFormData] = useState({
    id: uuid(),
    toDoName: "",
    priority: "",
    complexity: "",
    date: "",
    time: "",
    subtasks: [],
    tags: [],
  });

  const [toDos, setToDos] = useLocalState("toDos", []);
  const navigate = useNavigate();

  const submitNewToDo = (e) => {
    e.preventDefault();
    const updatedToDos = [...toDos, formData];
    setToDos(updatedToDos);

    setFormData({
      id: uuid(),
      toDoName: "",
      priority: "",
      complexity: "",
      date: "",
      time: "",
      subtasks: [],
      tags: [],
    });
    // navigate("/")
  };

  console.log(formData);
  // console.log("todos", toDos);
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
        submitNewToDo={submitNewToDo}
      />
    </AddToDoContainer>
  );
};

export default AddToDo;
