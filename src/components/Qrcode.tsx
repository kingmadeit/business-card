import { QRCodeSVG } from 'qrcode.react'

const Qrcode = ({url}: {url: string}) => {
  return (
    <section className='flex w-[128px] h-[128px] mt-2 mb-4 rounded-sm justify-center items-center border border-white/50'>
      <QRCodeSVG  className='qrcode' opacity='0.7' value={url}/>
    </section>
  )
}

export default Qrcode