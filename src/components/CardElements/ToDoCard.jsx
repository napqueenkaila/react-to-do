import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import ProgressBar from "./ProgressBar";
import { getCompletionPercentage } from "../../utils/formatData";

const CardContainer = styled(motion.div)`
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

const ToDoCard = ({ toDo, hasButtons, hasProgressBar, hasProgressRadial }) => {
  const completionPercentage = getCompletionPercentage(toDo);
  return (
    <CardContainer key={toDo.id} whileHover={{ scale: 1.1 }}>
      <CardHeader toDo={toDo} hasButtons={hasButtons} />
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
