import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://67219fde98bbb4d93ca9043e.mockapi.io/todo'); 
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
