import { PropTypes } from "prop-types";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import ProgressBar from "./ProgressBar";
import { getCompletionPercentage } from "../../utils/formatData";
import { CardContainer, StyledLink } from "./styles/ToDoCard.styled";

const ToDoCard = ({ toDo, hasButtons, hasProgressBar, hasProgressRadial }) => {
  const completionPercentage = getCompletionPercentage(toDo);
  return (
    <CardContainer key={toDo.id}>
      <CardHeader toDo={toDo} hasButtons={hasButtons} />
      {hasButtons ? (
        <StyledLink to={`/toDoDetail/${toDo.id}`}>
          <CardContent
            toDo={toDo}
            hasProgressRadial={hasProgressRadial}
            completionPercentage={completionPercentage}
          />
          {hasProgressBar ? (
            <ProgressBar completionPercentage={completionPercentage} />
          ) : null}
        </StyledLink>
      ) : (
        <>
          <CardContent
            toDo={toDo}
            hasProgressRadial={hasProgressRadial}
            completionPercentage={completionPercentage}
          ></CardContent>
          <ProgressBar completionPercentage={completionPercentage} />
        </>
      )}
    </CardContainer>
  );
};

export default ToDoCard;

ToDoCard.propTypes = {
  toDo: PropTypes.object,
  hasButtons: PropTypes.bool,
  hasProgressBar: PropTypes.bool,
  hasProgressRadial: PropTypes.bool,
};
