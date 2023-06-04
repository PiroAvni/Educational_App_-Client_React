import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFlashcard = createAsyncThunk(
  'flashcard/fetchFlashcard',
  async (deckId) => {
    console.log('API CALL', deckId);
    const response = await axios.get(`https://educational-server-qq6d.onrender.com/api/cards/flashcards/decks/${deckId}`);
    return response.data;
  }
);

const flashcardSlice = createSlice({
  name: 'flashcard',
  initialState: {
    flashcards: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlashcard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFlashcard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flashcards = action.payload;
      })
      .addCase(fetchFlashcard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default flashcardSlice.reducer;




