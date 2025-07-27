import TypewriterLoop, { type TypewriterSequence } from "./kokonut-ui/TypewriterLoop"
import { slideRight } from "../lib/data";
import { motion } from "motion/react";
import {memo} from 'react';
import { DownloadContact, ShareContact } from ".";

const Footer = ({typingText}: {typingText: TypewriterSequence[]}) => {
  return (
    <motion.footer {...slideRight} className='flex will-change-transform w-full mt-4 p-4 pb-0 border-t-1 border-gray-600'>
        <DownloadContact />
        <TypewriterLoop 
          typingSpeed={100}
          startDelay={1500}
          loopDelay={2000}
          sequences={typingText} 
        />
        <ShareContact />
    </motion.footer>
  )
}

export default memo(Footer)

