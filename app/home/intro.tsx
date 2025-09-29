import {
  CodeBracketIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Code not infrastructure.",
    description:
      "Software development concepts and idioms only. No containers, volumes, subnets, or other guff.",
    icon: CodeBracketIcon,
  },
  {
    name: "Declaration over provisioning.",
    description:
      "A declarative API that informs Selium about what your application is, and what it needs.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Services are functions, not servers.",
    description:
      "Selium's core compute unit is the function. Your functions can be long or short lived, and hold state.",
    icon: LockClosedIcon,
  },
  {
    name: "Never leave your code.",
    description:
      "Your code embodies all the artefacts that Selium needs to build and scale your application. Goodbye YAML!",
    icon: ServerIcon,
  },
];

export default function Intro() {
  return (
    <section id="intro" className="h-screen flex snap-center overflow-clip">
      <div className="mx-auto my-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-blue-500">Developers in charge</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
                Cloud as a Library
              </h2>
              <p className="mt-6 text-lg/8 text-gray-300">
                The cloud shouldn't feel like infrastructure; it shouldn't really be noticable at
                all. That's why Selium blends into the background.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
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
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 sm:w-228 md:-ml-4 lg:-ml-0 ring-white/10"
          />
        </div>
      </div>
    </section>
  );
}
