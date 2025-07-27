import { TbBrandLinkedin } from "react-icons/tb";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

import type { IBusinessCard } from "../types/type";
import { createSlideIn, sharedTransition } from "../utils/animations";
import type { Variants } from "motion/react";

export const businessCard: IBusinessCard = {
    bio: {
        name: 'King Adarkwah',
        position: 'Senior Software Engineer + Designer',
        description: 'Passionate about crafting',
        descriptionFlipText: ['intuitive', 'scalable', 'appealing'],
        subDescription: 'web and mobile applications',
        contactLinks: [
            {
                id: "1",
                name: 'git',
                href: "https://github.com/kingmadeit",
                icon: VscGithub,
                iconHoverClass: 'hover:text-black transition-colors'
            },
            {
                id: "2",
                name: 'linkedin',
                href: "https://linkedin.com/in/kingsleyadarkwah",
                icon: TbBrandLinkedin,
                iconHoverClass: 'hover:text-blue-400 transition-colors'
            },
            {
                id: "3",
                name: 'email',
                href: "mailto:kingsley.adarkwah@gmail.com",
                icon: HiOutlineMail,
                iconHoverClass: 'hover:text-green-400 transition-colors'
            },                       
        ]
    },
    qrcodeUrl: 'https://meetking.vercel.app',
    typingText: [
        {text: 'creating', deleteAfter: true},
        {text: 'designing', deleteAfter: true}, 
        {text: 'architecting', deleteAfter: true},
        { text: 'coding', deleteAfter: true}, 
        {text: 'innovating', deleteAfter: false}
    ],
 
}

export const slideRight = createSlideIn("x", 50, -1);
export const slideLeft = createSlideIn("x", -50, -1);
export const slideUp = createSlideIn("y", -50, -1);

// Fade-in animation
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: sharedTransition,
  },
  exit: {
    opacity: 0,
    transition: sharedTransition,
  },
};

// Scale-in (zoom) animation
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.55,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: sharedTransition,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: sharedTransition,
  },
};

// Staggered parent variant for group animations
export const staggerParent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const shareContactInfo: {title: string, text: string, url: string} = {
  title: "KingMadeIt",
  text: "Check out King's business card for contact details!",
  url: "https://meetking.vercel.app",
}