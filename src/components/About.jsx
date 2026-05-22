import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import cvFile from '@/assets/Thirawat_Rojanakul_CV.docx.pdf'

const INFO_ITEMS = [
  { label: 'Background', value: '2+ Years', sub: 'in Operations' },
  { label: 'Program', value: 'JSD-12', sub: 'Generation Thailand' },
  { label: 'Degree', value: 'BBA', sub: 'Management' },
  { label: 'Status', value: 'Open to', sub: 'Work' },
]

const EXPERIENCE = [
  {
    period: '2026',
    title: 'JSD-12 Full-Stack JavaScript Development',
    org: 'Generation Thailand',
    desc: 'Full-stack web development with JavaScript, React, Node.js, PostgreSQL, and Docker.',
  },
  {
    period: '2022–2024',
    title: 'Purchasing & Store Officer',
    org: 'Suksawat Industry Co., Ltd.',
    desc: 'Managed procurement operations, supplier relationships, and inventory systems.',
  },
  {
    period: '—',
    title: 'Bachelor of Business Administration (Management)',
    org: 'Rajamangala University of Technology Lanna',
    desc: '',
  },
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="bg-[#151515] py-24 px-6">
      <div
        ref={ref}
        className={[
          'max-w-6xl mx-auto transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ].join(' ')}
      >
        <p className="text-[#00b47a] font-medium text-sm tracking-widest uppercase mb-2">
          Who am I?
        </p>
        <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4">
              Career changer with 2+ years in purchasing and operations, now focused on software
              development. I bring a habit of thinking in systems and fixing broken processes —
              skills that translate well into writing clean, reliable code.
            </p>
            <p className="text-[#aaaaaa] leading-relaxed mb-8">
              Proficient in JavaScript, TypeScript, SQL, Node.js, Express.js, and Next.js.
              Currently completing the JSD-12 Full-Stack JavaScript Development program at
              Generation Thailand, where I&apos;ve been building real applications from scratch.
            </p>
            <Button
              variant="outline"
              className="rounded-sm gap-2 border-[#00b47a] text-[#00b47a] hover:bg-[#00b47a] hover:text-white"
              asChild
            >
              <a href={cvFile} download="Thirawat_Rojanakul_CV.pdf">
                <Download size={15} />
                Download CV
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {INFO_ITEMS.map(({ label, value, sub }) => (
              <div
                key={label}
                className="bg-[#252525] border border-[#3a3a3a] rounded-sm p-5"
              >
                <p className="text-[#888] text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className="text-white font-display font-bold text-xl leading-tight">{value}</p>
                <p className="text-[#aaaaaa] text-sm">{sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-[#3a3a3a] pt-12">
          <h3 className="text-white font-display font-bold text-2xl mb-8">
            Experience & Education
          </h3>
          <div className="space-y-8">
            {EXPERIENCE.map(({ period, title, org, desc }) => (
              <div key={title} className="flex gap-6">
                <div className="flex-shrink-0 text-[#00b47a] font-mono text-sm w-20 pt-0.5">
                  {period}
                </div>
                <div className="border-l border-[#3a3a3a] pl-6">
                  <p className="text-white font-medium">{title}</p>
                  <p className="text-[#00b47a] text-sm mb-1">{org}</p>
                  {desc !== '' && <p className="text-[#aaaaaa] text-sm">{desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
