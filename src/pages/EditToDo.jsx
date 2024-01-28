import { useContext, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToDoContext } from "../context/ToDoContext";
import Form from "../components/FormElements/Form";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  BackButton,
} from "./styles/shared.styled";

const EditToDo = () => {
  const { toDos, updateToDo } = useContext(ToDoContext);

  const currentToDoId = useParams().id;
  const current = toDos.find((toDo) => toDo.id === currentToDoId);
  const [currentToDo, setCurrentToDo] = useState(current);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left"></BackButton>
        </Link>
        <PageTitle>Edit Task</PageTitle>
      </PageHeader>
      <Form
        formData={currentToDo}
        setFormData={setCurrentToDo}
        submitToDo={() => {
          updateToDo(currentToDoId, currentToDo);
          navigate("/");
        }}
      />
    </PageContainer>
  );
};

export default EditToDo;
