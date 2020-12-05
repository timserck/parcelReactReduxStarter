import { tradTypes } from "../../types/account/trad";

export const setTrad = (payload) => ({
    type: tradTypes.SET_TRAD,
    payload
  })

export const getTrad = () => ({
    type: tradTypes.GET_TRAD
})
