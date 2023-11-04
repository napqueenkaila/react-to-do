import { Link } from "react-router-dom";
import styled from "styled-components";

const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
  margin-bottom: 35px;
`;

const BackButton = styled.i`
  background: #fff;
  padding: 11px;
  border-radius: 50%;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  color: #000;
`;

const ToDoDetail = () => {
    return (
      <div>
        <PageHeader>
          <Link to="/">
            <BackButton className="fa-solid fa-arrow-left"/>
                </Link>
                <PageTitle>Task Details</PageTitle>
        </PageHeader>
      </div>
    );
};

export default ToDoDetail;