import { useState } from "react";
import { PropTypes } from "prop-types";
import { v4 as uuid } from "uuid";
import {
  Container,
  Label,
  InputDiv,
  Input,
  AddBtn,
  TagList,
  ListItem,
  RemoveTagBtn,
} from "./styles/SubtasksTags.styled";

const Tags = ({ handleTagChange, tags }) => {
  const [tag, setTag] = useState("");

  const tagColors = ["#FFF6E8", "#ECFFE8", "#E8FEFF"];
  const randomIndex = Math.floor(Math.random() * 3);

  const handleSubmitTag = (e) => {
    e.preventDefault();
    let tagArray = tag
      ? [...tags, { id: uuid(), tag: tag, color: tagColors[randomIndex] }]
      : "";
    handleTagChange(tagArray);
    setTag("");
  };

  const removeTag = (tagId) => {
    const updatedTags = tags.filter((tag) => tag.id !== tagId);
    handleTagChange(updatedTags);
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmitTag(e)}>
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
          <AddBtn>+</AddBtn>
        </InputDiv>
      </form>
      <TagList>
        {tags.map((tag) => {
          return (
            <ListItem key={tag.id} style={{ backgroundColor: tag.color }}>
              {tag.tag}
              <RemoveTagBtn onClick={() => removeTag(tag.id)}>x</RemoveTagBtn>
            </ListItem>
          );
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
