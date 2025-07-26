import type { IconType } from 'react-icons';
import type { TypewriterSequence } from '../components/kokonut-ui/TypewriterLoop';


export interface IBusinessCard {
    bio: IBio;
    qrcodeUrl: string;
    typingText: TypewriterSequence[],
}

export interface IBio {
    name: string;
    position: string;
    description?: string;
    contactLinks?: IContactLink[];
}

export interface IContactLink {
    id: string,
    name: string,
    href: string,
    icon: IconType,
    iconHoverClass: string
}