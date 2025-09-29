import {
  ArrowTrendingUpIcon,
  Square3Stack3DIcon,
  StopCircleIcon,
  MagnifyingGlassIcon,
  FingerPrintIcon,
  UsersIcon,
  LightBulbIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Defence-in-depth.",
    description:
      "Capability-driven deny-by-default with zero ambient authority. Full service isolation, even within the same application.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Scalability built-in.",
    description: "From first service, to thousands, no re-architecture required.",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Boringly predictable.",
    description: "Selium does what you ask it to; every time. No side effects and no magic.",
    icon: StopCircleIcon,
  },
  {
    name: "Extremely observable.",
    description: "Logs, metrics, and traces are first-class, not afterthoughts.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Team & growth friendly.",
    description:
      "A single, consistent model from solo projects all the way to the largest enterprise.",
    icon: UsersIcon,
  },
  {
    name: "Super fast onboarding.",
    description:
      "Selium makes your applications self-describing. And because it's all just code, what's there to know?",
    icon: ArrowTrendingUpIcon,
  },
];

export default function Design() {
  return (
    <section id="design" className="h-screen flex snap-center">
      <div className="mx-auto my-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base/7 font-semibold text-pink-500">
            Enterprise scale with industrial robustness
          </p>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
            Built for any challenge
          </h2>
          <p className="mt-6 text-lg/8 text-gray-300">
            Selium is built from the ground up for security and speed. It isn't just easier to use -
            it's engineered for safety, predictability, and reliability.
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
