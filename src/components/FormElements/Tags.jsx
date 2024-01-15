import { useState } from "react";
import { PropTypes } from "prop-types";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Label = styled.label`
  color: #090003;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 20px;
`;

const TagList = styled.ol`
  display: flex;
`;

const ListItem = styled.li`
  background: #fff;
  border-radius: 90px;
  padding: 20px;
`;

const Tags = ({ handleTagChange, tags }) => {
  const [tag, setTag] = useState("");

  const handleAddTag = (e) => {
    e.preventDefault();
    let tagArray = tag ? [...tags, { id: uuid(), tag: tag }] : "";
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
      <TagList>
        {tags.map((tag) => {
          return <ListItem key={tag.id}>{tag.tag}</ListItem>;
        })}
      </TagList>
    </Container>
  );
};

export default Tags;

Tags.propTypes = {
  tags: PropTypes.array,
  handleTagChange: PropTypes.func,
};
