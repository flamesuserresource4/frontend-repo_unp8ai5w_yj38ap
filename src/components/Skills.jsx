import { motion } from 'framer-motion'
import { Code2, Server, Layers, Wrench } from 'lucide-react'

const skills = [
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    color: 'from-indigo-500/10 to-indigo-500/5',
  },
  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'REST & GraphQL'],
    color: 'from-fuchsia-500/10 to-fuchsia-500/5',
  },
  {
    title: 'Architecture',
    icon: Layers,
    items: ['Microservices', 'Design Systems', 'Clean Architecture', 'Testing'],
    color: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['Git', 'CI/CD', 'Docker', 'Vercel', 'AWS'],
    color: 'from-emerald-500/10 to-emerald-500/5',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Skills</h2>
          <p className="max-w-xl text-slate-600">A blend of product thinking, design sense, and engineering rigor. I optimize for clarity, resilience, and speed.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ title, icon: Icon, items, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className={`rounded-2xl p-6 ring-1 ring-slate-200 bg-gradient-to-br ${color}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <ul className="space-y-2 text-slate-700">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
