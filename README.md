This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Content WIP

## Above the fold

**Welcome to a new way of computing.**

_animated starry sky background_

## Introduction / Summary / Description / Explanation

Selium is a computing fabric that allows developers to deploy and scale code in an infrastructure-less fashion.

Our fabric integrates compute, networking, storage and access controls into a composable set of libraries that you can take anywhere.

## Features

**Deploy, run and manage applications without leaving your IDE.**<br>
Selium is built for developers. Our composable libraries are the sole method of configuring Selium, making the need for external configuration obsolete.

**Build pipelines, not networks.**<br>
Selium's network layer is built around data streaming and messaging concepts. All the flexibility of legacy networking with none of the hassle.

**The convenience of monoliths with the scalability of microservices.**<br>
Call remote services like they're local libraries - no discovery, no abstractions, no REST!

**Any protocol, any time.**<br>
With Selium you can connect your code to a wide variety of protocols simultaneously, making it simple to bridge between systems and technologies.

**Clear path to service discovery.**<br>
Selium is underpinned by a virtual directory tree that allows for trivial discovery and visualisation of assets and services at runtime. Any node in the directory can be assigned a path, including code modules, running instances, inputs and outputs, etc.

**Idiomatic access controls.**<br>
Use Unix-like filesystem permissions to control access to data streams, inhibit unauthorised execution of modules and prevent discovery of services.

**Control your footprint with ease.**<br>
Selium's directory tree can be used to summarise and throttle the disk, CPU, memory and bandwidth consumption of child resources. Control resources at any level.

**Build your own hierarchy.**<br>
Use the directory tree to build organisational, departmental, project, environment, team, application and/or other hierarchies. Each directory comes with its own access and resource controls that inherit from its parent.

**Embed or deploy. It's your call.**<br>
Selium is a set of lightweight, open source libraries that can be embedded directly into your own application binaries, or deployed as a standalone cluster.

## Use cases (content ideas for day 2)

- Offloading busy functions
- CI/CD integrated into pipeline
- FaaS
- K/V store + object store
- Protocol proxying
- Queueing
    - Multiplexing HTTP paging
    - Embedded queueing
- Streaming with websockets

## How it works (content ideas for day 2)

- Build WASM libs
    - Creates lib + stubs
- Import  external apps (stubs) and consume
- Embed the server components in your application
