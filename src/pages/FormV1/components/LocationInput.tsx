import React from "react";
import useFormContext from "../utils/useFormContext";

function LocationInput() {
    

    const {actions}  = useFormContext();
    const handleOnChangeLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
        actions.onChangeLocation(event.target.value);
    }
    return (
        <>
        <div>
            <label htmlFor="locationinput">Location</label>
            <input onChange={handleOnChangeLocation} id="locationinput" name="location"/>
        </div>
        </>
    )
}
export default LocationInput;