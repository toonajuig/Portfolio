import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(0,180,122,0.07) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full py-20">
        <p
          className="text-[#00b47a] font-medium text-sm tracking-widest uppercase mb-4"
          style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.1s forwards' }}
        >
          Hello, I&apos;m
        </p>

        <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.25s forwards' }}>
          <h1
            className="font-display font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            Thirawat
          </h1>
          <h1
            className="font-display font-extrabold leading-none mb-6 text-[#00b47a]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)' }}
          >
            Rojanakul
          </h1>
        </div>

        <div style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.45s forwards' }}>
          <p className="text-[#aaaaaa] text-xl md:text-2xl mb-2 max-w-xl">
            I build things for the web.
          </p>
          <p className="text-[#888] text-base mb-10 max-w-xl">
            Full-stack developer · React · Next.js · Node.js
          </p>
        </div>

        <div
          className="flex flex-wrap gap-4"
          style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.6s forwards' }}
        >
          <Button className="rounded-sm px-6 h-10" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" className="rounded-sm px-6 h-10" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        <div
          className="flex items-center gap-6 mt-10"
          style={{ opacity: 0, animation: 'fadeUp 0.6s ease 0.75s forwards' }}
        >
          <a
            href="https://github.com/toonajuig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-[#888] hover:text-[#00b47a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b47a] rounded"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com/in/thirawat-rojanakul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-[#888] hover:text-[#00b47a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b47a] rounded"
          >
            <LinkedinIcon size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#3a3a3a] hover:text-[#00b47a] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
