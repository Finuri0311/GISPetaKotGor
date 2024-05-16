import React, { useEffect, useState } from "react";
import Table from "../components/Table";

//========================================
import sawah1 from "../assets/images/Sawah-kotgor.jpeg"
import sawah2 from "../assets/images/Sawah-kotgor2.jpg"
import sawah3 from "../assets/images/Sawah-kotgor3.jpeg"
const images = [
    {url: sawah1},
    {url: sawah2},
    {url: sawah3},
]
//=======================================


const Tabular = () => {
    const [imgIdx, setImgIdx] = useState(0);

    //For Image Carousel Effect
    let idx=0
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(idx==3){idx=0; setImgIdx(idx)}
            setImgIdx(idx);
            idx++;
        }, 7000)
        return ()=>clearInterval(interval);
    }, [idx])
    ///

  return (
    <>

      <div 
      className="bg duration-500" 
      style={{
          backgroundImage: `url(${images[imgIdx].url})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover", 
          backgroundPosition: "50%", 
          position: "absolute", 
          top: "0", 
          left:"0", 
          bottom:"0", 
          right:"0", 
          width:"100%", 
          height:"100%", 
          zIndex: "1",
          transitionProperty: "style 2s",
          transitionDuration: "1s",
      }}
      ></div>
      <Table />
    </>
  );
};

export default Tabular;
