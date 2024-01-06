import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import ToDoCard from "../components/CardElements/ToDoCard";
import { ToDoContext } from "../context/ToDoContext";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const AddNewButton = styled.button`
  background: #0d99ff;
  color: #fff;
  padding: 20px;
  border-radius: 90px;
  border: none;
  font-size: 18px;
`;

const SearchDiv = styled.div`
  width: 100%;
  margin-bottom: 1rem; 
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 60px;
  padding: 1rem;
`;

const FilterDiv = styled.div`
  width: 100%;
`;

const Home = () => {

  const {toDos, setToDos} = useContext(ToDoContext)

  const [filteredToDos, setFilteredToDos] = useState(toDos)

  const handleSearchInputChange = (e) => {
    const searchInput = (e.target.value).toLowerCase()
    const filteredItems = toDos.filter((toDo) =>
      toDo.toDoName.toLowerCase().includes(searchInput)
    )
    setFilteredToDos(filteredItems)
  }

  const handleCompleteTask = (id, completed) => {
    const updatedToDos = toDos.map((toDo) => {
      if (id === toDo.id) {
        return { ...toDo, completed: !completed };
      } else {
        return { ...toDo };
      }
    });
    setToDos(updatedToDos);
  };

  return (
    <HomeContainer>
      <SearchDiv>
        <SearchInput
          type="text"
          placeholder="Search..."
          onChange={handleSearchInputChange}
        ></SearchInput>
      </SearchDiv>
      <FilterDiv>
        <div>
          <label htmlFor="sort">

            <select name="sort" id="sort">
              <option value="default">Default</option>
              <option value="ascending-priority">Ascending Priority</option>
              <option value="descending-priority">Descending Priority</option>
            </select>
          </label>
        </div>
      </FilterDiv>
      <div>
        {filteredToDos.map((toDo) => {
          return (
            <ToDoCard
              key={toDo.id}
              toDo={toDo}
              hasButtons={true}
              handleCompleteTask={handleCompleteTask}
            />
          );
        })}
      </div>
      <Link to="/addToDo">
        <AddNewButton>+ Add New Task</AddNewButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
