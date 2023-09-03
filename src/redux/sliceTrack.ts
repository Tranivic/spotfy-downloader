import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  data: {},
  error: "",
  isLoading: false,
};

export const downloadTrack = createAsyncThunk(
  "track/downloadTrack",
  async (trackName: string) => {
    console.log("Downloading Track..." + " " + trackName);
    const testApiKey = "28652ff98bmshd1532e9ddeb4628p11f9a0jsncd1c03d64966";

    const getTrackId = async (trackName: string) => {
      const options = {
        method: "GET",
        url: "https://spotify-scraper.p.rapidapi.com/v1/track/download",
        params: {
          track: trackName,
        },
        headers: {
          "X-RapidAPI-Key":
            "28652ff98bmshd1532e9ddeb4628p11f9a0jsncd1c03d64966",
          "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const trackId = response.data.youtubeVideo.id;
        return trackId;
      } catch (error) {
        alert(error);
      }
    };

    const trackId = await getTrackId(trackName);
    console.log(trackId);

    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: trackId },
      headers: {
        "X-RapidAPI-Key": testApiKey,
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const trackDownloadResponse = response.data;
      window.open(`${trackDownloadResponse.link}`);
      console.log(INITIAL_STATE)
      return trackDownloadResponse;
    } catch (error) {
      alert(error);
    }
  }
);

const slicePlaylist = createSlice({
  name: "track",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(downloadTrack.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(downloadTrack.rejected, (state) => {
      state.error =
        "Something went wrong downloading the track, try again later";
    });
  },
});

export default slicePlaylist.reducer;

export const useTrack = (state: { track: typeof INITIAL_STATE }) => {
  return state.track;
};
