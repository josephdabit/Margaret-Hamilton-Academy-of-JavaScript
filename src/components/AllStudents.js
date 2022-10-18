import React, { useEffect } from "react";
import { everyStudent, fetchStudents } from "../redux/studentsSlice";
import { useDispatch, useSelector } from "react-redux";

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
                    <img src={student.imageUrl} className="studentImg" />
                </div>
            ))}
        </div>
    )
};

export default AllStudents