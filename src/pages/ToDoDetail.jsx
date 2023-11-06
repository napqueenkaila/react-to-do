import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import useLocalState from "../utils/LocalStorage";
import CardContent from "../components/CardElements/CardContent";

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

const ToDoDetail = () => {
  const [toDos, setToDos] = useLocalState("toDos", []);

  const toDoId = useParams().id;
  const currentToDo = toDos.find((toDo) => toDo.id === toDoId);


  return (
    <div>
      <PageHeader>
        <Link to="/">
          <BackButton className="fa-solid fa-arrow-left" />
        </Link>
        <PageTitle>Task Details</PageTitle>
      </PageHeader>
      <ToDoContainer>
        <div>
          <p>{currentToDo.toDoName}</p>
        </div>
        <div>
          <CardContent toDo={currentToDo} />
        </div>
        <div>
          <p>
            Task Completed<span>(completion percentage)</span>
          </p>
        </div>
        <div>
          <p>Checklist for subtasks</p>
          <ol>
            {currentToDo.subtasks.map((subtask) => {
              return <li key={subtask.id}>{subtask.subtask}</li>;
            })}
          </ol>
        </div>
        <button>Edit Task</button>
        <button>Delete Task</button>
        <button>
          <i className="fa-solid fa-repeat"></i>Repeat Task
        </button>
      </ToDoContainer>
    </div>
  );
};

export default ToDoDetail;
