import React, { Component, FormEvent } from "react";
import "./InputForm.css";

export default class InputForm extends Component {
  state = {
    formData: {
      url: {
        value: "",
        isValid: false,
      },
    },
    spotifyPlaylistRegex:
      /^https:\/\/open\.spotify\.com\/playlist\/([a-zA-Z0-9_-]+)/s,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Set url value in state
    this.setState(
      {
        formData: {
          ...this.state.formData,
          url: {
            ...this.state.formData.url,
            value: event.target.value,
          },
        },
      },
      () => {
        // Check if url is valid and apply classes
        this.validateSpotifyPlaylistURL();
      }
    );
  };

  validateSpotifyPlaylistURL = () => {
    const spotifyPlaylistPattern: RegExp = new RegExp(
      this.state.spotifyPlaylistRegex
    );
    const url = this.state.formData.url.value;

    if (spotifyPlaylistPattern.test(url)) {
      this.setState({
        formData: {
          ...this.state.formData,
          url: {
            ...this.state.formData.url,
            isValid: true,
          },
        },
      });
    } else {
      this.setState({
        formData: {
          ...this.state.formData,
          url: {
            ...this.state.formData.url,
            isValid: false,
          },
        },
      });
    }
  };

  getPlaylistIdFromUrl = (url: string) => {
    const spotifyPlaylistPattern: RegExp = new RegExp(
      this.state.spotifyPlaylistRegex
    );
    const match = url.match(spotifyPlaylistPattern);

    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  };

  submitPlaylist = (event: FormEvent) => {
    event.preventDefault();
    const url = this.state.formData.url.value;
    const playlistId = this.getPlaylistIdFromUrl(url);

    if (playlistId) {
      console.log("submited");
      console.log(playlistId);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitPlaylist}>
        <div className="input-container flex items-center">
          <input
            className={`transition-all width w-full p-3 bg-transparent border border-spacing-80 border-stone-600 text-white focus:border-stone-200 outline-none focus:outline-none rounded-md`}
            type="text"
            placeholder="Example: https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8"
            onChange={this.handleChange}
          />
          <i
            className={`${
              this.state.formData.url.isValid ? "url-valid" : "url-invalid"
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
    );
  }
}
