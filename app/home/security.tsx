import {
  ArrowTrendingUpIcon,
  Square3Stack3DIcon,
  StopCircleIcon,
  MagnifyingGlassIcon,
  UsersIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";
import { Heading } from "../page";

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

export default function Security() {
  return (
    <section id="security" className="flex mt-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Heading
          colour="pink"
          tag="Secure by design"
          heading="Safe, predictable, and built to last"
          blurb="Selium is engineered for safety, predictability, and reliability. Isolation by default with opt-in connectivity and strong typing throughout to eliminate foot-guns."
        />

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
