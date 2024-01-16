import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import ToDoCard from "../components/CardElements/ToDoCard";
import Sort from "../components/Sort";
import { ToDoContext } from "../context/ToDoContext";
import { sortToDos } from "../utils/sortFunctions";
import FilterTags from "../components/FilterTags";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 1.5rem auto;
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
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 60px;
  padding: 1rem;
  border: 1px solid var(--Stroke, #e2e2e2);
`;

const FilterDiv = styled.div`
  margin: 20px 0;
  display: flex;
`;

const ToDoDiv = styled.div`
  width: 100%;
`;

const Home = () => {
  const { toDos, handleCompleteToDo } = useContext(ToDoContext);

  const setTags = new Set(
   toDos ? toDos
      .map((toDo) => toDo.tags)
      .flat()
      .map((tag) => tag.tag) : null
  );

  const allTags = [...setTags];

  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("");
  const [filterTags, setFilterTags] = useState(allTags);

  
  if (toDos && filterTags.length === 0) {
    setFilterTags(allTags);
  }

  const filteredItems = toDos
    ? toDos
        .filter((toDo) => toDo.toDoName.toLowerCase().includes(searchInput))
        .filter((toDo) =>
          filterTags.length > 0
            ? filterTags.some((filterTag) =>
                toDo.tags.map((tag) => tag.tag).includes(filterTag)
              )
            : null
        )
    : toDos;

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
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
        <Sort setSortType={setSortType} />
        <FilterTags
          filterOptions={allTags}
          filterTags={filterTags}
          setFilterTags={setFilterTags}
        />
      </FilterDiv>
      <ToDoDiv>
        {filteredItems ? (
          filteredItems
            .sort((a, b) => sortToDos(a, b, sortType))
            .map((toDo) => {
              return (
                <ToDoCard
                  key={toDo.id}
                  toDo={toDo}
                  hasButtons={true}
                  handleCompleteToDo={() => handleCompleteToDo(toDo.id, toDo.completed)}
                />
              );
            })
        ) : (
          <div>No tasks</div>
        )}
      </ToDoDiv>
      <Link to="/addToDo">
        <AddNewButton>+ Add New Task</AddNewButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
