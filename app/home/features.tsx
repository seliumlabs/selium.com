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
    name: "No legacy baggage.",
    description: "Forget VMs, containers, and config files.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Stay in flow.",
    description: "Never leave your IDE.",
    icon: LockClosedIcon,
  },
  {
    name: "Determinism by default.",
    description: "If it runs one, it runs every time, everywhere.",
    icon: ArrowPathIcon,
  },
  {
    name: "Full ownership.",
    description:
      "Build, test, deploy, and manage without hidden layers or unnecessary complications.",
    icon: FingerPrintIcon,
  },
  {
    name: "Simply scalable.",
    description:
      "Replicas and sharding without the drama. Allow Selium to distribute your application's services intelligently and automatically.",
    icon: ScaleIcon,
  },
  {
    name: "Messaging, not networking.",
    description:
      "Trivially connect services and communicate with the outside world using Selium's extensible messaging layer.",
    icon: EnvelopeIcon,
  },
];

export default function Features() {
  return (
    <section className="h-screen flex">
      <div className="mx-auto my-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base/7 font-semibold text-teal-500">
            Secure, scalable and feature rich
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance text-white">
            Designed for the modern world
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            This is the developer-driven experience you always knew was possible.
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
