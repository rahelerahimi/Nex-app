import React from 'react';
import { getDataMovie} from "../../api";
import TrendMovies from "../trendMovies";

  
const Section2 = async () => {

     const data = await getDataMovie();

     return (
          <div >
               <TrendMovies data={data.data} />

          </div>
     )
}
export default Section2;