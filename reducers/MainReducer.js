import { SET_USER_TYPE, SET_USER_NAME, SET_USER_ADDRESS, SET_USER_ADD } from "../actions";

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

        default:
            return state;
    }
}

export default mainReducer;