import { Actions } from "../actions/constants";

const initialState = {
    signUpData: null
}

const DBReducer = (
    state = initialState,
    action,
) => {
    const { type, payload } = action;
    switch (type) {
        case Actions.signUpAdd:
            const data = state.signUpData
            if (data) {
                if (!data.has(payload.username)) {
                    data.set(payload.username, payload)
                }
            } else {
                data = new Map([[payload.username, payload]])
            }
            return { ...state, signUpData: data }

        case Actions.passwordUpdate:
            const passData = state.signUpData
            const userData = passData.get(payload.username)
            passData.set(payload.username, { ...userData, password: payload.password })
            return { ...state, signUpData: data }
        default:
            return state;
    }
};

export default DBReducer;
