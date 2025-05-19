export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="p-2">
            Personal site coming soon. Links:
          </div>
          <div className="p-2">
            <p><a className="hover:underline" href="https://twitter.com/keshsad">Read updates on Twitter.</a></p>
          </div>
          <div className="p-2">
            <p><a className="hover:underline" href="https://github.com/keshsad">Command-line code editor config on GitHub.</a></p>
          </div>
          <div className="p-2">
            <p><a className="hover:underline" href="https://www.linkedin.com/in/rishikesh-sadanandan/">Startup experience on LinkedIn.</a></p>
          </div>
          <div className="flex flex-col p-4 gap-2">
          </div>
        </header>
      </div>
    </main>
  );
}
