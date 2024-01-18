import { useEffect, createContext } from "react";
import { PropTypes } from "prop-types";
import useLocalState from "../utils/useLocalState";

export const getLocalStorageToDos = () => {
  return JSON.parse(window.localStorage.getItem("toDos"));
};

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [toDos, setToDos] = useLocalState("toDos", []);

  useEffect(() => {
    const storedToDos = getLocalStorageToDos();
    setToDos(storedToDos);
  }, []);

  const submitNewToDo = (e, formData) => {
    e.preventDefault();
    setToDos(toDos ? [...toDos, formData] : [formData]);
  };

  const updateToDo = (e, currentToDoId, currentToDo) => {
    e.preventDefault();
    const updatedToDos = toDos.map((toDo) => {
      if (toDo.id === currentToDoId) {
        return currentToDo;
      } else {
        return toDo;
      }
    });
    setToDos(updatedToDos);
  };

  const handleCompleteToDo = (id, completed) => {
    const updatedToDos = toDos.map((toDo) => {
      if (id === toDo.id) {
        return { ...toDo, completed: !completed };
      } else {
        return { ...toDo };
      }
    });
    setToDos(updatedToDos);
  };

  const handleDeleteToDo = (e, currentToDoId) => {
    e.preventDefault();
    const updatedToDos = toDos.filter((toDo) => toDo.id !== currentToDoId);
    setToDos(updatedToDos);
  };

  const handleCompleteSubtask = (subtaskId, currentToDo) => {
    const updatedSubtasks = currentToDo.subtasks.map((subtask) => {
      if (subtaskId === subtask.id) {
        return { ...subtask, completed: !subtask.completed };
      } else {
        return { ...subtask };
      }
    });

    const updatedToDos = toDos.map((toDo) => {
      if (currentToDo.id === toDo.id) {
        return { ...toDo, subtasks: updatedSubtasks };
      } else {
        return { ...toDo };
      }
    });
    setToDos(updatedToDos);
  };

  const handleDeleteSubtask = (id, currentToDo) => {
    const updatedSubtasks = currentToDo.subtasks.filter(
      (subtask) => subtask.id !== id
    );
    const updatedToDos = toDos.map((toDo) => {
      if (currentToDo.id === toDo.id) {
        return { ...toDo, subtasks: updatedSubtasks };
      } else {
        return { ...toDo };
      }
    });
    setToDos(updatedToDos);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDos,
        setToDos,
        submitNewToDo,
        updateToDo,
        handleDeleteToDo,
        handleCompleteToDo,
        handleDeleteSubtask,
        handleCompleteSubtask,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

ToDoProvider.propTypes = {
  children: PropTypes.object,
};
