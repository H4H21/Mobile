/**
 * This is the main Redux actions file.
 */

export const SET_USER_TYPE = "SET_USER_TYPE";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ADDRESS = "SET_USER_ADDRESS";
export const SET_FOOD_RADIUS = "SET_FOOD_RAOIUS";
export const SET_USER_COORDS = "SET_USER_COORDS";
export const SET_USER_TIME_START = "SET_USER_TIME_START";
export const SET_USER_TIME_END = "SET_USER_TIME_END";
export const SET_FOOD_CATEGORIES = "SET_FOOD_CATEGORIES";

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

export function setUserCoords(userCoords) {
    return {
        type: SET_USER_COORDS,
        userCoords,
    }
}

export function setFoodRadius(foodRadius) {
    return {
        type: SET_FOOD_RADIUS,
        foodRadius,
    }
}

export function setUserTimeStart(userTimeStart) {
    return {
        type: SET_USER_TIME_START,
        userTimeStart,
    }
}

export function setUserTimeEnd(userTimeEnd) {
    return {
        type: SET_USER_TIME_END,
        userTimeEnd,
    }
}

export function setFoodCategories(foodCategories) {
    return {
        type: SET_FOOD_CATEGORIES,
        foodCategories,
    }
}