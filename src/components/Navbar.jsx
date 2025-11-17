import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 animate-pulse" />
            <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">Your Name</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <a href="#contact" onClick={(e)=>{e.preventDefault();handleNav('contact')}} className="inline-flex items-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow hover:scale-[1.02] active:scale-[.98] transition">
              Hire Me
            </a>
          </nav>
          <button className="md:hidden p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800" onClick={()=>setOpen(o=>!o)} aria-label="Toggle Menu">
            {open ? <X size={20}/> : <Menu size={20}/>} 
          </button>
        </div>
      </div>
      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-neutral-200/50 dark:border-neutral-800">
          <div className="px-4 py-3 grid gap-2 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className="text-left px-2 py-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
              >
                {l.label}
              </button>
            ))}
            <button onClick={()=>handleNav('contact')} className="mt-2 inline-flex justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2 text-sm font-semibold shadow">Hire Me</button>
          </div>
        </div>
      )}
    </header>
  )
}
