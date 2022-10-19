import React, { useEffect } from "react";
import { loading, oneCampus, singleCampus } from "../redux/campusesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const SingleCampus = () => {

    const onlyCampus = useSelector(oneCampus);
    const loaded = useSelector(loading);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(singleCampus(id))
    }, []);

    return (
        <div className="singleCampus">
            <h2>Name: {onlyCampus.name}</h2>
            <h3>Description: {onlyCampus.description}</h3>
            <h3>Address: {onlyCampus.address}</h3>
            <h4 className="attendingStudent">Attending Students: {loaded == false ? onlyCampus.students.map((person) => (
                <Link key={person.id} to={`/students/${person.id}`}>{person.firstName} {person.lastName}</Link>)) : <p>Still loading...</p>}</h4>
            <img className='singleCampusImg' src={onlyCampus.imageUrl} />
        </div>
    )
};

export default SingleCampus