import { Component } from "react";
import TrackItem from "../TrackItem/TrackItem";
import "./TrackList.css";

export default class TrackList extends Component {
  render() {
    return (
      <div className="list-component mt-10 p-2 flex flex-col items-center justify-center list-container w-screen">
        <h1 className="text-2xl pb-4">Playlist</h1>
        <ul className="w-full p-6 flex flex-col items-center justify-center">
          <TrackItem />
        </ul>
      </div>
    );
  }
}
