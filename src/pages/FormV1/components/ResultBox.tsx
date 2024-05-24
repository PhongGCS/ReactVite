import React from "react";
import useFormContext from "../utils/useFormContext";

function ResultBox() {
    const {selected}  = useFormContext();
    return (
        <>
        <div>
            <p>Name: {selected.name}</p>

            <p>Location: {selected.location}</p>
        </div>
        </>
    )
}
export default ResultBox;