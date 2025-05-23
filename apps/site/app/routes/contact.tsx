import type { Route } from "./+types/home";
import { Contact } from "../contact/contact";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "contact" },
    { name: "Contact Rishi", content: "Get Rishi's contact info" },
  ];
}

export default function Home() {
  return <Contact />;
}
