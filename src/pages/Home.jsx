import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";
import ToDoCard from "../components/CardElements/ToDoCard";
import Sort from "../components/Sort";
import FilterTags from "../components/FilterTags";
import PowerMode from "../components/PowerMode";
import { sortToDos, powerModeFilter } from "../utils/sortFunctions";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 1rem;
`;

const SearchInput = styled.input`
  width: 100%;
  border-radius: 60px;
  padding: 1rem;
  border: 1px solid var(--Stroke, #e2e2e2);
`;

const FilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const PowerModeDiv = styled.div`
  margin: 1rem;
`;

const ToDoDiv = styled.div`
  width: 100%;
`;

const Home = () => {
  const { toDos } = useContext(ToDoContext);
  const [powerMode, setPowerMode] = useState(false);

  const setTags = new Set(
    toDos
      ? toDos
          .map((toDo) => toDo.tags)
          .flat()
          .map((tag) => tag.tag)
      : null
  );

  const allTags = [...setTags];

  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("");
  const [filterTags, setFilterTags] = useState([]);

  const filteredItems = toDos
    ? toDos
        .filter((toDo) => toDo.toDoName.toLowerCase().includes(searchInput))
        .filter((toDo) =>
          filterTags.length > 0
            ? filterTags.some((filterTag) =>
                toDo.tags.map((tag) => tag.tag).includes(filterTag)
              )
            : toDo
        )
    : toDos;

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handlePowerMode = () => {
    setPowerMode((prevState) => !prevState);
  };

  const powerModeToDo = powerMode
    ? toDos.sort(powerModeFilter).find((toDo) => !toDo.completed)
    : toDos;

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
      <PowerModeDiv>
        <PowerMode handlePowerMode={handlePowerMode} powerMode={powerMode} />
      </PowerModeDiv>
      <ToDoDiv>
        {powerMode ? (
          <ToDoCard
            key={powerModeToDo.id}
            toDo={powerModeToDo}
            hasButtons={true}
            hasProgressRadial={true}
          />
        ) : filteredItems ? (
          filteredItems
            .sort((a, b) => sortToDos(a, b, sortType))
            .map((toDo) => {
              return (
                <ToDoCard
                  key={toDo.id}
                  toDo={toDo}
                  hasButtons={true}
                  hasProgressRadial={true}
                />
              );
            })
        ) : null}
      </ToDoDiv>
      <Link to="/addToDo">
        <AddNewButton>+ Add New Task</AddNewButton>
      </Link>
    </HomeContainer>
  );
};

export default Home;
