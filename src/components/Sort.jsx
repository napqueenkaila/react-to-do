import { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { PropTypes } from "prop-types";

const SortButton = styled.button`
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
  overflow: hidden;
`;

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
      <SortButton onClick={() => setOpen((prevState) => !prevState)}>
        Sort <i className="fa-solid fa-arrow-down"></i>
      </SortButton>
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
