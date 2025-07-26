import type { IBio } from "../types/type"
import ContactLinks from "./ContactLinks";

const About = ({bio}: {bio: IBio}) => {
  const {name, position, description, contactLinks } = bio;  
  return (
    <section className='flex flex-col space-y-4 items-center'>
        <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] border border-green-400 rounded-full overflow-hidden">
            <img
                className="w-full h-full object-cover object-center"
                src="me.jpg"
                alt="Profile image"
            />
        </div>
        <div className='flex flex-col align-center text-center'>
            <h2 className='font-bold'>{name}</h2>
            <small className='text-[#90adcb]'>{position}</small>
            <div className="pt-4">
                <ContactLinks links={contactLinks}/>
            </div>
            <div className='text-gray-400 text-center text-xs pt-4'>
                <p>{description}</p>
            </div>
        </div>
    </section>
  )
}

export default About