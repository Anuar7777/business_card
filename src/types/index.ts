export interface IJob {
  companyName: string;
  position: string;
  location: string;
  date: string;
  text: string;
  tech: string[];
  link?: string;
}

export interface IProject {
  live: string;
  github: string;
  bigText: string;
  smallText: string;
  tech: string[];
  imgs: string;
  name: string;
  modalHandler: ModalHandler;
  openSpan: string;
  heroImg: string;
}

export interface IStack {
  title: string;
  items: string[];
}

export type ModalHandler = (value: boolean) => void;
