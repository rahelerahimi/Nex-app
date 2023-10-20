import React, { FC, ChangeEvent } from "react";
import styles from "./FilterSearch.module.css";
import { FilterSearchProps } from "../../type/type";

const FilterSearch: FC<FilterSearchProps> = ({
  handleSearch,
  searchMovies,
  searchTerm,
}) => {
  return (
    <div className={styles.parentInput}>
      <input
        type="text"
        placeholder="search Title..."
        value={searchTerm}
        onChange={handleSearch}
        className={styles.inputSearch}
      />
      <button
        type="button"
        className={styles.butnSearch}
        onClick={searchMovies}
      >
        search
      </button>
    </div>
  );
};

export default FilterSearch;
