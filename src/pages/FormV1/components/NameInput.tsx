import React from "react";
import useFormContext from "../utils/useFormContext";

function NameInput() {
    const {actions}  = useFormContext();
    const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        actions.onChangeName(event.target.value);
    }
    return (
        <>
        <div>
            <label htmlFor="nameinput">Name</label>
            <input onChange={handleOnChangeName} id="nameinput" name="name"/>
        </div>
        </>
    )
}
export default NameInput;