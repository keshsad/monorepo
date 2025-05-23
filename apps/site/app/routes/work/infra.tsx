import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Infra" },
    { name: "Infra Name", content: "Infra Content" },
  ];
}

export default function Infra() {
  return (
    <main className="h-full max-w-sm mx-auto p-10 md:max-w-md">
      <div className="flex-row h-full w-full">
        <h2
          className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors dark:border-[#312F3B]"
        >
          Infra
        </h2>
        <p className="mt-6 leading-7">
          Details about the infrastructure philosophy.
        </p>
      </div>
    </main>
  );
}
