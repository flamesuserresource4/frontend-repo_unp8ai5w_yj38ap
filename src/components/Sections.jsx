import { motion } from 'framer-motion'
import { Code2, Cpu, FolderGit2, Mail, Star, Zap } from 'lucide-react'

export default function Sections() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          About
        </motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6,delay:.05}} className="mt-4 text-neutral-600 text-lg">
          I craft fast, accessible, and visually rich web applications. I love bridging design and engineering to create joyful user experiences with real business impact.
        </motion.p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[{icon:Zap,title:'Performance First',desc:'Lighthouse-optimized, edge‑ready apps.'},{icon:Star,title:'Design Systems',desc:'Robust components with strong UX.'},{icon:Cpu,title:'Full‑Stack',desc:'From APIs to delightful UIs.'}].map((f,i)=> (
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:.05*i}} className="rounded-xl border border-neutral-200/60 bg-white/60 backdrop-blur shadow-sm p-5">
              <div className="h-10 w-10 grid place-content-center rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 text-white">
                {f.icon({size:20})}
              </div>
              <h3 className="mt-3 font-semibold text-neutral-900">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-5xl mx-auto py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Experience
        </motion.h2>
        <div className="mt-8 grid gap-4">
          {[1,2,3].map((i)=> (
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:.04*i}} className="rounded-xl border border-neutral-200/60 bg-white/60 backdrop-blur shadow-sm p-5">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-neutral-900">Senior Frontend Engineer · Company {i}</div>
                <div className="text-sm text-neutral-500">202{1+i} — Present</div>
              </div>
              <ul className="mt-2 list-disc pl-5 text-neutral-600 text-sm">
                <li>Led performance initiatives achieving 90+ Lighthouse scores.</li>
                <li>Built and maintained a design system used across products.</li>
                <li>Collaborated closely with designers and backend teams.</li>
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Selected Projects
        </motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i)=> (
            <motion.a key={i} href="#" initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:.03*i}} className="group rounded-2xl overflow-hidden border border-neutral-200/60 bg-white/60 backdrop-blur shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/30 to-amber-400/30" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-neutral-500"><FolderGit2 size={14}/> React · FastAPI · MongoDB</div>
                <h3 className="mt-1 font-semibold text-neutral-900 group-hover:underline">Project {i}</h3>
                <p className="mt-1 text-sm text-neutral-600">High‑performance app with rich interactions and clean architecture.</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Skills
        </motion.h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {icon:Code2,label:'TypeScript'},
            {icon:Code2,label:'React / Next.js'},
            {icon:Code2,label:'Node / FastAPI'},
            {icon:Code2,label:'MongoDB'},
            {icon:Code2,label:'Tailwind / Radix'},
            {icon:Code2,label:'Framer Motion'},
            {icon:Code2,label:'Testing / CI'},
            {icon:Code2,label:'Web Performance'},
          ].map((s,i)=> (
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5, delay:.03*i}} className="rounded-xl border border-neutral-200/60 bg-white/60 backdrop-blur shadow-sm p-4 flex items-center gap-3">
              <div className="h-9 w-9 grid place-content-center rounded-lg bg-neutral-900 text-white"><s.icon size={18}/></div>
              <span className="text-sm font-medium text-neutral-800">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto py-20">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          Contact
        </motion.h2>
        <motion.form initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} onSubmit={(e)=>e.preventDefault()} className="mt-6 grid gap-3 rounded-2xl border border-neutral-200/60 bg-white/60 backdrop-blur p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-3">
            <input className="h-11 rounded-lg border border-neutral-300 px-3 bg-white/80" placeholder="Name" required/>
            <input className="h-11 rounded-lg border border-neutral-300 px-3 bg-white/80" type="email" placeholder="Email" required/>
          </div>
          <textarea className="min-h-[120px] rounded-lg border border-neutral-300 p-3 bg-white/80" placeholder="Tell me about your project..." required/>
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white px-5 py-3 text-sm font-semibold shadow hover:scale-[1.02] active:scale-[.98] transition">
            <Mail size={16}/> Send Message
          </button>
        </motion.form>
      </section>
    </div>
  )
}
