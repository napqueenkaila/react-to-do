import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Label = styled.label`
  color: #090003;
  font-size: 18px;
  font-weight: 500;
`;

export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 20px;
  flex-grow: 1;
  border: none;
  border-radius: 90px;
`;

export const AddBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  color: #fff;
  background-color: #0d99ff;
  font-size: 24px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const SubtaskList = styled.div`
  padding: 0;
  list-style-position: inside;
  counter-reset: list-number;
`;

export const TagList = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
`;

export const ListItem = styled.div`
  border-radius: 90px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubtaskListItem = styled(ListItem)`
  margin-top: 15px;
  background: #fff;
  counter-increment: list-number;
  &:before {
    content: counter(list-number) ".";
    margin: 10px;
  }
`;

export const RemoveSubtaskBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background-color: #deecf6;
`;

export const RemoveTagBtn = styled.button`
  background: none;
  border: none;
  font-weight: bold;
`;
