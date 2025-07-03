import type { ReactNode } from "react";

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

export interface ISlideMaskReveal {
  children: ReactNode;
  width?: string;
  overflow?: "hidden" | "visible" | "scroll" | "auto";
}

export type ModalHandler = (value: boolean) => void;
