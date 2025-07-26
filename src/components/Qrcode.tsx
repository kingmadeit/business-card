import { motion } from 'motion/react'
import { QRCodeSVG } from 'qrcode.react'
import { scaleIn } from '../lib/data'



const Qrcode = ({url}: {url: string}) => {
  return (
    <motion.div {...scaleIn} className='transform-gpu flex w-[128px] h-[128px] mt-2 mb-4 rounded-sm justify-center items-center border-3 border-cyan-300/30 animate-pulse'>
      <QRCodeSVG  className='qrcode' opacity='0.7' value={url}/>
    </motion.div>
  )
}

export default Qrcode