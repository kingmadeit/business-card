import React from 'react'
import { QRCodeSVG } from 'qrcode.react'
const Qrcode = () => {
  return (
    <section className='flex w-[130px] rounded-sm justify-center items-center border border-white/50'>
      <QRCodeSVG  className='qrcode' opacity='0.7' value='https://laris-mdus.vercel.app'/>
    </section>
  )
}

export default Qrcode