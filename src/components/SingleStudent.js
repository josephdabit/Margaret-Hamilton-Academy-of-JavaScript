import React, { useEffect } from "react";
import { oneStudent, singleStudent, studentLoading } from "../redux/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const SingleStudent = () => {

    const onlyStudent = useSelector(oneStudent);
    const studentLoaded = useSelector(studentLoading);
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
            <h4 className="attendedCampus">Campus: {studentLoaded == false ? <Link key={onlyStudent.campus.id} to={`/campuses/${onlyStudent.campus.id}`}>{onlyStudent.campus.name}</Link> : <p>Still loading...</p>}</h4>
            <img className='singleStudentImg' src={onlyStudent.imageUrl} />
        </div>
    )
};

export default SingleStudent