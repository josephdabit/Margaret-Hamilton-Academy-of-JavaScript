/* Here is where you will configure the store 
    The store needs some reducer slices!
*/
import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from '../redux/studentsSlice';
import campusesSlice from '../redux/campusesSlice';

const store = configureStore({
  reducer: {
    studentsSlice: studentsSlice,
    campusesSlice: campusesSlice
  }
});

export default store
