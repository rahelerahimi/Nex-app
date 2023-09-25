import React from 'react'
import Image from "next/image";

const Loading = () => {
     return (
         
          <div className=" flex justify-center items-center py-12" >
               <Image width={150} height={150} alt="is loading" src={"./img/loading.svg"}  priority />
               
          </div>
        
     );
}

export default Loading;