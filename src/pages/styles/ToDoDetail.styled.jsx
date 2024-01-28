import styled from "styled-components";
import { Link } from "react-router-dom";

export const ToDoContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-template-areas:
    "edit delete"
    "repeat repeat";
  grid-row-gap: 25px;
  grid-column-gap: 30px;
  margin-top: 30px;
`;

export const EditBtn = styled(Link)`
  grid-area: edit;
  background: rgba(13, 153, 255, 0.1);
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #090003;
  border-radius: 120px;
  text-align: center;
  padding: 20px 50px;
`;

export const DeleteBtn = styled.button`
  grid-area: delete;
  border: none;
  background: rgba(255, 64, 52, 0.1);
  border-radius: 120px;
  font-weight: 500;
  font-size: 18px;
`;

export const RepeatBtn = styled.button`
  grid-area: repeat;
  border: none;
  border-radius: 120px;
  background: #0d99ff;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;