export const SET_IS_AUTH = 'SET_IS_AUTH';

export function setIsAuth(authState) {
    return {
        type: SET_IS_AUTH,
        isAuth: authState
    }
}