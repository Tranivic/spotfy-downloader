import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
  data: {},
  error: "",
  requestProcessing: false,
};

export const downloadTrack = createAsyncThunk(
  "track/downloadTrack",
  async (trackName: string, { dispatch }) => {
    try {
      dispatch(trackSlice.actions.setRequestProcessing(true));
      console.log("Downloading Track: " + trackName);

      const youtubeDownloadApiKey =
        "28652ff98bmshd1532e9ddeb4628p11f9a0jsncd1c03d64966";
      const spotifyScraperApiKey =
        "7fea4f7b2amsh89cb5a3979ea6d9p1527b7jsn616879f2a78b";

      const getTrackId = async (trackName: string) => {
        const options = {
          method: "GET",
          url: "https://spotify-scraper.p.rapidapi.com/v1/track/download",
          params: {
            track: trackName,
          },
          headers: {
            "X-RapidAPI-Key": spotifyScraperApiKey,
            "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        return response.data.youtubeVideo.id;
      };

      const extractDownloadLink = async (trackId: string) => {
        const options = {
          method: "GET",
          url: "https://youtube-mp36.p.rapidapi.com/dl",
          params: { id: trackId },
          headers: {
            "X-RapidAPI-Key": youtubeDownloadApiKey,
            "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        return response.data;
      };

      const trackId = await getTrackId(trackName);
      let trackLinkObj = await extractDownloadLink(trackId);

      // If the API returns "processing" will atempt to download again!
      while (trackLinkObj.status === "processing") {
        console.log("Status is processing, trying to download again...");
        dispatch(trackSlice.actions.setRequestProcessing(true));
        await new Promise((resolve) => setTimeout(resolve, 2000));
        trackLinkObj = await extractDownloadLink(trackId);
      }

      if (trackLinkObj.status === "ok") {
        dispatch(trackSlice.actions.setRequestProcessing(false));
        dispatch(trackSlice.actions.setStateError(""));
        console.log("Status is ok");
        window.open(trackLinkObj.link);
        return trackLinkObj;
      }
      if (trackLinkObj.status === "fail") {
        dispatch(trackSlice.actions.setRequestProcessing(false));
        dispatch(
          trackSlice.actions.setStateError("Failed, music not supported")
        );
        console.log("Failed, music not supported");
        return trackLinkObj;
      }
    } catch (error) {
      console.log("Error downloading track:", error);
      dispatch(
        trackSlice.actions.setStateError(
          "Error occurred trying to download the track"
        )
      );
      dispatch(trackSlice.actions.setRequestProcessing(false));
    }
  }
);

const trackSlice = createSlice({
  name: "track",
  initialState: INITIAL_STATE,
  reducers: {
    setStateError: (state, action) => {
      state.error = action.payload;
    },
    setRequestProcessing: (state, action) => {
      state.requestProcessing = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(downloadTrack.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(downloadTrack.rejected, (state) => {
      state.error =
        "Something went wrong downloading the track, try again later";
    });
  },
});

export default trackSlice.reducer;

export const useTrack = (state: { track: typeof INITIAL_STATE }) => {
  return state.track;
};
