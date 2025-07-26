import {GlassCard, About, Qrcode, Footer} from "./components"
import { businessCard } from "./lib/data"

const {bio, qrcodeUrl, typingText} = businessCard;

const App = () => {
  return (
     <main className='flex justify-center items-center w-full min-h-screen overflow-y-auto bg-[#101a23] mx-auto'>
      <GlassCard className="align-center space-y-4 w-full">
        <About bio={bio} />
        <Qrcode url={qrcodeUrl} />
        <Footer typingText={typingText}/>
      </GlassCard>
     </main>
  )
}

export default App