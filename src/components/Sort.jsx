import { useState } from "react";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const SortDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0px 16px 45px 0px rgba(0, 0, 0, 0.16);
  position: absolute;
`;

const SortButton = styled.button`
  width: 184px;
  border-radius: 60px;
  background: #fff;
  font-size: 14px;
  border: 1px solid var(--Stroke, #e2e2e2);
  padding: 10px 46px;
`;

const SortOption = styled.div`
  display: flex;
  padding: 14px;
`;

const Sort = ({ setSortType }) => {
  const [open, setOpen] = useState(false);

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    setOpen(false);
  };

  return (
    <div>
      <SortButton onClick={() => setOpen((prevState) => !prevState)}>
        Sort <i className="fa-solid fa-arrow-down"></i>
      </SortButton>
      {open ? (
        <SortDiv>
          <SortOption>
            <label htmlFor="default">
              Default
              <input
                type="radio"
                name="sort"
                id="default"
                value="default"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="ascending-priority">
              Ascending Priority
              <input
                type="radio"
                name="sort"
                id="ascending-priority"
                value="ascending-priority"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="descending-priority">
              Descending Priority
              <input
                type="radio"
                name="sort"
                id="descending-priority"
                value="descending-priority"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="descending-complexity">
              Descending Complexity
              <input
                type="radio"
                name="sort"
                id="descending-complexity"
                value="descending-complexity"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="ascending-complexity">
              Ascending Complexity
              <input
                type="radio"
                name="sort"
                id="ascending-complexity"
                value="ascending-complexity"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="ascending-date">
              Ascending Date
              <input
                type="radio"
                name="sort"
                id="ascending-date"
                value="ascending-date"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
          <SortOption>
            <label htmlFor="descending-date">
              Descending Date
              <input
                type="radio"
                name="sort"
                id="descending-date"
                value="descending-date"
                onChange={handleSortChange}
              />
            </label>
          </SortOption>
        </SortDiv>
      ) : null}
    </div>
  );
};

export default Sort;
Sort.propTypes = {
  setSortType: PropTypes.func,
};
