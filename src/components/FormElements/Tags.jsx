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

const InputDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border-radius: 90px;
  background: #fff;
  border: 1px solid #e2e2e2;
  padding: 20px;
  flex-grow: 1;
`;

const AddTagBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  color: #fff;
  background-color: #0d99ff;
  font-size: 24px;
`;

const TagList = styled.div`
  display: flex;
`;

const ListItem = styled.div`
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
      <InputDiv>
        <Input
          type="text"
          id="tags"
          name="tags"
          placeholder="Add Tag..."
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        />
        <AddTagBtn onClick={handleAddTag}>+</AddTagBtn>
      </InputDiv>
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
