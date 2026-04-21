import NewNav from "./components/NewNav"



function App() {

  return (
    <div className='min-h-screen overflow-x-hidden bg-[#07111f] text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-950'>
        <div className='fixed inset-0 -z-10 overflow-hidden'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#163256_0%,#07111f_42%,#020617_100%)]" />
            <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute right-[-6rem] top-1/3 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgba(2,6,23,0.95),transparent)]" />
        </div>
        <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
            <NewNav/>
        </div>
    </div>
  )
}

export default App
