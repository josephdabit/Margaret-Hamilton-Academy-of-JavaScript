import React, { useState } from "react";
import { addCampus } from "../redux/campusesSlice";
import { useDispatch } from "react-redux";

const AddCampus = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const dispatch = useDispatch();

    async function handleSubmit(evt) {
        evt.preventDefault()

        dispatch(addCampus({
            name, description, address, imageUrl
        }))
    };

    return (
        <form className="addCampus" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input name='name' value={name} onChange={(evt) => setName(evt.target.value)} />

            <label htmlFor="description">Description:</label>
            <input name='description' value={description} onChange={(evt) => setDescription(evt.target.value)} />

            <label htmlFor="address">Address:</label>
            <input name='address' value={address} onChange={(evt) => setAddress(evt.target.value)} />

            <label htmlFor="imageUrl">Image URL:</label>
            <input name='imageUrl' value={imageUrl} onChange={(evt) => setImageUrl(evt.target.value)} />

            <button type='submit'>Add Campus</button>
        </form>
    )
};

export default AddCampus