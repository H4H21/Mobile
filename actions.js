/**
 * This is the main Redux actions file.
 */

export const SET_USER_TYPE = "SET_USER_TYPE";

export function setUserType(userType) {
    return {
        type: SET_USER_TYPE,
        userType,
    }
}

