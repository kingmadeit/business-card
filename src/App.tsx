import {GlassCard, About, Qrcode, ContactLinks, Footer} from "./components"

const App = () => {
  return (
     <main className='flex justify-center items-center w-full min-h-screen overflow-y-auto bg-[#101a23] mx-auto'>
      <GlassCard className="align-center space-y-4 w-full">
        <About />
        <Qrcode />
        <ContactLinks />
        <Footer />
      </GlassCard>
     </main>
  )
}

export default App