import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { api } from '../api/api';
import chaptersReducer from '../features/chapters/chaptersSlice';
import versesReducer from '../features/verses/versesSlice';
import audioReducer from '../features/audio/audioSlice';
import languagesReducer from '../features/languages/languagesSlice';
import recitersReducer from '../features/reciters/recitersSlice';
import translationsReducer from '../features/translations/translationsSlice';
import translationIdReducer from '../features/translationIdSlice';
import reciterIdReducer from '../features/reciterIdSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    chapters: chaptersReducer,
    verses: versesReducer,
    audio: audioReducer,
    languages: languagesReducer,
    reciters: recitersReducer,
    translations: translationsReducer,
    translationId: translationIdReducer,
    reciterId: reciterIdReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export default store;
