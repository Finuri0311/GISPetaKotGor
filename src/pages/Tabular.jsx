import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Table from "../components/Table";
import { IoArrowBackCircle } from "react-icons/io5";

import {images} from "../assets/images/images";


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
      <div className="back relative z-10 mx-10 pt-10">
          <div className="button">
            <Link to={"/"} className="flex align-middle justify-center py-1 rounded outline-none bg-gray-800 w-[120px]">
              <IoArrowBackCircle size={38} color="slate"/>
              <span className="inline-flex items-center px-1">Kembali</span>
            </Link>
          </div>
      </div>
      <Table />
    </>
  );
};

export default Tabular;
