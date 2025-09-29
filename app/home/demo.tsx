import {
  adjectives,
  animals,
  colors,
  names,
  NumberDictionary,
  uniqueNamesGenerator,
} from "unique-names-generator";

// Random app name generation
const numbers = NumberDictionary.generate({ min: 100, max: 999 });
const app_name = uniqueNamesGenerator({
  dictionaries: [adjectives, animals, colors, names, numbers],
  separator: "_",
  length: 3,
  style: "lowerCase",
});

export default function Demo() {
  return (
    <section id="demo" className="h-screen flex mx-auto max-w-4xl snap-center">
      <div className="w-full my-auto bg-white px-6 rounded-xl py-16 text-gray-800">
        <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Try it out now
        </h2>
        <p className="text-center mt-5">
          Launch your own Selium sandpit and start experimenting with zero effort.{" "}
          <strong>No sign up required!</strong>
        </p>
        <form className="mx-auto mt-10 flex max-w-md gap-x-1 items-baseline">
          <label htmlFor="app-name" className="font-bold">
            sel://selium.com/demo/
          </label>
          <input
            id="app-name"
            name="app_name"
            type="text"
            required
            defaultValue={app_name}
            className="min-w-0 flex-auto pr-2 pt-2 border-b-black border-b-1 text-base focus:outline-0 placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="cursor-pointer rounded-md animate-pulse-logo text-white px-3.5 py-2.5 text-sm font-semibold hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Launch
          </button>
        </form>
      </div>
    </section>
  );
}
