"use client";

import Editor from "./editor";
import Terminal from "./terminal";

export default function Demo() {
  return (
    <section
      id="demo"
      className="h-screen w-full overflow-hidden mx-auto px-3 max-w-6xl scroll-mt-20"
    >
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-10">
        Try Selium
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Editor />
        </div>
        <div>
          <Terminal value="selium build" />
        </div>
        <div className="col-span-2">
          <Terminal value="selium tail sel://selium.com/demo/<your_proj>/.log:debug" />
        </div>
      </div>
    </section>
  );
}
