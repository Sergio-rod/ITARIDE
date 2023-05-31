import { update } from "firebase/database";

export const reducer = (state,action) =>{
    const {validationResult,inputId,inputValue} = action

    const updatedValues = {
        ...state.inputValues,
        [inputId]:inputValue
    };
    const updatedValiidities = {
        ...state.inputValidities,
        [inputId]: validationResult
    };
    let updateFormIsValid = true;
    for (const key in updatedValiidities){
        if(updatedValiidities[key] !== undefined){
            updateFormIsValid = false;
            break;

        }
    }

    return{
        inputValues: updatedValues,
        inputValidities: updatedValiidities,
        formIsValid: updateFormIsValid
    }
}