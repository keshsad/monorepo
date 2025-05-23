import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "About Name", content: "About Content" },
  ];
}

export default function About() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          About
        </h2>
        <p className="mt-6 leading-7">
          Check out my <Link to="https://rishi.keshsad.com" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">professional site</Link> for a quick read.
        </p>
        <p className="mt-6 leading-7">
          This page is a <i>work-in-progress</i> whitepaper. Read this for a comprehensive understanding about me.
        </p>
      </div>
    </main>
  );
}
