import React, { useRef } from "react";
import {motion} from "framer-motion"
import "./index.css";
import bannerImg from "../../assets/images/banner.png";
import Navbar from "../navbar";
import Social from "../social";
import ScrollDown from "../scrollDown";
import AnimationSmallText from "../animtaionText";
import { scrollPageY } from "../scrollAnimation";

const AnimationText = (props) => {
  let text = props.text.split('');
  

  const container = {
    hidden: { 
      opacity: 0,
      y:200,
    },
    show: {
      opacity: 1,
      y:0,
      transition: {
        staggerChildren: .2,
        duration:1,
      }
    }
  }
  
  const item = {
    hidden: { 
      opacity:0,
      scale:.5,
      filter:'blur(10px)',
    },
    show: {
      opacity:1,
      filter:'blur(0px)',
      scale:1,
      transition: {
        duration:.6,
      }
    }
  }

  return (
    <>
      <motion.span variants={container} initial="hidden" animate="show">
        {
          text.map((value,index) =>
            <motion.span variants={item} style={{display:'inline-block'}}>{value}</motion.span>
          )
        }
      </motion.span>
    </>
  )

}


function Banner () {
  const sectionRef = useRef(null);
  scrollPageY(sectionRef);
  
    let style = {
        backgroundImage:`url(${bannerImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
    }
  return (
    <>
        <section ref={sectionRef} style={style} className="banner pageInView" id="home">
          <div className="container">
            {/* CONTENT START */}
              <div className="content">
                <div className="bnrText">
                  <p style={{overflowY:'hidden'}}><AnimationSmallText text="I"/> <AnimationSmallText text="am"/></p>
                  <div className="bigText">
                    <h2><AnimationText text="LIFE" /></h2>
                  </div>
                  <p><span><AnimationSmallText text="An"/></span>  <AnimationSmallText text="Environmentlist"/> </p>
                </div>
              </div>
            {/* CONTENT END */}
          </div>
        </section>
    </>
  )
}

export default Banner;