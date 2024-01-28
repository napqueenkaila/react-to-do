import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const IconDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const HeaderIcons = styled.i`
  background-color: rgba(13, 153, 255, 0.1);
  padding: 10px;
  border-radius: 90px;
  display: flex;

  &:hover{
    cursor: pointer;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
`;