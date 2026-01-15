import {
  BoltIcon,
  ChartBarIcon,
  ArrowsRightLeftIcon,
  CpuChipIcon,
} from "@heroicons/react/20/solid";

const useCases = [
  {
    name: "Realtime pipelines",
    description:
      "Stream events through typed services with predictable latency and explicit contracts.",
    icon: BoltIcon,
    placeholder: "Add a real workload or benchmark here.",
  },
  {
    name: "Service mesh without the mesh",
    description: "Replace brittle network glue with channel-native messaging between services.",
    icon: ArrowsRightLeftIcon,
    placeholder: "Add a public example or reference architecture.",
  },
  {
    name: "Product analytics",
    description: "Process large data streams with backpressure and strict payload schemas.",
    icon: ChartBarIcon,
    placeholder: "Add a customer story or internal use case.",
  },
  {
    name: "Composable runtimes",
    description: "Embed orchestration into your app and scale function-level services on demand.",
    icon: CpuChipIcon,
    placeholder: "Confirm the best phrasing for this use case.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="flex h-screen snap-center">
      <div className="my-auto mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-indigo-300">Use cases</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Where Selium shines
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Selium is a flexible fabric for typed, channel-native workloads. These are the first use
            cases we should highlight.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_40px_rgba(15,23,42,0.45)]"
            >
              <div className="flex items-center gap-3 text-white">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold">{item.name}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              <p className="mt-4 text-xs text-amber-300">TBC: {item.placeholder}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
