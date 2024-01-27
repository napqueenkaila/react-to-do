import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const FilterButton = styled.button`
  width: 184px;
  border-radius: 60px;
  background: #fff;
  font-size: 14px;
  border: 1px solid var(--Stroke, #e2e2e2);
  padding: 10px 46px;
`;

const OptionsContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 14px;
  position: absolute;
  width: 184px;
  box-shadow: 0px 16px 45px 0px rgba(0, 0, 0, 0.16);
  border-radius: 20px;
  transform-origin: 50% 0%;
`;

const OptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px;
`;

const FilterTags = ({ filterOptions, filterTags, setFilterTags }) => {
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

  return (
    <div>
      <FilterButton onClick={() => setOpen((prevState) => !prevState)}>
        Filter <i className="fa-solid fa-arrow-down"></i>
      </FilterButton>
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
};
