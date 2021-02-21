import { SET_USER_TYPE, SET_USER_NAME, SET_USER_ADDRESS, SET_FOOD_RADIUS, SET_USER_COORDS, SET_USER_TIME_START, SET_USER_TIME_END, SET_FOOD_CATEGORIES } from "../actions";

function mainReducer(state={userType: null, userName: null, userAddress: null}, action) {
    switch(action.type) {
        case SET_USER_TYPE:
            return Object.assign({}, state, {
                userType: action.userType,
            });

        case SET_USER_NAME:
            return Object.assign({}, state, {
                userName: action.userName,
            });

        case SET_USER_ADDRESS:
            return Object.assign({}, state, {
                userAddress: action.userAddress,
            });

        case SET_FOOD_RADIUS:
            return Object.assign({}, state, {
                foodRadius: action.foodRadius,
            });

        case SET_USER_COORDS:
            return Object.assign({}, state, {
                userCoords: action.userCoords,
            });

        case SET_USER_TIME_START:
            return Object.assign({}, state, {
                userTimeStart: action.userTimeStart,
            });

        case SET_USER_TIME_END:
            return Object.assign({}, state, {
                userTimeEnd: action.userTimeEnd,
            });

        case SET_FOOD_CATEGORIES:
            return { ...state, foodCategories: action.foodCategories };


        default:
            return state;
    }
}

export default mainReducer;