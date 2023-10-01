import React from "react";
import "./index.css";
import { BsFacebook,BsTwitter,BsInstagram,BsArrowDown } from 'react-icons/bs';
import {motion} from "framer-motion"

const AnimationSmallText = (props)=> {
    let text = props.text.split('');



    const container = {
      hidden: { 
        opacity: 0,
        y:200,
      },
      show: {
        opacity: 1,
        y:0,
        transition: { staggerChildren: .1, delayChildren: .1 },
      }
    }

    const item = {
        hidden: { 
          opacity:0,
          x:60,
        },
        show: {
          opacity:1,
          x:0,
          transition: {
            type: 'spring',
            damping: 10,
          }
        }
      }

  return (
    <>
      <motion.span variants={container}
            initial="hidden"
            animate="show" >
        {
          text.map((value,index) =>
            <motion.span variants={item} style={{display:'inline-block'}} key={index}>{value}</motion.span>
          )
        }
      </motion.span>
    </>
  )
}
function ScrollDown(){
    return (
        <>
            <div className="scrollDown">
                <p><AnimationSmallText text='scroll' side='x'/></p> <BsArrowDown className="icon"/>
            </div>
        </>
    )
}

export default ScrollDown;