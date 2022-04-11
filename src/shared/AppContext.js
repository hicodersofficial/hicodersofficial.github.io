import { createContext } from "react";
import { USER } from "./KEYS";

export const initialAppState = {
    user: {
        username: null,
        userimage: null,
        login: null,
        token: null,
    },
};

export const appReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case USER:
            return { ...state, user: payload };
        default:
            return state;
    }
};

export default createContext();
