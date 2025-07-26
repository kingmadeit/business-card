import {GlassCard, About, Qrcode, ContactLinks} from "./components"

const App = () => {
  return (
     <main className='grid place-content-center  w-full min-h-screen overflow-y-auto bg-[#101a23]'>
      <GlassCard className="max-w-[320px] align-center">
        <About />
        <Qrcode />
        <ContactLinks />
      </GlassCard>
     </main>
  )
}

export default App