import React from 'react';
import { getDataTrend } from "../../api";
import TrendMovies from "../trendMovies";

const Section2 = async () => {

     const data = await getDataTrend();
   
     return (
          <div >
               <TrendMovies data={data.data} />

          </div>
     )
}
export default Section2;