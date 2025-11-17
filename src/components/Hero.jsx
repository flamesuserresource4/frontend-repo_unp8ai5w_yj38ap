import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center pt-28 pb-20">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Building delightful
              <span className="block bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">software experiences</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-slate-600 max-w-xl">
              I craft fast, accessible, and beautiful web apps. Focused on clean code, modern stacks, and pixel-perfect UI.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow hover:shadow-lg hover:translate-y-[-1px] transition-all">View Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold ring-1 ring-slate-200 hover:ring-slate-300 hover:translate-y-[-1px] transition-all">Get in Touch</a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-10 flex items-center gap-4 text-sm text-slate-600">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-medium">Open to work</span>
              <span>•</span>
              <span>Frontend / Full‑stack</span>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
