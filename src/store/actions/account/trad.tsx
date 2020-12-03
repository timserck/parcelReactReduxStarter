import { tradTypes } from "../../types/account/trad";

export const setTrad = () => ({
    type: tradTypes.SET_TRAD
  })

export const getTrad = () => ({
    type: tradTypes.GET_TRAD
})
