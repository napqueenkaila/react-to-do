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

const CardContainer = styled.div`
  border-radius: 18px;
  background: #fff;
  margin-bottom: 10px;
  font-family: Inter;
  padding: 20px 12px;
`;
const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`;
const EditButton = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;
`;
const StyledIcon = styled.i`
  color: #090003;
`;

const StyledSpan = styled.span`
  color: #717171;
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
