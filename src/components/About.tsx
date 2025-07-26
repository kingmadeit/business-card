import { motion } from "motion/react";
import type { IBio } from "../types/type"
import ContactLinks from "./ContactLinks";
import MatrixText from "./kokonut-ui/MatrixText";
import { scaleIn, slideRight, slideLeft, slideUp } from "../lib/data";


const About = ({bio}: {bio: IBio}) => {
  const {name, position, description, contactLinks } = bio;  
  return (
    <section className='flex flex-col space-y-4 items-center'>
        <motion.div {...scaleIn} className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] border border-green-400 rounded-full overflow-hidden">
            <img
                className="w-full h-full object-cover object-center"
                src="me.jpg"
                alt="Profile image"
            />
        </motion.div>
        <div className='flex flex-col align-center text-center'>
            <motion.div {...slideRight}>
                <MatrixText text={name} className="font-bold"/>
            </motion.div>
            <motion.div {...slideLeft}>
                <MatrixText text={position} tag="small" className='text-[#90adcb]'/>
            </motion.div>
            <div className="pt-4">
                <ContactLinks links={contactLinks}/>
            </div>
            <motion.div {...slideUp} className='text-gray-400 text-center text-xs pt-4'>
                <p>{description}</p>
            </motion.div>
        </div>
    </section>
  )
}

export default About