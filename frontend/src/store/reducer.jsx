import { SET_IS_AUTH} from "./actions/setIsAuth";

let initialState = {
    isAuth: false
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return {
                ...state
            }
    }
}