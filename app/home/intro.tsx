import {
  CodeBracketIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const steps = [
  {
    name: "Write a service.",
    description:
      "Rust functions become services with #[entrypoint]. Define typed payloads with Flatbuffers.",
    icon: CodeBracketIcon,
  },
  {
    name: "Build to WASM.",
    description: "Compile to wasm32-unknown-unknown and ship a single, portable module.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Run and orchestrate.",
    description: "Use selium-runtime and selium-cli to launch, scale, and attach to logs.",
    icon: LockClosedIcon,
  },
  {
    name: "Stay in your IDE.",
    description: "No YAML, no services to babysit. Your code describes the deployment posture.",
    icon: ServerIcon,
  },
];

export default function Intro() {
  return (
    <section id="how" className="relative py-24 sm:py-32 overflow-clip">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-blue-400">How Selium works</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
                Cloud as a library
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                Selium brings cloud primitives into your application code. Your services are
                functions, your network is channels, and your deployment posture is part of the
                codebase.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none text-gray-400">
                {steps.map((step) => (
                  <div key={step.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <step.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-500"
                      />
                      {step.name}
                    </dt>{" "}
                    <dd className="inline">{step.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="/images/ide_screen.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-2xl shadow-2xl ring-1 sm:w-228 md:-ml-4 lg:ml-0 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
