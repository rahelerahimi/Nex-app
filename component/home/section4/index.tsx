import React from "react";
import { getStaticProps } from "../../api";
import Swip from "../swiper";

const Section4 = async () => {
  const data = await getStaticProps();

  return (
    <div>
      <Swip data={data.data} />
    </div>
  );
};
export default Section4;
