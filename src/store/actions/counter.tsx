import { counterTypes } from "../types/counter";

export const addCounter = () => ({
    type: counterTypes.ADD_COUNTER
  })

export const removeCounter = () => ({
type: counterTypes.REMOVE_COUNTER
})

export const resetCounter = () => ({
    type: counterTypes.RESET_COUNTER
    })