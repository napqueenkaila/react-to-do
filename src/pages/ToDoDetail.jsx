import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLocalState from "../utils/useLocalState";
import ToDoCard from "../components/CardElements/ToDoCard";

const PageContainer = styled.div`
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
`;

const BackButton = styled.i`
  background: #fff;
  padding: 11px;
  border-radius: 50%;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #000;
`;

const ToDoContainer = styled.div``;

const ButtonContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-template-areas:
    "edit delete"
    "repeat repeat";
  grid-row-gap: 25px;
  grid-column-gap: 30px;
  margin-top: 30px;
`;

const EditTask = styled(Link)`
  grid-area: edit;
  background: rgba(13, 153, 255, 0.1);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #090003;
  border-radius: 120px;
  text-align: center;
  padding: 20px 50px;
`;

const DeleteTask = styled.button`
  grid-area: delete;
  border: none;
  background: rgba(255, 64, 52, 0.1);
  border-radius: 120px;
  font-weight: 500;
  font-size: 18px;
`;

const RepeatTask = styled.button`
  grid-area: repeat;
  border: none;
  border-radius: 120px;
  background: #0d99ff;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const ToDoDetail = () => {
  const [toDos, setToDos] = useLocalState("toDos", []);

  const currentToDoId = useParams().id;
  const currentToDo = toDos.find((toDo) => toDo.id === currentToDoId);
  const navigate = useNavigate();

  const handleDeleteTask = (e) => {
    e.preventDefault();
    const updatedToDos = toDos.filter((toDo) => toDo.id !== currentToDoId);
    setToDos(updatedToDos);
    navigate("/")
  };

  return (
    <PageContainer>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left"></BackButton>
        </Link>
        <PageTitle>Task Details</PageTitle>
      </PageHeader>
      <ToDoContainer>
        <ToDoCard toDo={currentToDo} hasButtons={false} />
        <p>
          Task Completed<span>(completion percentage)</span>
        </p>
        <div>
          <p>Checklist for subtasks</p>
          <ol>
            {currentToDo.subtasks.map((subtask) => {
              return <li key={subtask.id}>{subtask.subtask}</li>;
            })}
          </ol>
        </div>
      </ToDoContainer>
      <ButtonContainer>
        <EditTask to={`/editToDo/${currentToDoId}`}>Edit Task</EditTask>
        <DeleteTask onClick={handleDeleteTask}>Delete Task</DeleteTask>
        <RepeatTask>
          <i className="fa-solid fa-repeat"></i>Repeat Task
        </RepeatTask>
      </ButtonContainer>
    </PageContainer>
  );
};

export default ToDoDetail;
