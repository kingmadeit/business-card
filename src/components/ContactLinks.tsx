import { TbBrandLinkedin } from "react-icons/tb";
import { RiTwitterXLine } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";

const ContactLinks = () => {
  return (
    <div className="flex space-x-4 justify-center items-center text-white/60 text-2xl">
      <a href="https://github.com/kingmadeit" target="_blank" rel="noopener noreferrer">
        <VscGithub className="hover:text-black transition-colors" />
      </a>
      <a href="https://linkedin.com/in/kingsleyadarkwah" target="_blank" rel="noopener noreferrer">
        <TbBrandLinkedin className="hover:text-blue-400 transition-colors" />
      </a>
       <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
        <RiTwitterXLine className="hover:text-black transition-colors" />
      </a>
      <a href="mailto:kingsley.adarkwah@gmail.com" target="_blank" rel="noopener noreferrer">
        <HiOutlineMail className="hover:text-green-400 transition-colors" />
      </a>
    </div>

  )
}

export default ContactLinks