"use client";
import axios from "axios";
import React, { useState, FC, ChangeEvent } from "react";
import ReactPaginate from "react-paginate";
import styles from "./MoviesCom.module.css";
import FilterSearch from "../FilterSearch";
import FilterSelect from "../FilterSelect";
import MoviesItem from "../MoviesItem";
import { MovieData, DataProps } from "../../type/type";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";

const MoviesCom: FC<DataProps> = ({ data }) => {
  const [initialItem, setInitialItem] = useState<MovieData[]>(data);
  const [item, setItem] = useState<MovieData[]>(data);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const moviesPerPage = 6; // تعداد فیلم‌ها در هر صفحه

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const searchMovies = async () => {
    if (searchTerm !== "") {
      await axios
        .get(`https://moviesapi.ir/api/v1/movies/?q=${searchTerm}`)
        .then((res) => {
          setInitialItem(res.data.data);
        });
    } else {
      setInitialItem(item);
    }
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") {
      setSelectedOption(e.target.value);
      setInitialItem(item);
    } else {
      setSelectedOption(e.target.value);
      setInitialItem(
        item.filter((product) => product.country.indexOf(e.target.value) >= 0)
      );
    }
  };

  const sortMovies = (e: ChangeEvent<HTMLInputElement>) => {
    setSort(e.target.value);
    if (sort === "new") {
      setInitialItem(
        initialItem.sort((a: MovieData, b: MovieData) => (a.id < b.id ? 1 : -1))
      );
    }
    if (sort === "old") {
      setInitialItem(initialItem.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * moviesPerPage;
  const paginatedMovies = initialItem.slice(offset, offset + moviesPerPage);

  return (
    <div>
      <div className={styles.parentMovies}>
        <FilterSearch
          handleSearch={handleSearch}
          searchMovies={searchMovies}
          searchTerm={searchTerm}
        />
        <FilterSelect
          selectedOption={selectedOption}
          handleSelect={handleSelect}
          sortMovies={sortMovies}
        />
      </div>

      <MoviesItem paginatedMovies={paginatedMovies} />

      <ReactPaginate
        pageCount={Math.ceil(initialItem.length / moviesPerPage)}
        nextLabel={<RiArrowRightDoubleLine />}
        previousLabel={<RiArrowLeftDoubleFill />}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeLinkClassName={styles.active}
        className={styles.paginationBack}
        pageLinkClassName={styles.paginationLink}
        nextClassName={`${
          currentPage === Math.ceil(initialItem.length / moviesPerPage) - 1
            ? styles.invisible
            : ""
        } ${styles.paginationPrevNext}`}
        previousClassName={`${currentPage === 0 ? styles.invisible : ""} ${
          styles.paginationPrevNext
        }`}
      />
    </div>
  );
};

export default MoviesCom;
