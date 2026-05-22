import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

export default function Footer() {
  return (
    <footer className="bg-[#151515] border-t border-[#3a3a3a] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#888] text-sm">
          © {new Date().getFullYear()} Thirawat Rojanakul. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/toonajuig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#888] hover:text-[#00b47a] transition-colors"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/thirawat-rojanakul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#888] hover:text-[#00b47a] transition-colors"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href="mailto:thirawat.devtt@gmail.com"
            aria-label="Email"
            className="text-[#888] hover:text-[#00b47a] transition-colors"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}
