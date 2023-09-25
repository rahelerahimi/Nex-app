

import { MovieData } from "../type/type";

 export const getDataTrend = async ():Promise<{data:MovieData[]}>  => {

     const data = await fetch('https://moviesapi.ir/api/v1/movies/', { cache: 'no-store' })
     return data.json()
}


export const getDataSwiper = async () :Promise<{data:MovieData[]}>=> {

     const data = await fetch('https://moviesapi.ir/api/v1/movies/')
     return data.json()
   }
   

 export const getDataSingle = async (id:number):Promise<MovieData> => {

     const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, { cache: 'no-store' })
     return data.json()
}

