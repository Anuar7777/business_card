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
  smallText: string;
  bigText?: string[];
  tech: string[];
  name: string;
  imgs?: { src: string }[];
  openSpan?: string;
  heroImg: string;
  live?: string;
  github?: string;
}

export interface IStack {
  title: string;
  items: string[];
}

export interface ISlideMaskReveal {
  children: ReactNode;
  width?: string;
  overflow?: "hidden" | "visible" | "scroll" | "auto";
  zIndex?: number;
}
