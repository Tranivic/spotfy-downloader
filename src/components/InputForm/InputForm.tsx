import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { fetchPlaylist } from "../../redux/slicePlaylist";
import { FormState } from "../../types/form";
import "./InputForm.css";

const InputForm: React.FC = () => {
  const dispatch = useDispatch<any>();

  const [formData, setFormData] = useState<FormState["formData"]>({
    url: {
      value: "",
      id: "",
      isValid: false,
    },
  });

  const spotifyPlaylistRegex =
    /^https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9_-]+)/s;


  const keyPressHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      url: {
        ...prevState.url,
        value: value,
      },
    }));
    validateSpotifyPlaylistURL(value);
  };

  const validateSpotifyPlaylistURL = (url: string) => {
    const spotifyPlaylistPattern: RegExp = new RegExp(spotifyPlaylistRegex);
    if (spotifyPlaylistPattern.test(url)) {
      setFormData((prevState) => ({
        ...prevState,
        url: {
          ...prevState.url,
          isValid: true,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        url: {
          ...prevState.url,
          isValid: false,
        },
      }));
    }
    getPlaylistIdFromUrl(url);
  };

  const getPlaylistIdFromUrl = (url: string) => {
    const spotifyPlaylistPattern: RegExp = new RegExp(spotifyPlaylistRegex);
    const match = url.match(spotifyPlaylistPattern);

    if (match && match[1]) {
      const idFromUrl = match[1];
      setFormData((prevState) => ({
        ...prevState,
        url: {
          ...prevState.url,
          id: idFromUrl,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        url: {
          ...prevState.url,
          id: "",
        },
      }));
    }
  };

  const submitPlaylist = (event: FormEvent) => {
    event.preventDefault();
    const playlistId = formData.url.id;

    if (playlistId) {
      dispatch(fetchPlaylist(playlistId));
    }
  };

  return (
    <div className="form-component max-w-xxl">
      <h1 className="text-2xl pb-4">Enter link</h1>
      <p className="text-2xl pb-4 text-zinc-00">
        Enter a Spotify playlist link that you would like to download tracks
        from. Artist & podcast links aren't supported.
      </p>
      <form onSubmit={submitPlaylist}>
        <div className="input-container flex items-center">
          <input
            className={`transition-all width w-full p-3 bg-transparent border border-spacing-80 border-stone-600 text-white focus:border-stone-200 outline-none focus:outline-none rounded-md`}
            type="text"
            placeholder="Example: https://open.spotify.com/playlist/4PTG3Z6ehGkBFwjybzWkR8"
            onChange={keyPressHandleChange}
          />
          <i
            className={`${
              formData.url.isValid ? "url-valid" : "url-invalid"
            } transition duration-150 ease-in-out -ml-8`}
          >
            ✅
          </i>
        </div>
        <button
          className="w-full py-3 bg-green-600 mt-4 hover:bg-green-800 transition-all active:scale-[0.98] rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InputForm;
