import { MovieData } from "../type/type";

export const getDataMovie = async (): Promise<{ data: MovieData[] }> => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies/", {
    headers: {
      "Cache-Control": "no-store",
    },
  });
  return data.json();
};

export const getStaticProps = async (): Promise<{ data: MovieData[] }> => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies/");
  return data.json();
};

export const getDataSingle = async (id: number): Promise<MovieData> => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
  return data.json();
};
