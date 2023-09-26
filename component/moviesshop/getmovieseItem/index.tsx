import React from 'react';
import { getDataMovie } from '../../api';
import MoviesCom from '../MoviesCom';

const GetMoviesItem = async() => {
     const data= await getDataMovie ()
  return (

    <div>
     <MoviesCom data={data.data} />
     
     </div>
  )
}

export default GetMoviesItem;