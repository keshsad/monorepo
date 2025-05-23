import type { Route } from "./+types/home";
import { Writing } from "../writing/writing";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "writing" },
    { name: "Rishi's Writing", content: "Read Rishi's writing" },
  ];
}

export default function Home() {
  return <Writing />;
}
