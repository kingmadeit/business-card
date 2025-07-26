const About = () => {
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
            <h2 className='font-bold'>King Adarkwah</h2>
            <small className='text-[#90adcb]'>Senior FullStack Engineer &amp; Designer</small>
            <div className='text-gray-400 text-center text-xs pt-4'>
                <p>Passionate about crafting intuitive and scalable web and mobile applications </p>
            </div>
        </div>
    </section>
  )
}

export default About