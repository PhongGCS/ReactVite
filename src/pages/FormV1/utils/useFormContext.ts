import { useContext } from "react";
import { FormContext } from "..";

function useFormContext() {
    return useContext(FormContext)
}
export default useFormContext;