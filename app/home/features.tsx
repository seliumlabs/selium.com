import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ScaleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Channels only I/O.",
    description: "All communication flows through typed channels, inside and outside Selium.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Capability-first access.",
    description: "Explicit grants, no ambient authority. Handles are guarded by design.",
    icon: LockClosedIcon,
  },
  {
    name: "Determinism by default.",
    description: "If it runs once, it runs consistently. No hidden state, no magic.",
    icon: ArrowPathIcon,
  },
  {
    name: "Code is the source of truth.",
    description: "Your application describes the build, the wiring, and the runtime posture.",
    icon: FingerPrintIcon,
  },
  {
    name: "Simply scalable.",
    description: "Scale functions, not servers. Opt-in elastic scaling with clear controls.",
    icon: ScaleIcon,
  },
  {
    name: "Messaging, not networking.",
    description: "Uniform messaging APIs across HTTP, QUIC, TCP, UDP, and more.",
    icon: EnvelopeIcon,
  },
];

export default function Features() {
  return (
    <section id="capabilities" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-teal-400">Core capabilities</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance text-white">
            Built for stream-native systems
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Selium keeps the platform out of the way. Focus on service logic while the fabric
            handles orchestration, messaging, and safety.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-white">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-teal-500">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
