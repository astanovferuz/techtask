import { act } from "@testing-library/react";
import * as ActionTypes from "./ActionTypes";

export const gqlReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case (ActionTypes.GET_DATA):
            return { ...state, data: action.payload }
        default:
            return state
    }
}