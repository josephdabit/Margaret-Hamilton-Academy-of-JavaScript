import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampuses = createAsyncThunk('fetchCampuses', async () => {
    const { data } = await axios.get('/api/campuses');
    return data;
});

const campusesSlice = createSlice({
    name: 'campusesSlice',
    initialState: {
        campuses: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampuses.fulfilled, (state, action) => {
            state.campuses = action.payload;
        });
    }
});

export const everyCampus = (state) => state.campusesSlice.campuses
export default campusesSlice.reducer