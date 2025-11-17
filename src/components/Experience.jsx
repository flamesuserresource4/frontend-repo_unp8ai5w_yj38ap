import { motion } from 'framer-motion'

const roles = [
  {
    company: 'Acme Corp',
    title: 'Senior Frontend Engineer',
    period: '2022 — Present',
    bullets: [
      'Led performance revamp, improving LCP by 35% and Core Web Vitals to green.',
      'Built design system used across 6 product teams.',
      'Mentored 4 engineers and introduced robust testing culture.',
    ],
  },
  {
    company: 'Nova Labs',
    title: 'Full‑stack Engineer',
    period: '2020 — 2022',
    bullets: [
      'Shipped multi-tenant SaaS with RBAC and audit logging.',
      'Optimized API throughput by 3x via caching and async pipelines.',
      'Collaborated with design to deliver delightful UX at scale.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">Experience</h2>
          <p className="max-w-xl text-slate-600">Impactful work across startups and product teams. I thrive in ambiguous, high‑leverage spaces.</p>
        </div>

        <div className="space-y-6">
          {roles.map((r, i) => (
            <motion.div key={r.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="font-semibold text-lg">{r.title}</h3>
                  <p className="text-slate-600">{r.company}</p>
                </div>
                <span className="text-sm text-slate-500">{r.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                {r.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
