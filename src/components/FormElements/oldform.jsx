import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ToDoContext } from "../../context/ToDoContext";
import { setLocalStorageToDos } from "../../context/ToDoContext";

export const Form = () => {
  const { toDos, setToDos } = useContext(ToDoContext);
  const [subtask, setSubtask] = useState([]);
  const [tag, setTag] = useState([]);
  const [formData, setFormData] = useState({
    id: uuid(),
    toDoName: "",
    priority: "",
    complexity: "",
    date: "",
    time: "",
    subtasks: [],
    tags: [],
  });

  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleFormChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToDos((prevToDos) => {
      return [...prevToDos, formData];
    });
    setLocalStorageToDos([...toDos, formData]);
  };

  const handleAddSubtask = (e) => {
    e.preventDefault();
    let subtaskArray = subtask
      ? [...formData.subtasks, { subtaskItem: subtask }]
      : "";
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        subtasks: subtaskArray,
      };
    });
    setSubtask("");
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    let tagsArray = tag ? [...formData.tags, { tagItem: tag }] : "";
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        tags: tagsArray,
      };
    });
    setTag("");
  };

  // console.log("todos", toDos);
  // console.log("form", formData);

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="toDoName">Task Name</label>
      <input
        type="text"
        placeholder="Name of task..."
        id="toDoName"
        name="toDoName"
        value={formData.toDoName}
        onChange={handleFormChange}
      ></input>

      <p>Set priority Level</p>
      {levels.map((level) => {
        return (
          <label htmlFor={level} key={level}>
            {level}
            <input
              type="radio"
              key={level}
              id={level}
              name="priority"
              value={level}
              onChange={handleFormChange}
            ></input>
          </label>
        );
      })}
      <p>Set Complexity Level</p>
      {levels.map((level) => {
        return (
          <label htmlFor={level} key={level}>
            {level}
            <input
              type="radio"
              id={level}
              name="complexity"
              value={level}
              onChange={handleFormChange}
            ></input>
          </label>
        );
      })}

      <label htmlFor="date">Select Due Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleFormChange}
      ></input>

      <label htmlFor="time">Select Time</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleFormChange}
      ></input>

      <div>
        <label htmlFor="subtasks">Add Checklist for subtasks</label>
        <input
          type="text"
          id="subtasks"
          name="subtasks"
          value={subtask}
          onChange={(e) => {
            setSubtask(e.target.value);
          }}
        ></input>
        <button onClick={handleAddSubtask}>Add subtask</button>
      </div>
      <div>
        <label htmlFor="tags">Add tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={tag}
          onChange={(e) => {
            setTag(e.target.value);
          }}
        ></input>
        <button onClick={handleAddTag}>Add Tag</button>
      </div>

      <button>Save</button>
    </form>
  );
};
