import {GlassCard, About, Qrcode, ContactLinks} from "./components"

const App = () => {
  return (
     <main className='flex justify-center items-center w-full min-h-screen overflow-y-auto bg-[#101a23] mx-auto'>
      <GlassCard className="max-w-[320px] align-center space-y-4">
        <About />
        <Qrcode />
        <ContactLinks />
      </GlassCard>
     </main>
  )
}

export default App