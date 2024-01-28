import { PropTypes } from "prop-types";
import { SectionContainer, ButtonContainer, Title, Label, Input } from "./styles/PriorityComplexity.styled";

const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const PriorityButtons = ({ handleFormChange, priority }) => {
  return (
    <SectionContainer>
      <Title>Select Priority Level</Title>
      <ButtonContainer>
        {levels.map((level) => {
          const checked = priority === level.toString();
          return (
            <div key={level}>
              <Label
                htmlFor={`priority${level}`}
                key={level}
                style={{
                  backgroundColor: checked ? "#0d99ff" : "rgba(13,153,255,0.1)",
                  color: checked ? "#FFF" : "#000",
                }}
              >
                {level}
                <Input
                  type="radio"
                  key={level}
                  id={`priority${level}`}
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

export const ComplexityButtons = ({handleFormChange, complexity}) => {
  return (
    <SectionContainer>
      <Title>Select Complexity Level</Title>
      <ButtonContainer>
        {levels.map((level) => {
          const checked = complexity === level.toString();
          return (
            <div key={level}>
              <Label
                htmlFor={`complexity${level}`}
                key={level}
                style={{
                  backgroundColor: checked ? "#0d99ff" : "rgba(13,153,255,0.1)",
                  color: checked ? "#FFF" : "#000",
                }}
              >
                {level}
                <Input
                  type="radio"
                  key={level}
                  id={`complexity${level}`}
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
  priority: PropTypes.string,
};

ComplexityButtons.propTypes = {
  handleFormChange: PropTypes.func,
  complexity: PropTypes.string,
};
