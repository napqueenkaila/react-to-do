import { useContext, useState } from "react";
import styled from "styled-components";
import { Link, useParams, useNavigate } from "react-router-dom";
import Form from "../components/FormElements/Form";
import { ToDoContext } from "../context/ToDoContext";

const EditToDoContainer = styled.div`
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

const EditToDo = () => {
  const {toDos, setToDos} = useContext(ToDoContext)

  const currentToDoId = useParams().id;
  const current = toDos.find((toDo) => toDo.id === currentToDoId);
  const [currentToDo, setCurrentToDo] = useState(current);
  const navigate = useNavigate();

  const submitEditToDo = (e) => {
    e.preventDefault();
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === currentToDoId) {
        return currentToDo;
      } else {
        return toDo;
      }
    });
    setToDos(updatedToDos);
    navigate("/");
  };

  return (
    <EditToDoContainer>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left"></BackButton>
        </Link>
        <PageTitle>Edit Task</PageTitle>
      </PageHeader>
      <Form
        formData={currentToDo}
        setFormData={setCurrentToDo}
        submitToDo={submitEditToDo}
      />
    </EditToDoContainer>
  );
};

export default EditToDo;
