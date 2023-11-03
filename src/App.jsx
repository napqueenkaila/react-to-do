import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToDoProvider } from "./context/ToDoContext.jsx";
import Home from "./pages/Home.jsx"
import AddToDo from "./pages/AddToDo.jsx";

function App() {
  return (
    <>
      <ToDoProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addToDo" element={<AddToDo/>}/>
          </Routes>
      </Router>

      </ToDoProvider>
    </>
  );
}

export default App;
