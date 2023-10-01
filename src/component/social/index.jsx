import React from "react";
import "./index.css";
import { BsFacebook,BsTwitter,BsInstagram,BsArrowDown } from 'react-icons/bs';
import {motion} from "framer-motion"

function Social(){

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
            y:60,
          },
          show: {
            opacity:1,
            y:0,
            transition: {
              type: 'spring',
              damping: 10,
            }
          }
        }

    return (
        <>
            <div className="socialLink">
                <motion.ul variants={container}
            initial="hidden"
            animate="show">
                    <motion.li variants={item}><a href="#"><BsFacebook/></a></motion.li>
                    <motion.li variants={item}><a href="#"><BsTwitter/></a></motion.li>
                    <motion.li variants={item}><a href="#"><BsInstagram/></a></motion.li>
                </motion.ul>
            </div>
        </>
    )
}

export default Social;