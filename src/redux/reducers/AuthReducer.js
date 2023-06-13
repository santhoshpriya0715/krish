import { Actions } from "../actions/constants";

const initialState = {
    authStep: 0,
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    username: ''
}

const AuthReducer = (
    state = initialState,
    action,
) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.authUpdate:
            return { ...state, ...payload };

        case Actions.authLogout:
            return initialState

        default:
            return state;
    }
};

export default AuthReducer;
