import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

const CardContainer = styled.div`
  border-radius: 18px;
  background: #fff;
  margin-bottom: 10px;
  font-family: Inter;
  padding: 20px 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const ToDoCard = ({ toDo }) => {
  return (
    <>
      <CardContainer key={toDo.id}>
        <CardHeader toDo={toDo} />
        <StyledLink to={`/toDoDetail/${toDo.id}`}>
          <CardContent toDo={toDo} />
        </StyledLink>
      </CardContainer>
    </>
  );
};

ToDoCard.propTypes = {
  toDo: PropTypes.object,
};

export default ToDoCard;
