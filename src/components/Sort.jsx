import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { PropTypes } from "prop-types";
import { DropdownBtn, OptionsContainer, OptionDiv } from "./styles/shared.styled";

const Sort = ({ setSortType }) => {
  const [open, setOpen] = useState(false);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setOpen(false);
  };

  const containerVars = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      transition: { duration: 0.4, ease: [0.12, 0, 0.39, 0] },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.4,
        ease: [0.12, 0, 0.39, 1],
      },
    },
  };

  return (
    <div>
      <DropdownBtn onClick={() => setOpen((prevState) => !prevState)}>
        Sort <i className="fa-solid fa-arrow-down"></i>
      </DropdownBtn>
      <AnimatePresence>
        {open ? (
          <OptionsContainer
            variants={containerVars}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <OptionDiv>
              <label htmlFor="default">Default</label>
              <input
                type="radio"
                name="sort"
                id="default"
                value="default"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="ascending-priority">Ascending Priority</label>
              <input
                type="radio"
                name="sort"
                id="ascending-priority"
                value="ascending-priority"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="descending-priority">Descending Priority</label>
              <input
                type="radio"
                name="sort"
                id="descending-priority"
                value="descending-priority"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="descending-complexity">
                Descending Complexity
              </label>
              <input
                type="radio"
                name="sort"
                id="descending-complexity"
                value="descending-complexity"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="ascending-complexity">Ascending Complexity</label>
              <input
                type="radio"
                name="sort"
                id="ascending-complexity"
                value="ascending-complexity"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="ascending-date">Ascending Date</label>
              <input
                type="radio"
                name="sort"
                id="ascending-date"
                value="ascending-date"
                onChange={handleSortChange}
              />
            </OptionDiv>
            <OptionDiv>
              <label htmlFor="descending-date">Descending Date</label>
              <input
                type="radio"
                name="sort"
                id="descending-date"
                value="descending-date"
                onChange={handleSortChange}
              />
            </OptionDiv>
          </OptionsContainer>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Sort;
Sort.propTypes = {
  setSortType: PropTypes.func,
};
