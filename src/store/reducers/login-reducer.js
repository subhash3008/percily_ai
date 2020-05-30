import { LOGIN, LOGOUT } from '../actions/action-type';

const initialState = {
    userDetails: null,
    userRoles: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: return {
            ...state,
            userDetails: action.payload && action.payload.userDetails,
            userRoles: action.payload && action.payload.userRoles
        };
        case LOGOUT: return {
            ...state,
            userDetails: null,
            userRoles: []
        };
        default: {
            console.log('INVALID LOGIN ACTION : ', action);
            return { ...state };
        }
    }
}