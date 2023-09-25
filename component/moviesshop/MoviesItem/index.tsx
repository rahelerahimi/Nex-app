import React ,{FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './MoviesItem.module.css';
import { MovieData,MoviesItemProps } from '../../type/type';
import {AiOutlinePlayCircle} from 'react-icons/ai'

const MoviesItem:FC<MoviesItemProps> = ({paginatedMovies}) => {
  return (
    <div  className={styles.parentItemMovies}>


{
                        
                        paginatedMovies.map((item:MovieData) => {
                                 return (
                                  <div key={item.id}>
                                  <Link href={`/movies/${item.id}`}> 
                                      <figure className='figureTrend'>
                                      <Image src={item.poster} alt={item.title} className='imgVideo'   width={1000}  height={800}  priority={true}/>
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
  )
}

export default MoviesItem