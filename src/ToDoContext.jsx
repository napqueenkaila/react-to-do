import { useState, useEffect, createContext } from "react";

export const setLocalStorageToDos = (toDos) => {
    window.localStorage.setItem("toDos", JSON.stringify(toDos))
}

const getLocalStorageToDos = () => {
    return JSON.parse(window.localStorage.getItem("toDos"))
}

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [toDos, setToDos] = useState({});
    
    useEffect(() => {
        const storedToDos = getLocalStorageToDos();
        setToDos(storedToDos)
    }, [])

    return (
        <ToDoContext.Provider value={{ toDos, setToDos }}>
            {children}
        </ToDoContext.Provider>
    )
}