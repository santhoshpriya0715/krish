import { Actions } from "../actions/constants";

const initialState = {
    signUpData: []
}

const DBReducer = (
    state = initialState,
    action,
) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.signUpAdd:
            state.signUpData.push({ ...payload })
            return { ...state }

        case Actions.passwordUpdate:
            const data = state.signUpData.findIndex((value, index) => { return value.username == payload.username })
            state.signUpData[data] = { ...state.signUpData[data], password: payload.password }
            return { ...state }
        default:
            return state;
    }
};

export default DBReducer;
