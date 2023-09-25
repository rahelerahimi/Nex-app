import React from 'react';
import Image from 'next/image';
import { FC} from "react";
import Link from "next/link";
import styles from './TrendMovies.module.css';
import { MovieData ,DataProps} from '../../type/type';
import { AiOutlinePlayCircle } from 'react-icons/ai';

  const TrendMovies : FC<DataProps>= ({data})  => {
   
  return (
    <div>

        <p className={styles.trand}>Trending Movies</p>      
        <div className={styles.mapVideo}>
     
        {
         
          data.slice(0, 8).map((item:MovieData) => {
                return (
                   
                      <div key={item.id}>
                      <Link href={`/movies/${item.id}`}> 
                          <figure className='figureTrend'>
                          <Image src={item.poster} alt={item.title} className='imgVideo ' width={1000}  height={800}  priority={true}/>
                          <div >
                          <span  className='iconTrend'><AiOutlinePlayCircle/></span> 
                         <button className='btnTrend'>add to my list</button>
                          </div>
                        
                          </figure></Link> 
                         <Link href={`/movies/${item.id}`}> <p className='titleVideo' >{item.title}</p></Link>
                         <span className='year'>{item.year}</span>
                         <span className='rating'>{item.imdb_rating}</span>
                         <p className='country'> {item.country}</p>
                    </div>
               )
                 })   
        }
         </div>
         </div>
  )
}

export default TrendMovies;