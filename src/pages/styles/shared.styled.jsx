import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 35px;
  position: relative;
`;

export const PageTitle = styled.h1`
  font-size: 24px;
  color: #000;
  font-weight: 500;
`;

export const BackButton = styled.i`
  background: #fff;
  color: #0d0d0d;
  padding: 11px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 16px;
`;
