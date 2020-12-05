import { tradTypes } from "../../types/account/trad";
const initialState = {
    lang: "fr"
}

const trad = (state=initialState, action) =>
{
    switch(action.type)
    {
    case tradTypes.SET_TRAD:
        return {
            ...state,
            lang: action.payload
        }
    default:
        return state;
    }
}

export default trad; 