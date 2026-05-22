import { useState, useEffect } from 'react'
import { MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 80)
      setIsScrolled(currentScrollY > 50)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    let observer

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id)
          })
        },
        { rootMargin: '-40% 0px -40% 0px' }
      )

      NAV_LINKS.forEach(({ href }) => {
        const el = document.querySelector(href)
        if (el) observer.observe(el)
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])

  function handleNavClick() {
    setIsOpen(false)
  }

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isVisible ? 'translate-y-0' : '-translate-y-full',
        isScrolled
          ? 'bg-[#1e1e1e]/80 backdrop-blur-md border-b border-[#3a3a3a]/50'
          : 'bg-[#1e1e1e]',
      ].join(' ')}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-display font-extrabold text-xl text-white tracking-tight"
        >
          TT<span className="text-[#00b47a]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={[
                'text-sm transition-colors relative group py-1',
                activeSection === href.slice(1)
                  ? 'text-[#00b47a]'
                  : 'text-[#aaaaaa] hover:text-white',
              ].join(' ')}
            >
              {label}
              <span
                className={[
                  'absolute bottom-0 left-0 h-px bg-[#00b47a] transition-all duration-300',
                  activeSection === href.slice(1)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full',
                ].join(' ')}
              />
            </a>
          ))}
          <Button size="sm" className="rounded-sm px-4" asChild>
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#aaaaaa] hover:text-white"
            >
              <MenuIcon size={20} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-10 px-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className={[
                    'text-base font-medium transition-colors',
                    activeSection === href.slice(1)
                      ? 'text-[#00b47a]'
                      : 'text-[#aaaaaa] hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </a>
              ))}
              <Button className="rounded-sm mt-2" asChild>
                <a href="#contact" onClick={handleNavClick}>
                  Hire Me
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
