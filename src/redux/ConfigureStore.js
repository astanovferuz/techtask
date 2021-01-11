import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger";
import { gqlReducer } from "./gqlReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            gqlReducer,
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}