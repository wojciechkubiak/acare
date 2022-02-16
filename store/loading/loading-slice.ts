import { createSlice } from "@reduxjs/toolkit";

interface ILoadingState {
  isLoading: boolean;
}

const initState: ILoadingState = {
  isLoading: true,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState: initState,
  reducers: {
    initLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { stopLoading, initLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;
