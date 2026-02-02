import { Heading } from "../page";

const steps = [
  {
    id: "1",
    tag: "The hypervisor",
    title: "A single pane of glass",
    body: "Selium is a single runtime and network abstraction for your underlying infrastructure, whether physical or virtual. Our client library and/or CLI are all you need to deploy, run and scale your applications across the largest data centres, while remaining light enough to run quietly on your dev machine.",
    image: (
      <svg
        role="img"
        aria-label="Grid of app tiles in a landscape container"
        viewBox="0 0 400 300"
        className="h-full w-full"
      >
        <defs>
          <filter id="sparkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="50"
          y="50"
          width="300"
          height="200"
          rx="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <g
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="6 7 2 7"
        >
          <path d="M136 84 H156 V118 H200 V128" />
          <path d="M264 84 H244 V152 H224" />
          <path d="M112 176 V186 H156 V220 H176" />
          <path d="M176 84 H156 V152 H136" />
          <path d="M224 220 H244 V190 H288 V176" />
        </g>
        <g
          stroke="var(--color-teal-500)"
          strokeWidth="4"
          fill="none"
          opacity="0.35"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="6 7 2 7"
          filter="url(#sparkGlow)"
        >
          <path d="M136 84 H156 V118 H200 V128" />
          <path d="M264 84 H244 V152 H224" />
          <path d="M112 176 V186 H156 V220 H176" />
          <path d="M176 84 H156 V152 H136" />
          <path d="M224 220 H244 V190 H288 V176" />
        </g>
        <g
          stroke="var(--color-teal-500)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.9"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeDasharray="6 7 2 7"
        >
          <path d="M136 84 H156 V118 H200 V128" />
          <path d="M264 84 H244 V152 H224" />
          <path d="M112 176 V186 H156 V220 H176" />
          <path d="M176 84 H156 V152 H136" />
          <path d="M224 220 H244 V190 H288 V176" />
        </g>
        <rect x="88" y="60" width="48" height="48" rx="10" fill="currentColor" opacity="0.12" />
        <rect x="176" y="60" width="48" height="48" rx="10" fill="currentColor" opacity="0.1" />
        <rect x="264" y="60" width="48" height="48" rx="10" fill="currentColor" opacity="0.14" />
        <rect x="88" y="128" width="48" height="48" rx="10" fill="currentColor" opacity="0.1" />
        <rect x="176" y="128" width="48" height="48" rx="10" fill="currentColor" opacity="0.14" />
        <rect x="264" y="128" width="48" height="48" rx="10" fill="currentColor" opacity="0.12" />
        <rect x="88" y="196" width="48" height="48" rx="10" fill="currentColor" opacity="0.14" />
        <rect x="176" y="196" width="48" height="48" rx="10" fill="currentColor" opacity="0.12" />
        <rect x="264" y="196" width="48" height="48" rx="10" fill="currentColor" opacity="0.1" />
      </svg>
    ),
  },
  {
    id: "2",
    tag: "Applications",
    title: "Build monolithically. Scale granularly.",
    body: "Every application can elect one or more runnable services, like entry points or `main` functions. These services share a common binary, so have access to the same dependencies, data types, functions, and whatever else your application code contains. Thus you have the luxury of coding monolithically, yet scaling granularly. Services only require a single annotation to define, and can even define arbitrary function signatures to receive runtime data from the CLI or client library at launch.",
    image: (
      <svg
        role="img"
        aria-label="A monolith splitting into smaller scalable services"
        viewBox="0 0 400 300"
        className="h-full w-full"
      >
        <defs>
          <marker
            id="arrowHeadFanout"
            markerUnits="userSpaceOnUse"
            markerWidth="8"
            markerHeight="8"
            refX="0"
            refY="4"
            orient="auto"
          >
            <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
          </marker>
          <filter id="sparkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="48"
          y="64"
          width="150"
          height="172"
          rx="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect x="72" y="94" width="102" height="20" rx="6" fill="currentColor" opacity="0.12" />
        <rect x="72" y="128" width="102" height="20" rx="6" fill="currentColor" opacity="0.12" />
        <rect x="72" y="162" width="102" height="20" rx="6" fill="currentColor" opacity="0.12" />
        <rect x="72" y="196" width="102" height="20" rx="6" fill="currentColor" opacity="0.12" />
        <path
          d="M206 150 C236 150 254 118 264 98"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#arrowHeadFanout)"
        />
        <path
          d="M206 150 C236 150 254 150 264 150"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#arrowHeadFanout)"
        />
        <path
          d="M206 150 C236 150 254 182 264 202"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          markerEnd="url(#arrowHeadFanout)"
        />
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <g stroke="currentColor" strokeWidth="2" opacity="0.2">
            <path d="M272 95 L278 92 L284 98 L290 90 L296 100 L302 93 L308 101 L314 91 L320 99 L326 94 L332 102 L338 90 L344 97 L350 93 L356 99 L362 92 L368 95" />
            <path d="M272 155 L278 154 L284 156 L290 155 L296 154 L302 155 L308 156 L314 154 L320 155 L326 157 L332 160 L338 154 L344 155 L350 156 L356 154 L362 155 L368 155" />
            <path d="M272 215 L278 215 L284 216 L290 204 L296 222 L302 207 L308 221 L314 214 L320 214 L326 215 L332 203 L338 222 L344 208 L350 221 L356 215 L362 214 L368 215" />
          </g>
          <g stroke="var(--color-pink-500)" strokeWidth="4" opacity="0.3" filter="url(#sparkGlow)">
            <path d="M272 95 L278 92 L284 98 L290 90 L296 100 L302 93 L308 101 L314 91 L320 99 L326 94 L332 102 L338 90 L344 97 L350 93 L356 99 L362 92 L368 95" />
            <path d="M272 155 L278 154 L284 156 L290 155 L296 154 L302 155 L308 156 L314 154 L320 155 L326 157 L332 160 L338 154 L344 155 L350 156 L356 154 L362 155 L368 155" />
            <path d="M272 215 L278 215 L284 216 L290 204 L296 222 L302 207 L308 221 L314 214 L320 214 L326 215 L332 203 L338 222 L344 208 L350 221 L356 215 L362 214 L368 215" />
          </g>
          <g stroke="var(--color-pink-500)" strokeWidth="1.5" opacity="0.9">
            <path d="M272 95 L278 92 L284 98 L290 90 L296 100 L302 93 L308 101 L314 91 L320 99 L326 94 L332 102 L338 90 L344 97 L350 93 L356 99 L362 92 L368 95" />
            <path d="M272 155 L278 154 L284 156 L290 155 L296 154 L302 155 L308 156 L314 154 L320 155 L326 157 L332 160 L338 154 L344 155 L350 156 L356 154 L362 155 L368 155" />
            <path d="M272 215 L278 215 L284 216 L290 204 L296 222 L302 207 L308 221 L314 214 L320 214 L326 215 L332 203 L338 222 L344 208 L350 221 L356 215 L362 214 L368 215" />
          </g>
        </g>
        <rect
          x="272"
          y="70"
          width="96"
          height="50"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="272"
          y="130"
          width="96"
          height="50"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <rect
          x="272"
          y="190"
          width="96"
          height="50"
          rx="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "3",
    tag: "Network",
    title: "Messages, not packets",
    body: "Selium's network stack is based on composable messaging principles. Whether you're blasting out byte streams, deploying RPC servers, fanning out workloads, discovering services, isolating private segments, or just plain-old pub/sub, you're always using our dev-friendly I/O library. And when you need to talk to the outside world, we provide ergonomic TCP and UDP-based protocol bindings (e.g. QUIC, HTTP/S etc.) that seamlessly integrate with our core I/O.",
    image: (
      <svg
        role="img"
        aria-label="Messaging nodes exchanging structured payloads"
        viewBox="0 0 400 300"
        className="h-full w-full"
      >
        <defs>
          <mask id="messageLineMask" maskUnits="userSpaceOnUse">
            <rect x="0" y="0" width="400" height="300" fill="white" />
            <rect x="181" y="49" width="38" height="24" rx="6" fill="black" />
            <rect x="134" y="152" width="38" height="24" rx="6" fill="black" />
            <rect x="228" y="152" width="38" height="24" rx="6" fill="black" />
          </mask>
          <filter id="chevronGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
            </feMerge>
          </filter>
        </defs>
        <circle cx="92" cy="92" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="308" cy="92" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="220" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
        <g mask="url(#messageLineMask)">
          <path
            d="M120 92 Q200 30 280 92"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M110 113 Q160 172 182 199"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
          <path
            d="M290 113 Q240 172 218 199"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.6"
          />
        </g>
        <rect
          x="184"
          y="52"
          width="32"
          height="18"
          rx="4"
          fill="none"
          stroke="var(--color-blue-500)"
          opacity="0.55"
          strokeWidth="2"
        />
        <g fill="none" strokeLinecap="round">
          <path
            d="M184 56 L200 61 L216 56"
            stroke="var(--color-blue-500)"
            strokeWidth="4"
            opacity="0.35"
            filter="url(#chevronGlow)"
          />
          <path
            d="M184 56 L200 61 L216 56"
            stroke="var(--color-blue-500)"
            strokeWidth="2"
            opacity="0.9"
          />
        </g>
        <rect
          x="137"
          y="155"
          width="32"
          height="18"
          rx="4"
          fill="none"
          stroke="var(--color-blue-500)"
          opacity="0.55"
          strokeWidth="2"
        />
        <g fill="none" strokeLinecap="round">
          <path
            d="M137 159 L153 164 L169 159"
            stroke="var(--color-blue-500)"
            strokeWidth="4"
            opacity="0.35"
            filter="url(#chevronGlow)"
          />
          <path
            d="M137 159 L153 164 L169 159"
            stroke="var(--color-blue-500)"
            strokeWidth="2"
            opacity="0.9"
          />
        </g>
        <rect
          x="231"
          y="155"
          width="32"
          height="18"
          rx="4"
          fill="none"
          stroke="var(--color-blue-500)"
          opacity="0.55"
          strokeWidth="2"
        />
        <g fill="none" strokeLinecap="round">
          <path
            d="M231 159 L247 164 L263 159"
            stroke="var(--color-blue-500)"
            strokeWidth="4"
            opacity="0.35"
            filter="url(#chevronGlow)"
          />
          <path
            d="M231 159 L247 164 L263 159"
            stroke="var(--color-blue-500)"
            strokeWidth="2"
            opacity="0.9"
          />
        </g>
      </svg>
    ),
  },
  {
    id: "4",
    tag: "Robust security",
    title: "Capability-based environments",
    body: "Every application instance has its own bespoke environment based on capabilities you compose in at runtime. Think of it like a custom kernel for each service: if the capability is there, the ABI is there. If not, it doesn't exist. And with capabilities being scoped and granular, you can express capabilities that are prohibitively complex with traditional infrastructure. For example, a publisher service with no network or disk access, that can only publish valid `MySchema` messages to sel://example-org/pub/some-stream.",
    image: (
      <svg
        role="img"
        aria-label="A brick wall assembling with bricks falling into place"
        viewBox="0 0 400 300"
        className="h-full w-full"
      >
        <defs>
          <filter id="brickGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="52"
          y="70"
          width="296"
          height="170"
          rx="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          opacity="0.5"
        />
        <g fill="currentColor" stroke="currentColor" strokeWidth="2" opacity="0.75">
          <rect x="70" y="88" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="160" y="88" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="250" y="88" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="110" y="124" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="200" y="124" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="70" y="160" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="160" y="160" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="250" y="160" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="110" y="196" width="80" height="30" rx="6" opacity="0.12" />
          <rect x="200" y="196" width="80" height="30" rx="6" opacity="0.12" />
        </g>
        <g fill="none">
          <rect
            x="110"
            y="124"
            width="80"
            height="30"
            rx="6"
            stroke="var(--color-teal-500)"
            strokeWidth="4"
            opacity="0.35"
            filter="url(#brickGlow)"
          />
          <rect
            x="110"
            y="124"
            width="80"
            height="30"
            rx="6"
            stroke="var(--color-teal-500)"
            strokeWidth="2"
            opacity="0.9"
          />
          <rect
            x="200"
            y="196"
            width="80"
            height="30"
            rx="6"
            stroke="var(--color-teal-500)"
            strokeWidth="4"
            opacity="0.35"
            filter="url(#brickGlow)"
          />
          <rect
            x="200"
            y="196"
            width="80"
            height="30"
            rx="6"
            stroke="var(--color-teal-500)"
            strokeWidth="2"
            opacity="0.9"
          />
        </g>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="flex">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <Heading
          colour="amber"
          tag="Designed for developers"
          heading="A composable, clusterable, extensible hypervisor"
          blurb="Selium is a first-principles rethink of cloud infrastructure, designed explicitly for software developers. Own your whole stack with zero DevOps."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.id} className="flex flex-col gap-6">
              <div className="relative aspect-4/3 w-full max-w-xs text-white/80 sm:max-w-sm md:max-w-md">
                <div className="h-full w-full">{step.image}</div>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
                  {step.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-300">{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
