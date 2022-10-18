import React, { useEffect } from "react";
import { oneCampus, singleCampus } from "../redux/campusesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleCampus = (props) => {

    const onlyCampus = useSelector(oneCampus);
    const dispatch = useDispatch();
    const { id } = useParams();

    const student = onlyCampus.students
    // student.map((single) => single.campusId)
    console.log(student);

    useEffect(() => {
        dispatch(singleCampus(id))
    }, []);

    return (
        <div className="singleCampus">
            <h2>Name: {onlyCampus.name}</h2>
            <h3>Description: {onlyCampus.description}</h3>
            <h3>Address: {onlyCampus.address}</h3>
            {/* <h4>{onlyCampus.students}</h4> */}
            {/* {console.log(onlyCampus.students)} */}
            <img className='singleCampusImg' src={onlyCampus.imageUrl} />
        </div>
    )
};

export default SingleCampus