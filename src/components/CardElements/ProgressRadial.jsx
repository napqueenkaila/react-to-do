import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { PropTypes } from "prop-types";

const ProgressRadial = ({ completionPercentage, color }) => {
  return (
    <div style={{ width: "50px", height: "50px" }}>
      <CircularProgressbar
        value={completionPercentage}
        text={`${completionPercentage}%`}
        styles={buildStyles({
            textColor: "#002055",
            pathColor: `${color}`,
            textSize: "25px",

        })}
      />
    </div>
  );
};

export default ProgressRadial;

ProgressRadial.propTypes = {
  completionPercentage: PropTypes.number,
  color: PropTypes.string,
};