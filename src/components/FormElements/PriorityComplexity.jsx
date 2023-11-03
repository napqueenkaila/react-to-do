import { PropTypes } from "prop-types";
import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100%;
  margin: 15px 0;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.p`
  color: #090003;
  font-size: 18px;
`;

const Label = styled.label`
  padding: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(13, 153, 255, 0.1);
`;

const Input = styled.input`
  display: none;
`;

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PriorityButtons = ({ handleFormChange }) => {
  return (
    <SectionContainer>
      <Title>Set Priority Level</Title>
      <ButtonContainer>
        {levels.map((level) => {
          return (
            <div key={level}>
              <Label htmlFor={level} key={level}>
                {level}
                <Input
                  type="radio"
                  key={level}
                  id={level}
                  name="priority"
                  value={level}
                  onChange={handleFormChange}
                ></Input>
              </Label>
            </div>
          );
        })}
      </ButtonContainer>
    </SectionContainer>
  );
};

export const ComplexityButtons = ({ handleFormChange }) => {
  return (
    <SectionContainer>
      <Title>Set Complexity Level</Title>
      <ButtonContainer>
        {levels.map((level) => {
          return (
            <div key={level}>
              <Label htmlFor={level} key={level}>
                {level}
                <Input
                  type="radio"
                  id={level}
                  name="complexity"
                  value={level}
                  onChange={handleFormChange}
                ></Input>
              </Label>
            </div>
          );
        })}
      </ButtonContainer>
    </SectionContainer>
  );
};

PriorityButtons.propTypes = {
  handleFormChange: PropTypes.func,
};
ComplexityButtons.propTypes = {
  handleFormChange: PropTypes.func,
};
