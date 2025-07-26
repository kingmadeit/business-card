import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

export const businessCard = {
    name: 'King Adarkwah',
    position: 'Senior Software Engineer + Designer',
    description: 'Passionate about crafting intuitive and scalable web and mobile applications',
    qrcodeUrl: 'https://meetking.vercel.app',
    typingText: ['creativity', 'design', 'architecture', 'code', 'innovation'],
    contactLinks: [
        {
            id: 1,
            name: 'git',
            href: "https://github.com/kingmadeit",
            icon: VscGithub
        },
        {
            id: 2,
            name: 'linkedin',
            href: "https://linkedin.com/in/kingsleyadarkwah",
            icon: TbBrandLinkedin
        },
        {
            id: 3,
            name: 'twitter',
            href: "https://twitter.com/yourusername",
            icon: RiTwitterXLine
        },
        {
            id: 4,
            name: 'email',
            href: "mailto:kingsley.adarkwah@gmail.com",
            icon: HiOutlineMail
        },                       
    ]
}