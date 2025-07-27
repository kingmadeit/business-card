import { motion } from "motion/react";
import type { IBio } from "../types/type"
import ContactLinks from "./ContactLinks";
import MatrixText from "./kokonut-ui/MatrixText";
import { scaleIn, slideRight, slideLeft, slideUp } from "../lib/data";
import { FlipWords } from "./kokonut-ui/FlipText";
import {memo} from "react";


const About = ({bio}: {bio: IBio}) => {
  const {name, position, description, subDescription, descriptionFlipText, contactLinks } = bio;  
  return (
    <section className='flex flex-col space-y-4 items-center'>
        <motion.div {...scaleIn} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] avatar rounded-full overflow-hidden">
            <img
                className="w-full h-full object-cover object-center"
                src="me.jpg"
                alt="Profile image"
            />
        </motion.div>
        <div className='flex flex-col align-center text-center'>
            <motion.div {...slideRight}>
                <MatrixText text={name} className="font-bold text-shadow-sm"/>
            </motion.div>
            <motion.div {...slideLeft}>
                <MatrixText text={position} tag="small" className='text-[#90adcb] text-shadow-sm'/>
            </motion.div>
            <div className="pt-4">
                <ContactLinks links={contactLinks}/>
            </div>
            <motion.div {...slideUp} className='will-change-transform text-gray-400 text-center text-xs pt-4'>
                <p className="w-[90%] mx-auto text-shadow-sm">
                    <span className="w-full inline-block">
                        <span>{description}</span>
                        {descriptionFlipText && <FlipWords
                            words={descriptionFlipText}
                            duration={3000}
                            className="text-cyan-400 pl-1 font-bold"
                        />}
                    </span>
                    
                    <span>{subDescription}</span>
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default memo(About)