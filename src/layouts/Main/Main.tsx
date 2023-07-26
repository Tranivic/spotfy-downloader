import { Component } from "react";

export default class Main extends Component {
  render() {
    return (
      <main className="flex flex-col">
        <h1 className="text-2xl pb-4">Enter link</h1>
        <p className="text-2xl pb-4 text-zinc-400">
          Enter a Spotify link that you would like to download tracks from.
          Artist & podcast links aren't supported.
        </p>
        <div className="form-container">
          <input
            className=" transition-all width w-full p-3 bg-transparent border border-spacing-80 border-stone-600 text-white focus:border-stone-200 outline-none focus:outline-none rounded-md"
            type="text"
            placeholder="Example: https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8"
          />
          <button
            className="w-full py-3 bg-green-600 mt-4 hover:bg-green-800 transition-all active:scale-[0.98] rounded-md"
            type="submit"
          >
            Submit
          </button>
        </div>
      </main>
    );
  }
}
