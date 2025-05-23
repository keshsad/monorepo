import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Intern" },
    { name: "Intern Name", content: "Intern Content" },
  ];
}

export default function Intern() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          Intern
        </h2>
        <p className="mt-6 leading-7">
          Details about my work as an intern.
        </p>
      </div>
    </main>
  );
}
