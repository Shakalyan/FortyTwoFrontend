import {SET_IS_AUTH} from "./actions/setIsAuth";
import {REFRESH_TOKEN, USER_NAME_LC} from "../Consts";
import {SET_FIRST_NAME} from "./actions/setFirstName";

let initialState = {
    isAuth: localStorage.getItem(REFRESH_TOKEN) !== null,
    firstName: localStorage.getItem(USER_NAME_LC) ?? "Anton"
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SET_FIRST_NAME:
            return {
                ...state,
                firstName: action.firstName
            }
        default:
            return {
                ...state
            }
    }
}