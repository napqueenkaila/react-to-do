import styled from "styled-components";
import {motion} from "framer-motion"

export const DropdownBtn = styled.button`
  width: 184px;
  border-radius: 60px;
  background: #fff;
  font-size: 14px;
  border: 1px solid var(--Stroke, #e2e2e2);
  padding: 10px 46px;
`;

export const OptionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 14px;
  position: absolute;
  width: 184px;
  box-shadow: 0px 16px 45px 0px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  transform-origin: 50% 0%;
`;

export const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;