import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Work" },
    { name: "Work Name", content: "Work Content" },
  ];
}

export default function WorkIndex() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          Work
        </h2>
        <p className="mt-6 leading-7">
          This is a <i>work-in-progress</i> list of write-ups. Each is about a project or experience I've had.
        </p>
        <p className="mt-6 leading-7"><b>Current</b></p>
        <ul className="mt-4 ml-6 list-disc">
          <li className="mt-2 ml-2">
            <Link to="infra" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Infrastructure Philosophy</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="journal" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Journal App</Link>
          </li>
        </ul>
        <p className="mt-6 leading-7"><b>Previous</b></p>
        <ul className="mt-4 ml-6 list-disc">
          <li className="mt-2 ml-2">
            <Link to="poetic" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Co-founder of Poetic</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="founder" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">iVenture Student-Founder</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="fellow" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">iVenture Fellow</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="intern" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Intern at AvidXchange</Link>
          </li>
        </ul>
        <p className="mt-6 leading-7">In an effort to cultivate my skills, I've written about problems to solve for my family.</p>
        <ul className="mt-4 ml-6 list-disc">
          <li className="mt-2 ml-2">
            <Link to="college" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">College Essays</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="job" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Job Manager</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="os" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Personal Assistant</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="music" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Music App</Link>
          </li>
        </ul>
      </div>
    </main >
  );
}
