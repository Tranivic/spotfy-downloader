import React from "react";
import Track from "../../types/playlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./TrackItem.css";

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = (props) => {
  console.log(props.track);
  return (
    <li className="hover:scale-105 transition-all duration-200 max-w-xl py-4 px-8 rounded-xl flex justify-between w-full  border-slate-100 border my-2">
      <div className="track-info">
        <h1 className="">{props.track.name}</h1>
        <div className="track-by text-stone-500 text-xs">
          <span>{props.track.album.artists[0].name}</span>
        </div>
      </div>
      <button className="hover:text-stone-500 transition-all">
        <FontAwesomeIcon className="" icon={faCloudArrowDown} />
      </button>
    </li>
  );
};

export default TrackItem;
