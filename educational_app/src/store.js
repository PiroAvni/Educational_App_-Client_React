
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice/authSlice';
import { apiSlice } from './slices/apiSlice/apiSlice';
import categoriesReducer from './slices/category/categorySlice'; 
import decksReducer from './slices/decks/deckSlice';
import flashcardReducer from './slices/cardSlice/flashcardSlice'


const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  categories: categoriesReducer,
  decks: decksReducer,
  flashcard:flashcardReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});



export default store;