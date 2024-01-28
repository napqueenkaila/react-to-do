import styled from "styled-components";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export const CardContainer = styled(motion.div)`
  border-radius: 18px;
  background: #fff;
  margin-bottom: 20px;
  font-family: Inter;
  padding: 20px 12px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;