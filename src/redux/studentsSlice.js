import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('fetchStudents', async () => {
    const { data } = await axios.get('/api/students');
    return data;
});

export const singleStudent = createAsyncThunk('singleStudent', async (id) => {
    const { data } = await axios.get(`/api/students/${id}`);
    return data;
});

export const addStudent = createAsyncThunk('addStudent', async (payload) => {
    const { data } = await axios.post('/api/students', payload);
    return data;
});

export const removeStudent = createAsyncThunk('removeStudent', async (id) => {
    const { data } = await axios.delete(`/api/students/${id}`);
    return data;
});

export const updateStudent = createAsyncThunk('updateStudent', async ({ id, firstName, lastName, email, imageUrl, gpa }) => {
    const { data } = await axios.put(`/api/students/${id}`, {
        firstName,
        lastName,
        email,
        imageUrl,
        gpa
    });
    return data;
});

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
        builder.addCase(addStudent.fulfilled, (state, action) => {
            state.students.push(action.payload);
        });
        builder.addCase(removeStudent.fulfilled, (state, action) => {
            state.students.splice(action.payload, 1)
        });
        builder.addCase(updateStudent.fulfilled, (state, action) => {
            state.student = action.payload;
        });
    }
});

export const everyStudent = (state) => state.studentsSlice.students
export const oneStudent = (state) => state.studentsSlice.student
export const studentLoading = (state) => state.studentsSlice.loading
export default studentsSlice.reducer