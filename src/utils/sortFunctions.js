export const sortToDos = (a, b, sortType) => {
    if (sortType === "ascending-priority") {
        return a.priority - b.priority
    } else if (sortType === "descending-priority") {
        return b.priority-a.priority
    } else if (sortType === "ascending-complexity") {
        return a.complexity - b.complexity
    } else if (sortType === "descending-complexity") { 
        return b.complexity - a.complexity
    } else if (sortType === "ascending-date") { 
        //now to future
        const dateOne = new Date(a.date).getTime();
        const dateTwo = new Date(b.date).getTime()
        return dateOne - dateTwo
    } else if (sortType === "descending-date") {
        const dateOne = new Date(a.date).getTime()
        const dateTwo = new Date(b.date).getTime()
        return dateTwo - dateOne
     } else {
        return 0
    }
}