import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 18px;
`;

export const StyledList = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const SubtaskItem = styled.li`
  padding: 20px 25px;
  background: #fff;
  border-radius: 90px;
  align-items: center;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDiv = styled.div`
  display: flex;
  gap: 10px;
`;

export const CompleteSubtaskBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  &:hover {
    cursor: pointer;
  }
`;

export const RemoveSubtaskBtn = styled(CompleteSubtaskBtn)`
  background-color: #deecf6;
  &:hover {
    cursor: pointer;
  }
`;
