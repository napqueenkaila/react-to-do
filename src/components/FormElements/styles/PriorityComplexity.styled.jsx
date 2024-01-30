import styled from "styled-components";

export const SectionContainer = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  color: #090003;
  font-size: 18px;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
padding: 10px;
border-radius: 50%;


`;

export const Label = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  display: none;
`;