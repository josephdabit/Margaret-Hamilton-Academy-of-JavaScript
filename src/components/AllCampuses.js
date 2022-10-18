import React, { useEffect } from "react";
import { everyCampus, fetchCampuses } from "../redux/campusesSlice";
import { useDispatch, useSelector } from "react-redux";

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
                    <img src={campus.imageUrl} className="campusImg" />
                </div>
            ))}
        </div>
    )
};

export default AllCampuses