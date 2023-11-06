import { Link } from "react-router-dom";
import styled from "styled-components";
import useLocalState from "../utils/LocalStorage";
import ToDoCard from "../components/CardElements/ToDoCard";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const AddNewButton = styled.button`
  background: #0d99ff;
  color: #fff;
  padding: 20px;
  border-radius: 90px;
  border: none;
  font-size: 18px;
`;

const Home = () => {
  const [toDos, setToDos] = useLocalState("toDos", [])

  return (
    <HomeContainer>
      <div>
        {toDos.map((toDo) => {
          return (
              <ToDoCard
                key={toDo.id}
                toDo={toDo}
              />
          );
        })}
      </div>
      <Link to="/addToDo">
        <AddNewButton>+ Add New Task</AddNewButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
