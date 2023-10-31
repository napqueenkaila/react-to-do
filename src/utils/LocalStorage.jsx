import { useState } from "react";

export default function useLocalState(key, initialValue) {
    const storedValue = window.localStorage.getItem(key);
    const item = storedValue ? JSON.parse(storedValue) : initialValue;
    console.log(item)
    const [state, setState] = useState(item);

    const updateState = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    };

    return [state, updateState];
}