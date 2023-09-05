import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ResponseData from "../types/playlist.ts";
const INITIAL_STATE = {
  data: {},
  error: "",
};

export const fetchPlaylist = createAsyncThunk(
  "playlist/fetch",
  async (playlistId: string) => {
    console.log("fetching..." + " " + playlistId);
    const testApiKey = "7fea4f7b2amsh89cb5a3979ea6d9p1527b7jsn616879f2a78b";

    const options = {
      method: "GET",
      url: "https://spotify-scraper.p.rapidapi.com/v1/playlist/contents",
      params: {
        playlistId: playlistId,
      },
      headers: {
        "X-RapidAPI-Key": testApiKey,
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const playlistresponseData: ResponseData = response.data;
      return playlistresponseData.contents;
    } catch (error) {
      alert(error);
      return {};
    }
  }
);

const slicePlaylist = createSlice({
  name: "playlist",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPlaylist.fulfilled, (state, action) => {
      console.log("Fetch complete!");
      state.data = action.payload;
    });
    builder.addCase(fetchPlaylist.rejected, (state) => {
      console.log("Fetch rejected!");
      state.error = "Something went wrong, try again later";
    });
  },
});

export default slicePlaylist.reducer;

export const usePlaylist = (state: { playlist: typeof INITIAL_STATE }) => {
  return state.playlist;
};
