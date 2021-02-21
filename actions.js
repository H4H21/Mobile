/**
 * This is the main Redux actions file.
 */

export const SET_USER_TYPE = "SET_USER_TYPE";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ADDRESS = "SET_USER_ADDRESS";

export function setUserType(userType) {
    return {
        type: SET_USER_TYPE,
        userType,
    }
}

export function setUserName(userName) {
    return {
        type: SET_USER_NAME,
        userName,
    }
}

export function setUserAddress(userAddress) {
    return {
        type: SET_USER_ADDRESS,
        userAddress,
    }
}