import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchDeck = createAsyncThunk('decks/fetchDeck', async () => {
  try {
    const response = await axios.get('https://educational-server-qq6d.onrender.com/api/deck/');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch decks');
  }
});

const initialState = {
  decks: [],
  loading: false,
  error: null,
};

const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeck.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDeck.fulfilled, (state, action) => {
        state.loading = false;
        state.decks = action.payload;
      })
      .addCase(fetchDeck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export { fetchDeck };
export default decksSlice.reducer;


