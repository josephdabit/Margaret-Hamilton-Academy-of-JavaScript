import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampuses = createAsyncThunk('fetchCampuses', async () => {
    const { data } = await axios.get('/api/campuses');
    return data;
});

export const singleCampus = createAsyncThunk('singleCampus', async (id) => {
    const { data } = await axios.get(`/api/campuses/${id}`);
    return data;
});

export const addCampus = createAsyncThunk('addCampus', async (payload) => {
    const { data } = await axios.post('/api/campuses', payload);
    return data;
});

export const removeCampus = createAsyncThunk('removeCampus', async (id) => {
    const { data } = await axios.delete(`/api/campuses/${id}`);
    return data;
});

const campusesSlice = createSlice({
    name: 'campusesSlice',
    initialState: {
        campuses: [],
        campus: [],
        loading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCampuses.fulfilled, (state, action) => {
            state.campuses = action.payload;
        });
        builder.addCase(singleCampus.fulfilled, (state, action) => {
            state.campus = action.payload;
            state.loading = false;
        });
        builder.addCase(addCampus.fulfilled, (state, action) => {
            state.campuses.push(action.payload)
        });
        builder.addCase(removeCampus.fulfilled, (state, action) => {
            state.campuses.splice(action.payload, 1)
        });
    }
});

export const everyCampus = (state) => state.campusesSlice.campuses
export const oneCampus = (state) => state.campusesSlice.campus
export const loading = (state) => state.campusesSlice.loading
export default campusesSlice.reducer