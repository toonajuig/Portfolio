import {
  Code2,
  Globe,
  Layers,
  Wind,
  Server,
  Database,
  GitBranch,
  Box,
  Shield,
  Bot,
  Brain,
  Users,
  Zap,
} from 'lucide-react'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const TECHNICAL_SKILLS = [
  { icon: Code2, name: 'JavaScript & TypeScript', desc: 'ES6+, async/await, type safety' },
  { icon: Globe, name: 'HTML5 & CSS3', desc: 'Semantic markup, responsive design' },
  { icon: Layers, name: 'React & Next.js', desc: 'SPA, SSR, App Router, hooks' },
  { icon: Wind, name: 'Tailwind CSS', desc: 'Utility-first, component styling' },
  { icon: Server, name: 'Node.js & Express.js', desc: 'REST API, middleware, JWT auth' },
  { icon: Database, name: 'PostgreSQL & MongoDB', desc: 'Schema design, queries, indexes' },
  { icon: GitBranch, name: 'Git & GitHub', desc: 'Version control, branching, PRs' },
  { icon: Box, name: 'Docker', desc: 'Containerization, Compose' },
  { icon: Shield, name: 'REST API & JWT Auth', desc: 'Stateless auth, API design' },
]

const WORKFLOW_SKILLS = [
  { icon: Bot, name: 'Claude Code & AI Tools', desc: 'AI-assisted development, prompt engineering' },
  { icon: Brain, name: 'Obsidian (PKM)', desc: 'Second brain, knowledge management' },
  { icon: Users, name: 'Agile / Scrum', desc: 'Scrum Master, sprint planning' },
  { icon: Zap, name: 'Vite', desc: 'Fast bundler, dev server, HMR' },
]

function SkillCard({ icon: Icon, name, desc }) {
  return (
    <div className="bg-[#252525] border border-[#3a3a3a] rounded-sm p-5 hover:border-[#00b47a]/40 transition-colors">
      <Icon size={22} className="text-[#00b47a] mb-3" aria-hidden="true" />
      <p className="text-white font-medium text-sm mb-1">{name}</p>
      <p className="text-[#888] text-xs">{desc}</p>
    </div>
  )
}

function SectionDivider({ label }) {
  return (
    <h3 className="text-[#888] text-xs uppercase tracking-widest mb-6 flex items-center gap-3">
      <span>{label}</span>
      <span className="flex-1 h-px bg-[#3a3a3a]" aria-hidden="true" />
    </h3>
  )
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="bg-[#1e1e1e] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white uppercase"
          style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', opacity: 0.03, letterSpacing: '0.15em' }}
        >
          SKILLS
        </span>
      </div>

      <div
        ref={ref}
        className={[
          'relative max-w-6xl mx-auto transition-all duration-700 ease-out',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        ].join(' ')}
      >
        <p className="text-[#00b47a] font-medium text-sm tracking-widest uppercase mb-2">
          What I know
        </p>
        <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-14">
          Skills
        </h2>

        <div className="mb-12">
          <SectionDivider label="Technical Skills" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {TECHNICAL_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        <div>
          <SectionDivider label="Tools & Workflow" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {WORKFLOW_SKILLS.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
