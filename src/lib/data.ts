import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

import type { IBusinessCard } from "../types/type";

export const businessCard: IBusinessCard = {
    bio: {
        name: 'King Adarkwah',
        position: 'Senior Software Engineer + Designer',
        description: 'Passionate about crafting intuitive and scalable web and mobile applications',
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
                name: 'twitter',
                href: "https://twitter.com/yourusername",
                icon: RiTwitterXLine,
                iconHoverClass: 'hover:text-black transition-colors'
            },
            {
                id: "4",
                name: 'email',
                href: "mailto:kingsley.adarkwah@gmail.com",
                icon: HiOutlineMail,
                iconHoverClass: 'hover:text-green-400 transition-colors'
            },                       
        ]
    },
    qrcodeUrl: 'https://meetking.vercel.app',
    typingText: [
        {text: 'creativity', deleteAfter: true},
        {text: 'design', deleteAfter: true}, 
        {text: 'architecture', deleteAfter: true},
        { text: 'code', deleteAfter: true}, 
        {text: 'innovation', deleteAfter: false}
    ],
 
}