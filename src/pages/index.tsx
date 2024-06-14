import { AnimatedLogo } from '@/components/animated-logo';
import { Container } from '@/components/container';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <SiteHeader />
      <Container>
        <div className="flex flex-col gap-3">
          <AnimatedLogo />
        </div>

        <h2 className="text-violet-500 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-20 pt-2">
          What is Selium?
        </h2>

        <div className="flex flex-col gap-5 mt-20 text-lg">
          <p>
            Selium is a <strong>computing fabric</strong> that allows developers
            to
            <strong> build, deploy and scale code</strong> without touching
            traditional infrastructure.
          </p>
          <p>
            Our computing fabric integrates compute, networking, storage and
            access controls into a{' '}
            <strong>composable set of software libraries</strong> that you can
            take anywhere. The fabric is{' '}
            <strong>
              designed specifically for the needs and skills of software
              developers.
            </strong>{' '}
            If you can write code, you can use Selium.
          </p>
        </div>

        <h2 className="text-violet-500 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-20">
          Features
        </h2>

        <div className="grid grid-cols-3 gap-6 mt-20">
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Deploy, run and manage applications without leaving your IDE.
            </div>
            <p>
              Selium is built for developers. Our composable libraries are the
              sole method of configuring Selium, making the need for external
              configuration obsolete.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Build pipelines, not networks.
            </div>
            <p>
              Selium&apos;s network layer is built around data streaming and
              messaging concepts. All the flexibility of legacy networking with
              none of the hassle.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              The convenience of monoliths with the scalability of
              microservices.
            </div>
            <p>
              Call remote services like they&apos;re local libraries - no
              discovery, no abstractions, no REST!
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Any protocol, any time.
            </div>
            <p>
              With Selium you can connect your code to a wide variety of
              protocols simultaneously, making it simple to bridge between
              systems and technologies.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Built in service discovery.
            </div>
            <p>
              Selium is underpinned by a virtual directory tree that allows for
              trivial discovery and visualisation of assets and services at
              runtime. Any node in the directory can be assigned a path,
              including code modules, running instances, inputs and outputs,
              etc.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Powerful access controls.
            </div>
            <p>
              Use Unix-like filesystem permissions to control access to
              sensitive data streams, inhibit unauthorised execution of code
              modules and prevent discovery of private services.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Control your footprint with ease.
            </div>
            <p>
              Selium&apos;s directory tree can be used to summarise and throttle
              the disk, CPU, memory and bandwidth consumption of child
              resources. Control resources at any level.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Build your own hierarchy.
            </div>
            <p>
              Use the directory tree to build organisational, departmental,
              project, environment, team, application and/or other hierarchies.
              Each directory comes with its own access and resource controls
              that inherit from its parent.
            </p>
          </div>
          <div>
            <div className="font-bold text-pink-500 mb-4">
              Embed or deploy. It&apos;s your call.
            </div>
            <p>
              Selium is a set of lightweight, open source libraries that can be
              embedded directly into your own application binaries, or deployed
              as a standalone cluster.
            </p>
          </div>
        </div>

        <h2 className="text-violet-500 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-20">
          Partner with us
        </h2>

        <div className="flex flex-col mt-20 text-lg">
          <p>
            Selium is currently in Beta. If you&apos;re eager to find out how
            Selium&apos;s groundbreaking tech could benefit your organisation,
            please do reach out:{' '}
            <a href="mailto:hello@selium.com" className="text-blue-500">
              hello@selium.com
            </a>
            .
          </p>
        </div>

        <h2 className="text-violet-500 font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-20">
          Frequently asked questions
        </h2>

        <div className="flex flex-col gap-4 mt-20">
          <h4 className="text-slate-500 font-bold text-xl tracking-tight">
            Is this a DevOps tool?
          </h4>
          <p>
            Nope! DevOps tools like Terraform provide a wrapper around the
            cloud. But it&apos;s still the cloud, and comes with all the same
            restrictions and baggage.
          </p>
          <p>
            In contrast, Selium is a standalone toolset for executing arbitrary
            code and wiring up inputs and outputs. Everything Selium needs to do
            this is encapsulated within its toolset, which makes your projects
            incredibly portable.
          </p>

          <h4 className="text-slate-500 font-bold text-xl tracking-tight mt-10">
            What does Selium run on?
          </h4>
          <p>
            Lots of stuff! Selium is a standalone set of libraries and binaries
            that are light enough to run on most processor architectures. This
            includes stuff like bare metal, virtual machines, containers,
            Raspberry Pis and other low-powered devices.
          </p>

          <h4 className="text-slate-500 font-bold text-xl tracking-tight mt-10">
            What is Selium&apos;s tech stack?
          </h4>
          <p>
            Selium is written in the Rust language. We built our own data
            streaming platform, which forms the basis of our networking layer.
            We use WebAssembly for secure execution of users&apos; code and
            Tokio as our async runtime.
          </p>

          <h4 className="text-slate-500 font-bold text-xl tracking-tight mt-10">
            Is Selium open source?
          </h4>
          <p>
            Yep! You can checkout the{' '}
            <a
              className="text-blue-500"
              href="https://github.com/seliumlabs/selium"
            >
              project on GitHub.{' '}
            </a>
            We&apos;d really value your contributions.
          </p>
        </div>
      </Container>
      <SiteFooter />
    </main>
  );
}
