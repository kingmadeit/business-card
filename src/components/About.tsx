import React from 'react'

const About = () => {
  return (
    <section className='flex flex-col space-y-4'>
        <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] align-center border border-green-400 rounded-full overflow-hidden">
            <img
                className="w-full h-full object-cover object-center"
                src="me.jpg"
                alt="Profile image"
            />
        </div>
        <div className='flex flex-col align-center'>
            <h2 className='font-bold'>King Adarkwah</h2>
            <small>Senior FullStack Engineer &amp; Designer</small>
            <div className='text-blue-200 text-center'>
                <p>Passionate about crafting intuitive and scalable web and mobile applications </p>
                <p>Code, Design, Innovation</p>
            </div>
        </div>
    </section>
  )
}

export default About