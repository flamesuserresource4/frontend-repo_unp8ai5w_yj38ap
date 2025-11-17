import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Collab Editor',
    desc: 'Multiplayer text editor with CRDTs, presence, and offline support.',
    tags: ['React', 'Y.js', 'Tailwind', 'Vite'],
    link: '#',
  },
  {
    title: 'E‑commerce Platform',
    desc: 'Headless storefront with checkout, search, and analytics.',
    tags: ['Next.js', 'Stripe', 'Postgres'],
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Accessible component library with tokens and theming.',
    tags: ['React', 'Radix', 'Storybook'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Projects</h2>
          <p className="max-w-xl text-slate-600">A selection of work that balances performance, craft, and business impact.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="block group rounded-2xl ring-1 ring-slate-200 bg-white p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <Star className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs">{t}</span>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-700">
                <span>Explore</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
