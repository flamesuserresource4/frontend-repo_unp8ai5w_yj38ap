import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">Let’s build something</h2>
              <p className="mt-2 text-slate-600">Tell me about your project. I’ll reply within 24 hours.</p>
            </div>
            <a href="mailto:you@example.com" className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:shadow-lg hover:translate-y-[-1px] transition-all">Email me</a>
          </div>

          <motion.form initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 grid md:grid-cols-2 gap-4">
            <input className="rounded-lg ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-slate-400" placeholder="Name" />
            <input className="rounded-lg ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-slate-400" placeholder="Email" />
            <input className="md:col-span-2 rounded-lg ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-slate-400" placeholder="Subject" />
            <textarea rows="4" className="md:col-span-2 rounded-lg ring-1 ring-slate-200 px-4 py-3 focus:outline-none focus:ring-slate-400" placeholder="Message" />
            <button type="button" className="md:col-span-2 px-5 py-3 rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:translate-y-[-1px] transition-all">Send message</button>
          </motion.form>
        </div>

        <p className="text-center text-slate-500 text-sm mt-6">© {new Date().getFullYear()} Your Name — Built with passion.</p>
      </div>
    </section>
  )
}
