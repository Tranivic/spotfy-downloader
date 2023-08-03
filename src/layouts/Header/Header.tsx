import { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="flex flex-col items-center pt-5">
        <h1 className="title p-2 text-5xl font-normal">Spotify Downloader</h1>
        <h2 className="subtitle p-2 text-xl font-normal text-zinc-400">
          Download playlist's tracks from Spotify instantly.
        </h2>
      </header>
    );
  }
}
