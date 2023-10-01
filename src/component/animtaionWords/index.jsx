import React from 'react'
import {motion} from "framer-motion"

export default function AnimationWords(props) {

  let words = props.text.split(' ');


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
      <motion.span variants={container}
            initial="hidden"
            whileInView="show">
        {
          words.map((value,index) =>
            <React.Fragment key={index}>
            <motion.span variants={item} style={{display:'inline-block'}} key={index}>{value} </motion.span>
            {/* {index < words.length - 1 && <span>  </span>} */}
            <span>  </span>
            </React.Fragment>
          )
        }
      </motion.span>
    </>
  )
}

// return (
//   <>
//     <motion.span
//       variants={container}
//       initial="hidden"
//       whileInView="show"
//       style={{ paddingRight: '50px', marginRight: '10px', display: 'inline-block' }}
//     >
//       {words.map((value, index) => (
//         <React.Fragment key={index}>
//           <motion.span variants={item} style={{ display: 'inline-block' }}>
//             {value}
//           </motion.span>
//           {index < words.length - 1 && <span>&nbsp;</span>}
//         </React.Fragment>
//       ))}
//     </motion.span>
//   </>
// );