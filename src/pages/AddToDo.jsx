import { useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { Form } from "../components/FormElements/Form";
import useLocalState from "../utils/LocalStorage";
import { Link } from "react-router-dom";

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
  gap: 80px;
  width: 100%;
  margin-bottom: 35px;
  border: 3px red solid;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #000;
`;

const BackButton = styled.i`
  background: #fff;
  padding: 11px;
  border-radius: 50%;
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
