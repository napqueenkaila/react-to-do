import { useEffect, createContext } from "react";
import { PropTypes } from "prop-types";
import useLocalState from "../utils/useLocalState";

export const getLocalStorageToDos = () => {
    return JSON.parse(window.localStorage.getItem("toDos"))
}; 

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [toDos, setToDos] = useLocalState("toDos", []);

    useEffect(() => {
        const storedToDos = getLocalStorageToDos();
        setToDos(storedToDos)
    }, [])

    return (
        <ToDoContext.Provider value={{ toDos, setToDos }}>
            {children}
        </ToDoContext.Provider>
    )
};

ToDoProvider.propTypes = {
  children: PropTypes.object,
};