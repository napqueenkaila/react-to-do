import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";


const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderButtons = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;
`;

const Links = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const CardHeader = ({toDo}) => {
    return (
      <div>
        <HeaderDiv>
          <h3>{toDo.toDoName}</h3>
          <Links to={`/editToDo/${toDo.id}`}>
            <HeaderButtons className="fa-solid fa-pen-to-square"/>
          </Links>
          <HeaderButtons className="fa-solid fa-check" />
        </HeaderDiv>
      </div>
    );
};

CardHeader.propTypes = {
  toDo: PropTypes.object,
};

export default CardHeader;