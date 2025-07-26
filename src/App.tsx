import { motion } from "motion/react";
import {GlassCard, About, Qrcode, Footer} from "./components"
import { businessCard, slideUp } from "./lib/data"

const {bio, qrcodeUrl, typingText} = businessCard;

const App = () => {
  return (
     <main className='flex justify-center items-center w-full min-h-screen overflow-y-auto bg-[#101a23] mx-auto'>
      <motion.div {...slideUp}>
        <GlassCard className="align-center space-y-4 w-full">
          <About bio={bio} />
          <Qrcode url={qrcodeUrl} />
          <Footer typingText={typingText}/>
        </GlassCard>
      </motion.div>
     </main>
  )
}

export default App