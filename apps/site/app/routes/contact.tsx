import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "contact" },
    { name: "Contact Name", content: "Contact Content" },
  ];
}

export default function Contact() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          Contact
        </h2>
        <p className="mt-6 leading-7">
          This is a <i>work-in-progress</i> form. Check my <Link to="https://rishi.keshsad.com" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">professional site</Link> for my email and socials.
        </p>
      </div>
    </main>
  );
}
