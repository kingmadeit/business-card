import { motion } from "motion/react";
import type { IContactLink } from "../types/type";

// Parent animation container
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // Controls spacing between each child animation
      delayChildren: 0.3,   // Optional delay before the first child animates
    },
  },
};

// Child element animation
const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


const ContactLinks = ({links}: {links: IContactLink[] | undefined}) => {

  if (!links) return null;

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex space-x-4 justify-center items-center text-white/60 text-2xl">
      {links.map(({id, href, icon, iconHoverClass}) => {
        
        const Icon = icon;

        return (
          <motion.a key={id} 
          variants={childVariants} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className={iconHoverClass} />
          </motion.a>
        )
      })}
    </motion.div>

  )
}

export default ContactLinks