import { motion } from "framer-motion";
import NewNav from "./components/NewNav";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface text-neutral-100 antialiased selection:bg-violet-400 selection:text-violet-950">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1035_0%,#030014_45%,#010008_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-6rem] top-24 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-4rem] top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-[linear-gradient(to_top,rgba(3,0,20,0.95),transparent)]" />
      </div>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <NewNav />
      </div>
    </div>
  );
}

export default App;
