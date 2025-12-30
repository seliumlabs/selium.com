import {
  ArrowTrendingUpIcon,
  Square3Stack3DIcon,
  StopCircleIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Defence in depth.",
    description:
      "Capability-driven deny-by-default with zero ambient authority. Full service isolation, even within one app.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Scalability built in.",
    description: "From first service to thousands, no re-architecture required.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Predictable by default.",
    description: "Selium does what you ask it to, every time. No side effects and no magic.",
    icon: StopCircleIcon,
  },
  {
    name: "Observable from day one.",
    description: "Logs, metrics, and traces are first-class, not afterthoughts.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Team and growth friendly.",
    description: "A single model from solo projects to large organisations.",
    icon: UsersIcon,
  },
  {
    name: "Fast onboarding.",
    description: "Your application is self-describing. It is just code, so it is learnable.",
    icon: ArrowTrendingUpIcon,
  },
];

export default function Design() {
  return (
    <section id="security" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-pink-400">Security by design</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Safe, predictable, and built to last
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Selium is engineered for safety, predictability, and reliability. Capabilities define
            what each service may do, and the runtime enforces those rules on every call.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16 text-gray-400">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  aria-hidden="true"
                  className="absolute top-1 left-1 size-5 text-pink-500"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
