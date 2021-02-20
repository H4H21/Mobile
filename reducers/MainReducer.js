import { SET_USER_TYPE } from "../actions";

function mainReducer(state={userType: null}, action) {
    switch(action.type) {
        case SET_USER_TYPE:
            return Object.assign({}, state, {
                userType: action.userType,
            });
        default:
            return state;
    }
}

export default mainReducer;