import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './components/GameMode/gameSliceStore';
import preferencesReducer from './features/preferences/preferencesSlice';
import notificationsReducer from './features/notifications/notificationsSlice';
import lifelinesReducer from './features/lifelines/lifelinesSlice';

export const store = configureStore({
  reducer: {
    game: gameReducer,
    preferences: preferencesReducer,
    notifications: notificationsReducer,
    lifelines: lifelinesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
