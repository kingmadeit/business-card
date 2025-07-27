import { motion } from "motion/react";
import {GlassCard, About, Qrcode, Footer} from "./components"
import { businessCard, slideUp } from "./lib/data"
import { useEffect } from "react";

const {bio, qrcodeUrl, typingText} = businessCard;

const App = () => {
  // Set the viewport height to 1vh on initial load and on resize
  // This is useful for mobile devices to ensure the viewport height is accurate
  // as the address bar can change the height dynamically.
  // This is a common technique to handle mobile viewport issues.
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);
  
  return (
     <main className='flex relative justify-center items-center w-full min-h-[calc(var(--vh)_*_100)] overflow-y-auto bg-[#241529] mx-auto'>
      <motion.div {...slideUp} className="transform-gpu">
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