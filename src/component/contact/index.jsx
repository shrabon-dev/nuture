import React from "react";
import "./index.css";
import bannerImg from "../../assets/images/banner.png";
import Navbar from "../navbar";
import Social from "../social";
import ScrollDown from "../scrollDown";
import { motion } from "framer-motion";


function Contact () {
    let style = {
        backgroundImage:`url(${bannerImg})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
    }

    const container = {
      initial:{
        opacity:0,
        x:-200,
      },
      show:{
        opacity:1,
        x:0,
        transition:{
          duration:1,
          staggerChildren: .2,
        }
      }
    }
    
    const item = {
      initial:{
        opacity:0,
        x:-100,
      },
      show:{
        opacity:1,
        x:0,
        transition:{
          duration:1,
        }
      }
    }

    const containerY = {
      initial:{
        opacity:0,
        y:-100,
      },
      show:{
        opacity:1,
        y:0,
        transition:{
          duration:1,
          staggerChildren: .2,
        }
      }
    }

    const itemAnimateY = {
      initial:{
        opacity:0,
        y:60,
      },
      show:{
        opacity:1,
        y:0,
        transition:{
          duration:1,
        }
      }
    }

  return (
    <>
        <section style={style} className="contact pageInView" id="contact">
          <div className="container">
            {/* NAV BAR START */}
              {/* <Navbar/> */}
            {/* NAV BAR END */}
            {/* CONTENT START */}
              <div className="content">
                <div className="dFlex">
                <motion.div initial={'initial'} whileInView={'show'} variants={container} className="contactInfo">
                    <motion.h2 variants={item}>Contact</motion.h2>
                    <motion.h4  variants={item}>Address</motion.h4>
                    <motion.p  variants={item}>PIMPRI CHINCHWAD, PUNE.
                    MAHARASHTRA, 411017</motion.p>
                    <motion.h4  variants={item}>Phone</motion.h4>
                    <motion.p  variants={item}>+880 123456987</motion.p>
                    <motion.h4  variants={item}>E-Mail</motion.h4>
                    <motion.p  variants={item}>info@gmail.com</motion.p>
                </motion.div>
                <motion.div initial={'initial'} whileInView={'show'} variants={containerY} className="contactForm">
                    <motion.h2 variants={itemAnimateY}>CONTACT FORM</motion.h2>
                    <motion.form variants={itemAnimateY} action="#" method="post">
                        <motion.input  variants={itemAnimateY} type="text" name="" id="" placeholder="Full Name"/>
                        <motion.input  variants={itemAnimateY} type="text" name="" id="" placeholder="Email address"/>
                        <motion.input  variants={itemAnimateY} type="text" name="" id="" placeholder="Phone No."/>
                        <motion.input  variants={itemAnimateY} type="text" name="" id="" placeholder="Subject"/>
                        <motion.button  variants={itemAnimateY}>Send Message</motion.button>
                    </motion.form>
                </motion.div>
                </div>
                {/* <Social/>
                <ScrollDown/>  */}
              </div>
            {/* CONTENT END */}
          </div>
        </section>
    </>
  )
}

export default Contact;