import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToDoProvider } from "./context/ToDoContext.jsx";
import Home from "./pages/Home.jsx"
import AddToDo from "./pages/AddToDo.jsx";
import EditToDo from "./pages/EditToDo.jsx";
import ToDoDetail from "./pages/ToDoDetail.jsx";

function App() {
  return (
    <>
      <ToDoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addToDo" element={<AddToDo />} />
            <Route path="/editToDo/:id" element={<EditToDo />} />
            <Route path="/toDoDetail/:id" element={<ToDoDetail/>}/>
          </Routes>
      </Router>

      </ToDoProvider>
    </>
  );
}

export default App;
