import { Component, FormEvent } from "react";
import "./InputForm.css";

const submitPlaylist = (event: FormEvent) => {
  event.preventDefault();
};

export default class InputForm extends Component {
  render() {
    return (
      <form onSubmit={submitPlaylist}>
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
      </form>
    );
  }
}
