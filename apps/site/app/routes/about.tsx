import type { Route } from "./+types/home";
import { About } from "../about/about";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "about" },
    { name: "About Rishi", content: "Read Rishi's About" },
  ];
}

export default function Home() {
  return <About />;
}
