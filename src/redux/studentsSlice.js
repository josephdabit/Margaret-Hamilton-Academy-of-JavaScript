import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('fetchStudents', async () => {
    const { data } = await axios.get('/api/students');
    return data;
});

export const singleStudent = createAsyncThunk('singleStudent', async (id) => {
    const { data } = await axios.get(`/api/students/${id}`);
    return data;
})

const studentsSlice = createSlice({
    name: 'studentsSlice',
    initialState: {
        students: [],
        student: [],
        loading: true
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            state.students = action.payload;
        });
        builder.addCase(singleStudent.fulfilled, (state, action) => {
            state.student = action.payload;
            state.loading = false;
        });
    }
});

export const everyStudent = (state) => state.studentsSlice.students
export const oneStudent = (state) => state.studentsSlice.student
export const studentLoading = (state) => state.studentsSlice.loading
export default studentsSlice.reducer