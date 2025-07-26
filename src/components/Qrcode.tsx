import { QRCodeSVG } from 'qrcode.react'
const Qrcode = () => {
  return (
    <section className='flex w-[128px] h-[128px] mt-2 mb-4 rounded-sm justify-center items-center border border-white/50'>
      <QRCodeSVG  className='qrcode' opacity='0.7' value='https://meetking.vercel.app'/>
    </section>
  )
}

export default Qrcode