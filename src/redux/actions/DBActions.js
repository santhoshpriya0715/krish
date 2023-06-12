import { Actions } from "./constants";

export const SignUpUpdate = (props) => {
    return {
        type: Actions.signUpAdd,
        payload: { ...props },
    };
};