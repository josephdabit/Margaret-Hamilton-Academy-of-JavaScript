import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('fetchStudents', async () => {
    const { data } = await axios.get('/api/students');
    return data;
});

const studentsSlice = createSlice({
    name: 'studentsSlice',
    initialState: {
        students: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.students = action.payload;
        });
    }
});

export const everyStudent = (state) => state.studentsSlice.students
export default studentsSlice.reducer