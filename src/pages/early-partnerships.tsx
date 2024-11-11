import { Container } from '@/components/container';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import {
  ArchiveBoxXMarkIcon,
  ArrowDownIcon,
  ArrowTrendingDownIcon,
  Battery100Icon,
  BoltIcon,
  BookOpenIcon,
  ChatBubbleOvalLeftIcon,
  CodeBracketIcon,
  HeartIcon,
  LockOpenIcon,
  PlayPauseIcon,
  SlashIcon,
  UserMinusIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import hljs from 'highlight.js/lib/core';
import rust from 'highlight.js/lib/languages/rust';
import sh from 'highlight.js/lib/languages/shell';

export default function Page({
  exampleCode,
  exampleShell,
}: {
  exampleCode: string;
  exampleShell: string;
}) {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <SiteHeader />
      <Container>
        <div className="px-6 pt-24 sm:pt-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-violet-500 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-2">
              Early Partnerships
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Thanks so much for your interest in Selium. We are excited to
              partner with you to{' '}
              <span className="font-bold text-pink-500">
                make the cloud not suck!
              </span>
            </p>

            <div className="mt-16">
              <a
                href="https://calendly.com/peteselium/intro-to-selium"
                target="_blank"
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <ChatBubbleOvalLeftIcon
                    aria-hidden="true"
                    className="-ml-0.5 h-5 w-5"
                  />
                  Start the conversation
                </button>
              </a>
            </div>
          </div>

          <div className="mx-auto pt-24 sm:px-2 sm:pt-32">
            <div className="mx-auto lg:max-w-none divide-y divide-dashed divide-slate-700">
              <div className="pb-20">
                <h2 className="text-4xl font-bold tracking-tight text-gray-200">
                  Partner with us
                </h2>
                <p className="max-w-4xl mt-4 text-gray-500">
                  As Selium transitions from product development into revenue
                  generation,{' '}
                  <span className="font-bold text-gray-300">
                    we are offering selected companies early access to Selium.
                  </span>{' '}
                  <br />
                  <br />
                  In return for your feedback, early partners will receive free
                  and unfettered access to our platform, direct access to our
                  engineers, and the opportunity to shape Selium to your
                  specific requirements.
                </p>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                  <div key="access" className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <LockOpenIcon
                        aria-hidden="true"
                        className="h-12 flex-none text-indigo-400"
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-100">
                        Full Access
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Free and full access to Selium, including all new
                        features and updates.
                      </p>
                    </div>
                  </div>

                  <div key="consulting" className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <HeartIcon
                        aria-hidden="true"
                        className="h-12 flex-none text-indigo-400"
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-100">
                        Personal Consultant
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Free training, support, and migration assistance to
                        propel you forward.
                      </p>
                    </div>
                  </div>

                  <div key="roadmap" className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <BookOpenIcon
                        aria-hidden="true"
                        className="h-12 flex-none text-indigo-400"
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-100">
                        Open Roadmap
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        Priority feature development to meet your ongoing needs.
                      </p>
                    </div>
                  </div>

                  <div key="pause" className="sm:flex lg:block">
                    <div className="sm:shrink-0">
                      <PlayPauseIcon
                        aria-hidden="true"
                        className="h-12 flex-none text-indigo-400"
                      />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-sm font-medium text-gray-100">
                        No Lock In
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        You can pause or stop your engagement any time. No
                        penalties, no dramas!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-20">
                <h2 className="mb-16 text-4xl font-bold tracking-tight text-gray-200">
                  Why choose Selium?
                </h2>

                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base/7 font-semibold text-pink-700">
                        Reduce complexity
                      </h2>
                      <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-pink-500 sm:text-5xl">
                        A simpler design
                      </p>
                      <p className="mt-6 text-lg/8 text-gray-500">
                        Selium is built for software developers, not DevOps.
                        This makes the cloud more transparent, decreases
                        switching costs and avoids the need to hire and maintain
                        a specialist cloud team.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                        <div key="principles" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <CodeBracketIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Use software principles.
                          </dt>{' '}
                          <dd className="inline">
                            A cloud environment that quite literally speaks your
                            developers&apos; language.
                          </dd>
                        </div>

                        <div key="resources" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <UsersIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Leverage existing resources.
                          </dt>{' '}
                          <dd className="inline">
                            Don&apos;t invest in new ones like DevOps.
                          </dd>
                        </div>

                        <div key="config" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <ArrowDownIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Fewer moving parts.
                          </dt>{' '}
                          <dd className="inline">
                            Less to configure. Less to break.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="sm:px-6 lg:px-0">
                    <div className="relative isolate overflow-hidden bg-pink-400 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-pink-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px flex text-sm/6 font-medium">
                              <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-gray-400">
                                Cargo.toml
                              </div>
                              <div className="border-r border-gray-600/10 px-4 py-2">
                                main.rs
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6">
                            <pre>
                              <code
                                dangerouslySetInnerHTML={{
                                  __html: exampleCode,
                                }}
                              />
                            </pre>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-32 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base/7 font-semibold text-cyan-700">
                        Decrease time to market
                      </h2>
                      <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-cyan-500 sm:text-5xl">
                        Faster turnaround
                      </p>
                      <p className="mt-6 text-lg/8 text-gray-500">
                        Selium drastically lowers the knowledge requirements for
                        working on the cloud, as well as the number of steps
                        involved in deploying, configuring and managing cloud
                        infrastructure.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                        <div key="principles" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <SlashIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            One team, one codebase.
                          </dt>{' '}
                          <dd className="inline">
                            Selium integrates directly into your code, so you
                            won&apos;t need that Terraform repo.
                          </dd>
                        </div>

                        <div key="resources" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <UserMinusIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Remove dependencies.
                          </dt>{' '}
                          <dd className="inline">
                            No more waiting on DevOps to resize your VM.
                          </dd>
                        </div>

                        <div key="config" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <BoltIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Resources on-demand.
                          </dt>{' '}
                          <dd className="inline">
                            Near-instant provisioning means your infrastructure
                            starts when your code does.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="sm:px-6 lg:px-0">
                    <div className="relative isolate overflow-hidden bg-cyan-400 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                      <div
                        className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[70deg] bg-cyan-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px text-sm/6 font-medium">
                              <div className="border-r border-gray-600/10 px-4 py-2">
                                Terminal
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6">
                            <pre>
                              <code
                                dangerouslySetInnerHTML={{
                                  __html: exampleShell,
                                }}
                              />
                            </pre>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-32 grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                  <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                      <h2 className="text-base/7 font-semibold text-indigo-700">
                        Lower your TCO
                      </h2>
                      <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-indigo-500 sm:text-5xl">
                        Cheaper to run
                      </p>
                      <p className="mt-6 text-lg/8 text-gray-500">
                        Selium is objectively cheaper than its competition. Its
                        simplicity allows you to reuse existing developer
                        resources, and its fast turnaround times reduce labour
                        inputs. Selium&apos;s design requires you to deploy less{' '}
                        <em>stuff</em>, so there&apos;s less to go wrong.
                      </p>
                      <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-500 lg:max-w-none">
                        <div key="principles" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <ArrowTrendingDownIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Save up to 50%.
                          </dt>{' '}
                          <dd className="inline">
                            Deploy Selium and reduce your total cloud spend by
                            half.
                          </dd>
                        </div>

                        <div key="resources" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <Battery100Icon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Includes the kitchen sink.
                          </dt>{' '}
                          <dd className="inline">
                            Messaging patterns, data streaming, key/value store,
                            secrets management and more
                            <sup>*</sup>.
                          </dd>
                          <div className="text-sm text-gray-700 mt-5">
                            <sup>*</sup> Not all features available yet.
                          </div>
                        </div>

                        <div key="config" className="relative pl-9">
                          <dt className="inline font-semibold text-gray-200">
                            <ArchiveBoxXMarkIcon
                              className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                              aria-hidden="true"
                            />
                            Break knowledge silos.
                          </dt>{' '}
                          <dd className="inline">
                            Homogenising skill sets between cloud and code
                            allows the whole team to be across both worlds.
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="sm:px-6 lg:px-0">
                    <div className="relative isolate overflow-hidden bg-indigo-400 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                      <div
                        className="absolute -inset-y-px left-52 -z-10 w-full origin-bottom-left skew-x-[10deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                        aria-hidden="true"
                      />
                      <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                        <div className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                          <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                            <div className="-mb-px text-sm/6 font-medium">
                              <div className="border-r border-gray-600/10 px-4 py-2">
                                Numbers
                              </div>
                            </div>
                          </div>
                          <div className="px-6 pb-14 pt-6">
                            <svg
                              width="370"
                              height="279"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill="none"
                                stroke="#22d3ee"
                                stroke-width="4.464"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m114.248 193.626 88.722 15.624M203.528 209.25l37.944-7.812M241.472 201.438l41.292 3.906M282.764 205.344l17.856-11.718M301.178 193.626l30.132 5.58"
                              />
                              <path
                                fill="none"
                                stroke="#818cf8"
                                stroke-width="4.464"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M114.248 95.418 166.7 108.81M166.7 108.81l24.552-13.392M191.252 95.418l57.474 6.696M248.726 102.114l64.728-6.696M313.454 95.418 331.31 83.7"
                              />
                              <path
                                fill="none"
                                stroke="#fff"
                                stroke-width="1.674"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M99.74 20.646V259.47M99.74 259.47h238.824"
                              />
                              <text
                                xmlSpace="preserve"
                                x="-1.2"
                                y="103"
                                font-family="Inter"
                                font-size="16"
                                font-weight="600"
                                fill="#818cf8"
                                letter-spacing="-.64"
                              >
                                Legacy Cloud
                              </text>
                              <text
                                xmlSpace="preserve"
                                x="47.77"
                                y="202"
                                font-family="Inter"
                                font-size="16"
                                font-weight="600"
                                fill="#22d3ee"
                                letter-spacing="-.64"
                              >
                                Selium
                              </text>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
                <h2 className="max-w-2xl text-pretty text-3xl font-semibold tracking-tight text-gray-200 sm:text-4xl">
                  Ready to dive in? <br />
                  <span className="text-indigo-600">
                    Chat to us today to get started.
                  </span>
                </h2>
                <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
                  <a
                    href="https://calendly.com/peteselium/intro-to-selium"
                    target="_blank"
                    className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 no-underline"
                  >
                    <ChatBubbleOvalLeftIcon
                      aria-hidden="true"
                      className="-ml-0.5 h-5 w-5"
                    />
                    Start the conversation
                  </a>
                </div>
              </div>

              <div className="pt-20 lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-5">
                  <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-200 sm:text-4xl">
                    Frequently asked questions
                  </h2>
                  <p className="mt-4 text-pretty text-base/7 text-gray-500">
                    Can’t find the answer you’re looking for? Reach out to our{' '}
                    <a
                      href="mailto:help@selium.com"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      customer support
                    </a>{' '}
                    team.
                  </p>
                </div>
                <div className="mt-10 lg:col-span-7 lg:mt-0">
                  <dl className="space-y-10">
                    <div key="terraform">
                      <dt className="text-base/7 font-semibold text-gray-200">
                        Is this an abstraction layer like Terraform?
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-500">
                        No. Selium is a standalone cloud platform that can be
                        deployed on top of bare metal, virtual machines and
                        containers.
                      </dd>
                    </div>

                    <div key="migration">
                      <dt className="text-base/7 font-semibold text-gray-200">
                        Do I need to migrate our whole estate to use Selium?
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-500">
                        <p className="mb-3">
                          No. Selium can work alongside other cloud providers,
                          as well as on-premise deployments and third party
                          applications such as MongoDB Atlas.
                        </p>

                        <p>
                          You can deploy a single function, a runtime, a data
                          stream, your dev environment, or whatever you see fit.
                          It&apos;s up to you and we have no expectations about
                          what you choose to deploy.
                        </p>
                      </dd>
                    </div>

                    <div key="migration">
                      <dt className="text-base/7 font-semibold text-gray-200">
                        Am I locked into a long term agreement?
                      </dt>
                      <dd className="mt-2 text-base/7 text-gray-500">
                        No. We are really excited to work with you, however if
                        you feel that the partnership doesn&apos;t live up to
                        your expectations, you can walk away at any time.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}

export async function getStaticProps() {
  hljs.registerLanguage('rust', rust);
  hljs.registerLanguage('sh', sh);

  const exampleRust = `#[selium_func]
pub async fn publish_events() {
  let mut publisher = Publisher::from(channel.new_writer());

  loop {
    let event = listen_to_filesystem().await;
    publisher.send(event);
  }
}

#[selium_func]
pub async fn consume_events() {
  let sub = Subscriber::from(channel.new_reader());
  sub.for_each(|event| spawn("do_event", &[event])).await;
}

#[selium_func]
async fn do_event(event: Event) { ... }`;

  const exampleSh = `$ selium package
Finished in 2.84 seconds

$ selium deploy target/release/my_app.wasm /acmeco/prod/my_app.wasm
[==========================] (0.0s remaining)

$ selium start /acmeco/prod/my_app.wasm
Successfully started /acmeco/prod/my_app.wasm
`;

  return {
    props: {
      exampleCode: hljs.highlight(exampleRust, { language: 'rust' }).value,
      exampleShell: hljs.highlight(exampleSh, { language: 'sh' }).value,
    },
  };
}
