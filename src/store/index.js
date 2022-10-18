/* Here is where you will configure the store 
    The store needs some reducer slices!
*/
import { configureStore } from '@reduxjs/toolkit';
import studentsSlice from '../redux/studentsSlice';

const store = configureStore({
  reducer: studentsSlice
})

export default store
