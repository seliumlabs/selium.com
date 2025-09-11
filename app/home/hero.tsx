export default function Hero() {
  return (
    <section className="h-screen w-full grid place-items-center">
      <div className="mt-20 mx-auto max-w-4xl px-6 text-center">
        <div className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight flex text-white">
          Selium<span className="animate-pulse-logo-text">.</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight flex items-center justify-center">
          <span className="absolute mx-auto py-4 w-fit box-content select-none text-white/70">
            the_cloud{" "}
            <span className="bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent">
              {/*&lt;reimagined /&gt;*/}
              &#123; reimagined &#125;
            </span>
          </span>
          <span className="relative top-0 py-4 justify-center text-transparent select-auto">
            the_cloud{" "}
            <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text">
              {/*&lt;reimagined /&gt;*/}
              &#123; reimagined &#125;
            </span>
          </span>
        </h1>
        <p className="mt-5 text-balance text-white/70 text-base sm:text-lg">
          A software-defined stream‑native cloud that's brand new, yet completely familiar.
        </p>
        <div className="pointer-events-auto mt-20 flex items-center justify-center gap-3 text-6xl font-extralight">
          <a
            href="#demo"
            className="rounded-md border-white border-1 bg-white px-3.5 py-2.5 text-sm font-semibold text-black hover:text-white hover:bg-blue-500 hover:border-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Try online{" "}
            <span aria-hidden="true" className="">
              ↓
            </span>
          </a>
          <a
            href="#intro"
            className="rounded-md border-white border-1 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 hover:border-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
