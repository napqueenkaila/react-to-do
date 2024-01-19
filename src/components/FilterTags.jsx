import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const FilterButton = styled.button`
  width: 184px;
  border-radius: 60px;
  background: #fff;
  font-size: 14px;
  border: 1px solid var(--Stroke, #e2e2e2);
  padding: 10px 46px;
`;

const OptionsDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 16px 45px 0px rgba(0, 0, 0, 0.16);
  position: absolute;
`;

const FilterOption = styled.label`
  display: flex;
  padding: 14px;
  width: 184px;
`;

const FilterTags = ({ filterOptions, filterTags, setFilterTags }) => {
  const [open, setOpen] = useState(false);

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterTags(
        [...filterTags, e.target.value]
      );
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  return (
    <div>
      <FilterButton onClick={() => setOpen((prevState) => !prevState)}>
        Filter <i className="fa-solid fa-arrow-down"></i>
      </FilterButton>
      <OptionsDiv>
        {open
          ? filterOptions.map((tag) => {
              return (
                <FilterOption key={tag} htmlFor={tag}>
                  {tag}
                  <input
                    type="checkbox"
                    value={tag}
                    id={tag}
                    onChange={(e) => filterHandler(e)}
                  />
                </FilterOption>
              );
            })
          : null}
      </OptionsDiv>
    </div>
  );
};

export default FilterTags;

FilterTags.propTypes = {
  filterOptions: PropTypes.array,
  filterTags: PropTypes.array,
  setFilterTags: PropTypes.func,
};
