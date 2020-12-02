import { counterTypes } from "../types/counter";
const initialState = {
    index: 0
}

const counter = (state=initialState, action) =>
{
    switch(action.type)
    {
    case counterTypes.ADD_COUNTER:
        return {
            ...state,
            index: state.index + 1
        }
    case counterTypes.REMOVE_COUNTER:
        return {
            ...state,
            index: state.index - 1
        }
    case counterTypes.RESET_COUNTER:
        return {
            ...state,
            index: 0
        }
    default:
        return state;
    }
}

export default counter; 