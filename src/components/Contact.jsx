import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { GithubIcon, LinkedinIcon } from '@/components/Icons'

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="contact" className="bg-[#1e1e1e] py-24 px-6">
      <div
        ref={ref}
        className={[
          'max-w-6xl mx-auto text-center transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ].join(' ')}
      >
        <p className="text-[#00b47a] font-medium text-sm tracking-widest uppercase mb-2">
          Get in touch
        </p>
        <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
          Contact
        </h2>
        <p className="text-[#aaaaaa] text-lg max-w-xl mx-auto mb-10">
          I&apos;m currently open to new opportunities. Whether you have a question or just want
          to say hi — my inbox is always open.
        </p>

        <Button className="rounded-sm px-8 h-12 text-base gap-2" asChild>
          <a href="mailto:thirawat.devtt@gmail.com">
            <Mail size={18} />
            Say Hello
          </a>
        </Button>

        <div className="flex justify-center items-center gap-8 mt-12">
          <a
            href="https://github.com/toonajuig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#888] hover:text-[#00b47a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b47a] rounded"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/thirawat-rojanakul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#888] hover:text-[#00b47a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b47a] rounded"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="mailto:thirawat.devtt@gmail.com"
            aria-label="Email"
            className="text-[#888] hover:text-[#00b47a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b47a] rounded"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  )
}
