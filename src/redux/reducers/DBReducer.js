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
        case Actions.signUpAdd: {
            const data = []
            if (state.signUpData) {
                data = state.signUpData
            }
            data.push({ ...payload })
            return { ...state, signUpData : data }
        }
        default:
            return state;
    }
};

export default DBReducer;
