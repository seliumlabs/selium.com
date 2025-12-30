export default function Designed() {
  return (
    <section id="designed" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="text-base font-semibold text-amber-300">Designed for developers</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl text-white">
          A new paradigm, not another wrapper.
        </h2>
        <p className="mt-6 text-lg/8 text-gray-300">
          Selium is a brand new, clusterable, stream-native application platform for
          applications-in-motion.
          <br />
          <br />
          With Selium you can:
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>define services as functions,</li>
            <li>scale services independently with an annotation,</li>
            <li>compose messaging patterns between services...</li>
            <li>...and network protocols like HTTP/S and QUIC,</li>
            <li>share Flatbuffers schemas for strong typing,</li>
            <li>leverage capability-based security and strong isolation</li>
          </ul>
        </p>
      </div>
    </section>
  );
}
