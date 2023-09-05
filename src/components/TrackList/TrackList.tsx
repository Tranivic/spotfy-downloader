import React, { useEffect } from "react";
import TrackItem from "../TrackItem/TrackItem";
import PlaylistObject from "../../types/playlist";
import Track from "../../types/playlist";
import "./TrackList.css";
import { useSelector } from "react-redux";
import { useTrack } from "../../redux/sliceTrack";
import { usePlaylist } from "../../redux/slicePlaylist";

interface TrackListProps {
  playlist: PlaylistObject;
}

const TrackList: React.FC<TrackListProps> = (props) => {
  const playlist: PlaylistObject = props.playlist;

  const trackState = useSelector(useTrack);
  const playlistState = useSelector(usePlaylist);

  useEffect(() => {
    console.log("----------------");
    console.log(trackState);
    console.log("----------------");
    console.log(playlistState);
    console.log("----------------");
  }, [trackState, playlistState]);

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
