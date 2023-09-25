import React ,{FC,ChangeEvent} from 'react'
import styles from './FilterSelect.module.css';
import { FilterSelectProps } from '../../type/type';

const FilterSelect:FC<FilterSelectProps> = ({handleSelect,sortMovies,selectedOption}) => {
  return (
    <div>

<div className={styles.parentSelect}>
                    <div className={styles.select}>
                    <select
                            value={selectedOption}
                            onChange={handleSelect}
                         className={styles.selectOption}
                    >
                        
                         <option value="">select Country</option>
                         <option value="USA">USA</option>
                         <option value="Italy">Italy</option>
                         <option value="Germany"> Germany</option>
                       
                    </select></div>
                    
                    <div  className={styles.parentBtnSort}> 
                         <label htmlFor="old" className={styles.lableSort} >old</label><input type="radio" name="sort" id="old"   value='old'  onChange={sortMovies} />
                      <label htmlFor="new" className={styles.lableSort} >new</label><input type="radio" name="sort" id="new"   value='new'onChange={sortMovies} /> 
                    </div>

               </div>
    </div>
  )
}

export default FilterSelect