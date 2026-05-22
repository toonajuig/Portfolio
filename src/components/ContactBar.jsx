import { Mail, Phone, MapPin } from 'lucide-react'

const CONTACTS = [
  { icon: Mail, text: 'thirawat.devtt@gmail.com', href: 'mailto:thirawat.devtt@gmail.com' },
  { icon: Phone, text: '066-109-5455', href: 'tel:+66661095455' },
  { icon: MapPin, text: 'Thailand', href: null },
]

export default function ContactBar() {
  return (
    <div className="bg-[#252525] border-y border-[#3a3a3a]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center md:justify-start items-center gap-y-3">
        {CONTACTS.map(({ icon: Icon, text, href }, i) => (
          <div key={text} className="flex items-center">
            {i > 0 && (
              <div className="hidden md:block w-px h-4 bg-[#3a3a3a] mx-6" aria-hidden="true" />
            )}
            {i > 0 && <div className="md:hidden w-6" aria-hidden="true" />}
            {href !== null ? (
              <a
                href={href}
                className="flex items-center gap-2 text-[#aaaaaa] hover:text-[#00b47a] transition-colors text-sm"
              >
                <Icon size={14} className="text-[#00b47a] shrink-0" />
                {text}
              </a>
            ) : (
              <span className="flex items-center gap-2 text-[#aaaaaa] text-sm">
                <Icon size={14} className="text-[#00b47a] shrink-0" />
                {text}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
