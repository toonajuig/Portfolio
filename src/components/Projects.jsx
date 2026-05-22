import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/Icons'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import runningEcommerceImg from '@/assets/running ecommerce.webp'
import goSenseiLabImg from '@/assets/go-sensei-lab.webp'
import juicyHealthyImg from '@/assets/JuicyHealthy.webp'

const PROJECTS = [
  {
    title: 'Running E-commerce Web App',
    description:
      'Full-stack e-commerce platform with JWT authentication, Admin/User role management, product listings, cart, and order management. Containerized with Docker Compose.',
    tech: ['TypeScript', 'Next.js 15', 'Express.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/toonajuig/Running-Ecommerce',
    demo: null,
    image: runningEcommerceImg,
    featured: true,
  },
  {
    title: 'E-commerce Web App',
    description:
      'React-based e-commerce app with shopping cart, product listing, out-of-stock logic, and dynamic price calculation.',
    tech: ['JavaScript', 'React'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Database Design',
    description:
      'Relational schema design for an e-commerce system with PostgreSQL. Includes normalized tables, complex queries, and MongoDB comparison.',
    tech: ['PostgreSQL', 'MongoDB'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    title: 'Go Sensei Lab',
    description:
      'A 9x9 Go board game prototype with AI opponents. Features a local browser-based engine and optional KataGo integration for advanced move analysis.',
    tech: ['JavaScript', 'Node.js', 'Python', 'Docker'],
    github: 'https://github.com/toonajuig/Go_Project_One',
    demo: null,
    image: goSenseiLabImg,
    featured: false,
  },
  {
    title: 'Juicy Healthy E-commerce',
    description:
      'Group project (5 members). Served as Scrum Master. Migrated from plain HTML/CSS to React + Tailwind. Managed sprint planning and backlog.',
    tech: ['React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/toonajuig/group5-ecommerce-sprint2',
    demo: null,
    image: juicyHealthyImg,
    featured: false,
    isGroup: true,
  },
]

function ProjectCard({ title, description, tech, github, demo, featured, isGroup, image }) {
  return (
    <Card
      className={[
        'bg-[#252525] border-[#3a3a3a] rounded-sm flex flex-col overflow-hidden',
        'transition-all duration-300 hover:-translate-y-1 hover:border-[#00b47a]/40',
        featured ? 'md:col-span-2' : '',
      ].join(' ')}
    >
      {image !== undefined && image !== null ? (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            width={800}
            height={450}
          />
        </div>
      ) : null}
      <CardContent className="flex-1 p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-display font-bold text-lg leading-tight">{title}</h3>
            {isGroup === true ? (
              <span className="text-[#00b47a] text-xs">Group Project</span>
            ) : null}
          </div>
          {featured ? (
            <Badge className="bg-[#00b47a]/10 text-[#00b47a] border border-[#00b47a]/30 text-xs rounded-sm shrink-0 ml-3">
              Featured
            </Badge>
          ) : null}
        </div>
        <p className="text-[#aaaaaa] text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="border-[#3a3a3a] text-[#888] text-xs rounded-sm"
            >
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex gap-3">
        {github !== null ? (
          <Button
            size="sm"
            variant="outline"
            className="rounded-sm gap-1.5"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={13} />
              GitHub
            </a>
          </Button>
        ) : null}
        {demo !== null ? (
          <Button size="sm" className="rounded-sm gap-1.5" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={13} />
              Live Demo
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  )
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="projects" className="bg-[#151515] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-black text-white uppercase"
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)', opacity: 0.03, letterSpacing: '0.1em' }}
        >
          PROJECTS
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
          What I&apos;ve built
        </p>
        <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
