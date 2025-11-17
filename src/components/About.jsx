import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a software developer focused on building products that are fast, reliable, and joyful to use. I care deeply about user experience, performance, and clean architecture. I move quickly without breaking things.
            </p>
            <p className="mt-3 text-slate-700 leading-relaxed">
              When I’m not coding, I explore motion design, contribute to open‑source, and learn new ways to make interfaces feel alive.
            </p>
          </motion.div>

          <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="grid sm:grid-cols-2 gap-4">
            {["Performance first","Accessible by default","Design‑driven","Type‑safe","Tested and observable","Maintainable at scale"].map((p) => (
              <li key={p} className="rounded-xl ring-1 ring-slate-200 bg-gradient-to-br from-indigo-500/5 to-fuchsia-500/5 p-4">
                <span className="block font-semibold">{p}</span>
                <span className="text-sm text-slate-600">Principle</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
