import { useContext, useState } from "react"
import { v4 as uuid } from "uuid"
import { ToDoContext } from "./ToDoContext";
import { setLocalStorageToDos } from "./ToDoContext";


function App() {
  const {toDos, setToDos} = useContext(ToDoContext)

  const [formData, setFormData] = useState({
    id: uuid(),
    toDoName: "",
  })

  const levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleFormChange = (e) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToDos((prevToDos => {
      return ([...prevToDos, formData])
    }))
    setLocalStorageToDos([...toDos, formData])
  }

  console.log("form", formData)
  console.log("todos", toDos)
  return (
    <>

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

          <label htmlFor="subtasks">Add Checklist for subtasks</label>
        <input
          type="text"
          id="subtasks"
          name="subtasks"
          value={formData.subtasks}
          onChange={handleFormChange}
        ></input>

        
        <label>Add tags</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={formData.tags}
          onChange={handleFormChange}
        ></input>

          <button>Save</button>
        </form>
    </>
  );
}

export default App
