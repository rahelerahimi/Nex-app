import React, { FC } from "react";
import SingleMoviesUi from "../singleMoviesUI";
import { SingleMoviesProps } from "../../type/type";

const SingleMovies: FC<SingleMoviesProps> = ({ data }) => {
  return (
    <div>
      <SingleMoviesUi data={data} />
    </div>
  );
};

export default SingleMovies;
