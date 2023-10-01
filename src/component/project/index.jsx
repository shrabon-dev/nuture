import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import bannerImg from "../../assets/images/banner.png";
import imgOne from "../../assets/images/project/deforestation.png";
import imgTwo from "../../assets/images/project/plastic waste 1.png";
import imgThree from "../../assets/images/project/water plastic pollution 1.png";
import Navbar from "../navbar";

import Social from "../social";
import ScrollDown from "../scrollDown";
import {BiSolidRightArrow,BiSolidLeftArrow} from "react-icons/bi"
import { motion } from "framer-motion";
import AnimationSmallText from "../animtaionText";
import AnimationWords from "../animtaionWords";


function Project () {
  
  let [current,setCurrent] = useState(1);
  let slideBox = useRef();

  let style = {
    backgroundImage:`url(${bannerImg})`,
    backgroundSize:'cover',
    backgroundPosition:'center',
  }

  let displayWidth = document.body.clientWidth
  setInterval(()=>{
    // console.log(displayWidth)
    
  },1000)

    let prevHandle = () =>{
      if(slideBox.current.children.length>=0){
        slideBox.current.scrollLeft += (slideBox.current.children[current].clientWidth+60);
         setCurrent(++current);
      }else{
        slideBox.current.scrollLeft = 0
      }
      console.log(slideBox.current.scrollLeft)

    }
    let nextHandle = () =>{
      if(slideBox.current.scrollLeft > 0){
      slideBox.current.scrollLeft -= (slideBox.current.children[current].clientWidth+60);
        setCurrent(--current);
      }
      console.log(slideBox.current.scrollLeft)
      console.log(images.length)
    }

  return (
    <>
        <section style={style} className="project pageInView" id="project">
          <div className="container">
            {/* <Navbar/> */}
            {/* CONTENT START */}
              <div className="content">

                <motion.div initial={{ opacity:0,y:200 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:.6 }} className="sliderBox">
                <div className="works" ref={slideBox}>
                <div className="prevBtn" onClick={prevHandle}>
                  <BiSolidLeftArrow className="icon"/>
                </div>
                  {images.map((item,index)=>
                    <div className={index === current ? 'workItem active' : 'workItem'}>
                      <img src={item.url} alt={item.url} />
                    </div>
                  )}
                <div className="nextBtn" onClick={nextHandle}>
                  <BiSolidRightArrow className="icon"/>
                </div>
                </div>
                </motion.div>

                <div className="projectText">
                  {/* <motion.h2 initial={{ y:60,opacity:0 }} whileInView={{ y:0,opacity:1 }} transition={{ duration:.61, }}>SAVE US</motion.h2> */}
                  <h2><AnimationSmallText text={'SAVE'}/> <AnimationSmallText text={'US'}/></h2>
                  <p><AnimationWords text={'Human are trying to kills all the things nature has provided then and with plastic in the nature animals which are no harm are also dying so lets join hands and save our Earth.'}/></p>
                  <motion.div initial={{ opacity:0,y:60 }} whileInView={{ opacity:1,y:0 }} transition={{ duration:.6 }} className="btn">
                    <a href="#"><AnimationSmallText text={'View'}/> <AnimationSmallText text={'Projects'}/></a>
                  </motion.div>
                </div>
                
              </div>
            {/* CONTENT END */}
            {/* <Social/> 
            <ScrollDown/>  */}
          </div>
        </section>
    </>
  )
}

export default Project;

const images = [
  {
    url : imgOne,
  },
  {
    url : imgTwo,
  },
  {
    url : imgThree,
  },
  {
    url : imgTwo,
  },
  {
    url : imgOne,
  },
  {
    url : imgOne,
  },
  {
    url : imgTwo,
  },
  {
    url : imgThree,
  },
  {
    url : imgTwo,
  },
  {
    url : imgOne,
  },
  {
    url : imgOne,
  },
  {
    url : imgTwo,
  },
  {
    url : imgThree,
  },
  {
    url : imgTwo,
  },
  {
    url : imgOne,
  },
]