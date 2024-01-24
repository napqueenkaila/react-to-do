import styled from "styled-components";
import { PropTypes } from "prop-types";

const PowerModeBtn = styled.button`
    background-color: #0d99ff;
    color: #fff;
    width: 192px;
    height: 60px;
    border-radius: 90px;
    border: none;
    font-size: 18px;
`;

const PowerMode = ({handlePowerMode, powerMode}) => {
  return (
    <PowerModeBtn onClick={handlePowerMode}>
      <i className="fa-solid fa-power-off"></i> Power Mode {powerMode ? "On" : "Off"}
    </PowerModeBtn>
  );
};

export default PowerMode;
PowerMode.propTypes = {
  handlePowerMode: PropTypes.func,
  powerMode: PropTypes.bool,
};