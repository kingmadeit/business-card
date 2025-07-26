import TypewriterLoop, { type TypewriterSequence } from "./TypewriterLoop"

const Footer = ({typingText}: {typingText: TypewriterSequence[]}) => {
  return (
    <footer className='w-full p-4 pb-0 border-t-1 border-white/30'>
        <TypewriterLoop 
          typingSpeed={200}
          startDelay={1000}
          loopDelay={3000}
          sequences={typingText} 
        />
    </footer>
  )
}

export default Footer

