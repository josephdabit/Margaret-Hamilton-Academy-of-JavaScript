import React, { useEffect } from "react";
import { oneStudent, singleStudent } from "../redux/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleStudent = () => {

    const onlyStudent = useSelector(oneStudent);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(singleStudent(id))
    }, []);

    return (
        <div className="singleStudent">
            <h2>Name: {onlyStudent.firstName} {onlyStudent.lastName}</h2>
            <h3>Email: {onlyStudent.email}</h3>
            <h3>GPA: {onlyStudent.gpa}</h3>
            {/* <h4>School: {onlyStudent.campusId}</h4>
            {console.log(onlyStudent.campusId)} */}
            <img className='singleStudentImg' src={onlyStudent.imageUrl} />
        </div>
    )
};

export default SingleStudent