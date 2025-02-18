import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '@/redux/reducer'; // Sesuaikan dengan path reducer

const store = configureStore({
  reducer: rootReducer
});

export default store;
