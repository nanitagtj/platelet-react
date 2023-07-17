import * as Actions from "../actions";
const initialState = {
    user: {},
    mail: "",
    token: "",
};

const reducerUser = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.SET_USUARIO:
            return {
                ...state,
                user: payload
            };
        case Actions.SET_MAIL:
            return {
                ...state,
                mail: payload
            };
        case Actions.SET_TOKEN:
            return {
                ...state,
                token: payload,
            };
        default:
            return state;
    }
};

export default reducerUser;
