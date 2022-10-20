import React, { useEffect } from "react";
import { everyCampus, fetchCampuses, removeCampus } from "../redux/campusesSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCampuses = () => {

    const eachCampus = useSelector(everyCampus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampuses())
    }, []);

    return (
        <div className="allCampuses">
            {eachCampus.map((campus) => (
                <div key={campus.id} className="individualCampus">
                    <h2>{campus.name}</h2>
                    <Link key={campus.id} to={`/campuses/${campus.id}`}>
                        <img src={campus.imageUrl} className="campusImg" />
                    </Link>
                    <button className="xButton" onClick={
                        async function handleDelete(evt) {
                            evt.preventDefault();
                            dispatch(removeCampus(campus.id));
                        }}>X</button>
                </div>
            ))}
        </div>
    )
};

export default AllCampuses