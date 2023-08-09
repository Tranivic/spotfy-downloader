import React from "react";
import TrackItem from "../TrackItem/TrackItem";
import PlaylistObject from "../../types/playlist";
import Track from "../../types/playlist";
import "./TrackList.css";

interface TrackListProps {
  playlist: PlaylistObject;
}

const TrackList: React.FC<TrackListProps> = (props) => {
  const playlist: PlaylistObject = props.playlist;

  return (
    <div className="list-component mt-10 p-2 flex flex-col items-center justify-center list-container w-screen">
      <h1 className="text-2xl pb-4">Playlist</h1>
      <ul className="w-full p-6 flex flex-col items-center justify-center">
        {Object.values(playlist.items).map((track: Track) => (
          <TrackItem key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
