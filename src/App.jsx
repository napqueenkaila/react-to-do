import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToDoProvider } from "./context/ToDoContext"
import Home from "./pages/Home"
import AddToDo from "./pages/AddToDo"
import EditToDo from "./pages/EditToDo"
import ToDoDetail from "./pages/ToDoDetail"

function App() {
  return (
    <>
      <ToDoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addToDo" element={<AddToDo />} />
            <Route path="/editToDo/:id" element={<EditToDo />} />
            <Route path="/toDoDetail/:id" element={<ToDoDetail />} />
          </Routes>
        </Router>
      </ToDoProvider>
    </>
  );
}

export default App
