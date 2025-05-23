import type { Route } from "./+types/home";
import { Work } from "../work/work";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "work" },
    { name: "Rishi's Work", content: "Read Rishi's work" },
  ];
}

export default function Home() {
  return <Work />;
}

