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
    const options = {
      method: "GET",
      url: "https://spotify-scraper.p.rapidapi.com/v1/playlist/contents",
      params: {
        playlistId: playlistId,
      },
      headers: {
        "X-RapidAPI-Key": "28652ff98bmshd1532e9ddeb4628p11f9a0jsncd1c03d64966",
        "X-RapidAPI-Host": "spotify-scraper.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const responseData: ResponseData = response.data;
      return responseData;
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
      state.data = action.payload;
      console.log(state);
    });
    builder.addCase(fetchPlaylist.rejected, (state) => {
      state.error = "Something went wrong, try again later";
      console.log(state);
    });
  },
});

export default slicePlaylist.reducer;

export const usePlaylist = (state: { playlist: typeof INITIAL_STATE }) => {
  return state.playlist;
};
