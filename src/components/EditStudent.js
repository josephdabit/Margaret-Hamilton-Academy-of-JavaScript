import React, { useState } from "react";
import { updateStudent } from "../redux/studentsSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const EditStudent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gpa, setGpa] = useState(0.0);
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();
    const { id } = useParams();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await dispatch(updateStudent({ id, firstName, lastName, email, imageUrl, gpa }));
    }
  
    return (
        <form className="editStudent" onSubmit={handleSubmit}>
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

        <button type='submit'>Edit Student</button>
    </form>
    )
};

export default EditStudent