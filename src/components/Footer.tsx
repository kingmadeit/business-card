import TypewriterLoop, { type TypewriterSequence } from "./kokonut-ui/TypewriterLoop"

const Footer = ({typingText}: {typingText: TypewriterSequence[]}) => {
  return (
    <footer className='w-full mt-4 p-4 pb-0 border-t-1 border-white/30'>
        <TypewriterLoop 
          typingSpeed={100}
          startDelay={1000}
          loopDelay={2000}
          sequences={typingText} 
        />
    </footer>
  )
}

export default Footer

