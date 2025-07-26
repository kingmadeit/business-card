import type { IconType } from 'react-icons';


export interface IBusinessCard {
    bio: IBio;
    qrcodeUrl: string;
    typingText: string[],
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