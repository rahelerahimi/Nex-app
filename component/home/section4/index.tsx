import React from 'react';
import {getDataSwiper} from '../../api'
import Swip from "../swiper"


const Section4= async () => {
  const data = await getDataSwiper();

  return (
    <div>
      <Swip data={data.data} />

    </div>
  )
}
export default Section4;





