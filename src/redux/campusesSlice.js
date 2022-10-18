import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampuses = createAsyncThunk('fetchCampuses', async () => {
    const { data } = await axios.get('/api/campuses');
    return data;
});

export const singleCampus = createAsyncThunk('singleCampus', async (id) => {
    const { data } = await axios.get(`/api/campuses/${id}`);
    return data;
})

const campusesSlice = createSlice({
    name: 'campusesSlice',
    initialState: {
        campuses: [],
        campus: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampuses.fulfilled, (state, action) => {
            state.campuses = action.payload;
        });
        builder.addCase(singleCampus.fulfilled, (state, action) => {
            state.campus = action.payload;
        });
    }
});

export const everyCampus = (state) => state.campusesSlice.campuses
export const oneCampus = (state) => state.campusesSlice.campus
export default campusesSlice.reducer