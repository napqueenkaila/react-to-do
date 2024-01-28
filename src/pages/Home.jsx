import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToDoContext } from "../context/ToDoContext";
import ToDoCard from "../components/CardElements/ToDoCard";
import Sort from "../components/Sort";
import FilterTags from "../components/FilterTags";
import { sortToDos, powerModeFilter } from "../utils/sortFunctions";
import {
  HomeContainer,
  StyledBtn,
  SearchDiv,
  SearchInput,
  FilterDiv,
  PowerModeDiv,
  ToDoDiv,
} from "./styles/Home.styled";

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
        <Sort setSortType={setSortType} powerMode={powerMode} />
        <FilterTags
          filterOptions={allTags}
          filterTags={filterTags}
          setFilterTags={setFilterTags}
          powerMode={powerMode}
        />
      </FilterDiv>
      <PowerModeDiv>
        <StyledBtn onClick={handlePowerMode}>
          <i className="fa-solid fa-power-off"></i> Power Mode {powerMode ? "On" : "Off"}
        </StyledBtn>
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
        <StyledBtn>+ Add New Task</StyledBtn>
      </Link>
    </HomeContainer>
  );
};

export default Home;
