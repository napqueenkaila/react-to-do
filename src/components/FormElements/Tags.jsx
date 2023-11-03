import { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #090003;
  font-size: 18px;
`;

const Input = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;

const Tags = ({ tags, handleTagChange }) => {
  const [tag, setTag] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    let tagArray = tag ? [tags, { tagItem: tag }] : "";
    handleTagChange(tagArray);
    setTag("");
  };

  return (
    <Container>
      <Label htmlFor="tags">Add tags</Label>
      <Input
        type="text"
        id="tags"
        name="tags"
        value={tag}
        onChange={(e) => {
          setTag(e.target.value);
        }}
      ></Input>
      <button onClick={handleAddTag}>Add Tag</button>
    </Container>
  );
};

Tags.propTypes = {
  tags: PropTypes.array,
  handleTagChange: PropTypes.func,
};

export default Tags;
