import React, { useState } from "react";
import { addStudent } from "../redux/studentsSlice";
import { useDispatch } from "react-redux";

const AddStudent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gpa, setGpa] = useState(0.0);
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    async function handleSubmit(evt) {
        evt.preventDefault()

        dispatch(addStudent({
            firstName, lastName, email, gpa, imageUrl
        }))
    };

    return (
        <form className="addStudent" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input name='firstName' value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />

            <label htmlFor="lastName">Last Name:</label>
            <input name='lastName' value={lastName} onChange={(evt) => setLastName(evt.target.value)} />

            <label htmlFor="email">Email:</label>
            <input name='email' value={email} onChange={(evt) => setEmail(evt.target.value)} />

            <label htmlFor="gpa">GPA:</label>
            <input name='gpa' value={gpa} onChange={(evt) => setGpa(evt.target.value)} />

            <label htmlFor="imageUrl">Image URL:</label>
            <input name='imageUrl' value={imageUrl} onChange={(evt) => setImageUrl(evt.target.value)} />

            <button type='submit'>Add Student</button>
        </form>
    )
};

export default AddStudent