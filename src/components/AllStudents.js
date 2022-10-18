import React, { useEffect } from "react";
import { everyStudent, fetchStudents } from "../redux/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllStudents = () => {

    const eachStudent = useSelector(everyStudent);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchStudents())
    }, []);

    return (
        <div className="allStudents">
            {eachStudent.map((student) => (
                <div key={student.id} className="individualStudent">
                    <h2>{student.firstName}</h2>
                    <Link key={student.id} to={`/students/${student.id}`}>
                    <img src={student.imageUrl} className="studentImg" />
                    </Link>
                </div>
            ))}
        </div>
    )
};

export default AllStudents