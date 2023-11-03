import { Link } from "react-router-dom";
import styled from "styled-components";

const AddNewButton = styled.button`
  background: #0d99ff;
  color: #fff;
  padding: 20px;
  border-radius: 90px;
  border: none;
  font-size: 18px;
`;

const Home = () => {
  return (
    <div>
      <Link to="/addToDo">
        <AddNewButton>+ Add New Task</AddNewButton>
      </Link>
    </div>
  );
};

export default Home;
