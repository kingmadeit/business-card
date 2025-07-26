import TypewriterLoop, { type TypewriterSequence } from "./kokonut-ui/TypewriterLoop"
import { slideRight } from "../lib/data";
import { motion } from "motion/react";
import {memo} from 'react';

const Footer = ({typingText}: {typingText: TypewriterSequence[]}) => {
  return (
    <motion.footer {...slideRight} className='will-change-transform w-full mt-4 p-4 pb-0 border-t-1 border-white/10'>
        <TypewriterLoop 
          typingSpeed={100}
          startDelay={1500}
          loopDelay={2000}
          sequences={typingText} 
        />
    </motion.footer>
  )
}

export default memo(Footer)

