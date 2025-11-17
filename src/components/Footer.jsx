export default function Footer(){
  return (
    <footer className="border-t border-neutral-200/60 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-neutral-800" href="#">LinkedIn</a>
          <a className="hover:text-neutral-800" href="#">GitHub</a>
          <a className="hover:text-neutral-800" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}
