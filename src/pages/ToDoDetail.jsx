import { Link, useParams, useNavigate } from "react-router-dom";
import ToDoCard from "../components/CardElements/ToDoCard";
import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import SubtaskList from "../components/CardElements/SubtaskList";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  BackButton,
} from "./styles/shared.styled";
import { ToDoContainer, ButtonContainer, EditBtn, DeleteBtn, RepeatBtn } from "./styles/ToDoDetail.styled";

const ToDoDetail = () => {
  const { toDos, handleDeleteToDo, handleRepeatToDo } = useContext(ToDoContext);

  const currentToDoId = useParams().id;
  const currentToDo = toDos.find((toDo) => toDo.id === currentToDoId);
  const navigate = useNavigate();

  return (
    <PageContainer>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left"></BackButton>
        </Link>
        <PageTitle>Task Details</PageTitle>
      </PageHeader>
      <ToDoContainer>
        <ToDoCard
          toDo={currentToDo}
          currentToDoId={currentToDoId}
          hasButtons={false}
          hasProgressBar={true}
          hasAnimation={false}
        />
        <SubtaskList currentToDo={currentToDo} currentToDoId={currentToDoId} />
      </ToDoContainer>
      <ButtonContainer>
        <EditBtn to={`/editToDo/${currentToDoId}`}>Edit Task</EditBtn>
        <DeleteBtn
          onClick={(e) => {
            handleDeleteToDo(e, currentToDoId);
            navigate("/");
          }}
        >
          Delete Task
        </DeleteBtn>
        <RepeatBtn
          onClick={() => {
            handleRepeatToDo(currentToDo);
            navigate("/");
          }}
        >
          <i className="fa-solid fa-repeat"></i>Repeat Task
        </RepeatBtn>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ToDoDetail;
