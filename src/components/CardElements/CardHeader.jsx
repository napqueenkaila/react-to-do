import { Link } from "react-router-dom";
import styled from "styled-components";


const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const EditButton = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CardHeader = ({toDos}) => {
    return (
      <div>
        <Header>
          <h3>{toDos[index].toDoName}</h3>
          <Links to={`/editToDo/${toDo.id}`}>
            <EditButton className="fa-solid fa-pen-to-square"></EditButton>
          </Links>
        </Header>
      </div>
    );
};

export default CardHeader;