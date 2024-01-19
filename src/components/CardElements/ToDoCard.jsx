import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
// import ProgressBar from "./ProgressBar";
// import ProgressRadial from "./ProgressRadial";

const CardContainer = styled.div`
  border-radius: 18px;
  background: #fff;
  margin-bottom: 20px;
  font-family: Inter;
  padding: 20px 12px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const ToDoCard = ({
  toDo,
  handleCompleteToDo,
  hasButtons,
  hasProgressBar,
  hasProgressRadial,
}) => {
  return (
    <>
      <CardContainer key={toDo.id}>
        <CardHeader
          toDo={toDo}
          hasButtons={hasButtons}
          handleCompleteTask={handleCompleteToDo}
        />
        <StyledLink to={`/toDoDetail/${toDo.id}`}>
          <CardContent
            toDo={toDo}
            hasProgressBar={hasProgressBar}
            hasProgressRadial={hasProgressRadial}
          />
          {/* {hasProgressBar ? (<ProgressBar />) : null} */}
          {/* {hasProgressRadial ? (<ProgressRadial/>): null} */}
        </StyledLink>
      </CardContainer>
    </>
  );
};

export default ToDoCard;

ToDoCard.propTypes = {
  toDo: PropTypes.object,
  hasButtons: PropTypes.bool,
  handleCompleteToDo: PropTypes.func,
  hasProgressBar: PropTypes.bool,
  hasProgressRadial: PropTypes.bool,
};
