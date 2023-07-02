export const SET_FIRST_NAME = 'SET_FIRST_NAME';

export function setFirstName(name) {
    return {
        type: SET_FIRST_NAME,
        firstName: name
    }
}