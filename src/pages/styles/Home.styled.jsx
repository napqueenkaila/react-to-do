import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const StyledBtn = styled.button`
  background: #0d99ff;
  color: #fff;
  padding: 20px;
  border-radius: 90px;
  border: none;
  font-size: 18px;

  &:hover {
    cursor: ${(props) =>
      props.disabled ? "not-allowed" : "pointer"};
  }
`;

export const SearchDiv = styled.div`
  width: 100%;
  margin: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 60px;
  padding: 1rem;
  border: 1px solid var(--Stroke, #e2e2e2);
`;

export const FilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const PowerModeDiv = styled.div`
  margin: 1rem;
`;

export const ToDoDiv = styled.div`
  width: 100%;
`;