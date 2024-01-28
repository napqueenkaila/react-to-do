import { useState } from "react";
import { PropTypes } from "prop-types";
import { AnimatePresence } from "framer-motion";
import {
  FilterDropdownBtn,
  OptionsContainer,
  OptionDiv,
} from "./styles/shared.styled";

const FilterTags = ({
  filterOptions,
  filterTags,
  setFilterTags,
  powerMode,
}) => {
  const [open, setOpen] = useState(false);

  const filterHandler = (e) => {
    if (e.target.checked) {
      setFilterTags([...filterTags, e.target.value]);
    } else {
      setFilterTags(
        filterTags.filter((filterTag) => filterTag !== e.target.value)
      );
    }
  };

  const containerVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.4, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: { duration: 0.4, ease: [0.12, 0, 0.39, 1] },
    },
  };

  console.log(filterOptions.length);
  return (
    <div>
      <FilterDropdownBtn
        onClick={() => setOpen((prevState) => !prevState)}
        disabled={powerMode}
        filterOptions={filterOptions.length}
      >
        Filter <i className="fa-solid fa-arrow-down"></i>
      </FilterDropdownBtn>
      <AnimatePresence>
        {open ? (
          <OptionsContainer
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {filterOptions.map((tag) => {
              return (
                <OptionDiv key={tag}>
                  <label htmlFor={tag}>{tag}</label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    value={tag}
                    id={tag}
                    onChange={(e) => filterHandler(e)}
                  />
                </OptionDiv>
              );
            })}
          </OptionsContainer>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FilterTags;

FilterTags.propTypes = {
  filterOptions: PropTypes.array,
  filterTags: PropTypes.array,
  setFilterTags: PropTypes.func,
  powerMode: PropTypes.bool,
};
