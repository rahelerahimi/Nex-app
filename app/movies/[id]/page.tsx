import React, { FC } from "react";
import NotFound from "../../not-found";
import SingleMovies from "../../../component/singlemovies/singlemovies/index";
import { getDataSingle } from "../../../component/api";
import { MoviesProps } from "../../../component/type/type";

const Movies: FC<MoviesProps> = async ({ params }) => {
  const data = await getDataSingle(params.id);

  if (!data.id) {
    return <NotFound />;
  }

  return (
    <div>
      <SingleMovies data={data} />
    </div>
  );
};

export default Movies;
