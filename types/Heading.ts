export interface Heading {
    id: string;
    text: string;
    level: number;
    offsetRem: number;
    label: string;
    current: boolean;
    tag?: string;
    anchor?: boolean
    registerHeading: (heading: Heading) => void;
}

export interface Anchor {
    id: string;
    inView: boolean;
    children: React.ReactNode;
}

export interface Eyebrow {
    tag: string;
    label: string;
}

export interface AnchorIcon {
    className: string;
}