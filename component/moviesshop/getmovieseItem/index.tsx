import React from 'react';
import { getDataTrend } from '../../api';
import MoviesCom from '../MoviesCom';

const GetMoviesItem = async() => {
     const data= await getDataTrend()
  return (

    <div>
     <MoviesCom data={data.data} />
     
     </div>
  )
}

export default GetMoviesItem;