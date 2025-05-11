import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "site.keshsad.com" },
    { name: "Rishi's personal site", content: "Welcome to Rishi's personal site!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
