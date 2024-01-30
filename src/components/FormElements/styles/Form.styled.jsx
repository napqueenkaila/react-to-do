import styled from "styled-components";

export const ToDoForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;

export const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SaveButton = styled.button`
  background: #0d99ff;
  color: #fff;
  border-radius: 90px;
  width: 175px;
  padding: 20px 50px;
  border: none;
  font-size: 18px;
  &:hover {
    cursor: ${(props) =>
      props.disabled ? "not-allowed" : "pointer"};
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
  margin-top: 10px;
  width: 100%;

`;