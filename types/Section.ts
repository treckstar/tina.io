import { Heading } from './Heading';


export interface Section {
    title: string;
    id: string;
    headingRef?: React.RefObject<HTMLElement>;
    offsetRem?: number;
}

export interface Sections {
    sections: Section[];
}

export interface SectionProps {
    sections: Sections;
}

export interface SectionState {
    visibleSections: Sections;
    setVisibleSections: (visibleSections: Sections) => void;
    registerHeading: (heading: Heading) => void;
}