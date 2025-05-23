import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          Welcome
        </h2>
        <p className="mt-6 leading-7">
          You're at the home page of Rishi's personal site. Although in-progress, the following links are available:
        </p>
        <ul className="mt-4 ml-6 list-disc">
          <li className="mt-2 ml-2">
            <Link to="about" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">About</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="work" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Work</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="writing" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Writing</Link>
          </li>
          <li className="mt-2 ml-2">
            <Link to="contact" className="text-[#57949F] dark:text-[#9CCFD8] hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
