import type { IContactLink } from "../types/type";

const ContactLinks = ({links}: {links: IContactLink[] | undefined}) => {

  if (!links) return null;

  return (
    <div className="flex space-x-4 justify-center items-center text-white/60 text-2xl">
      {links.map(({id, href, icon, iconHoverClass}) => {
        
        const Icon = icon;

        return (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className={iconHoverClass} />
          </a>
        )
      })}
    </div>

  )
}

export default ContactLinks