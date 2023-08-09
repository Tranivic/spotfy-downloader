import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePlaylist } from "../../redux/slicePlaylist";
import PlaylistObject from "../../types/playlist";
import InputForm from "../../components/InputForm/InputForm";
import TrackList from "../../components/TrackList/TrackList";
import "./Main.css";

const Main = () => {
  const playlistState = useSelector(usePlaylist);
  const [playlistObject, setPlaylistObject] = useState({});

  function isPlaylistEmpty(obj: object): boolean {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    setPlaylistObject({
      ...playlistState.data,
    });
  }, [playlistState.data]);

  return (
    <main className="flex flex-col items-center">
      {isPlaylistEmpty(playlistObject) ? (
        <InputForm />
      ) : (
        <TrackList playlist={playlistObject as PlaylistObject} />
      )}
    </main>
  );
};

export default Main;
