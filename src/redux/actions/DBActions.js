import { Actions } from "./constants";

export const SignUpUpdate = (props) => {
    return {
        type: Actions.signUpAdd,
        payload: { ...props },
    };
};

export const PasswordUpdate = ({ username, password }) => {
    return {
        type: Actions.passwordUpdate,
        payload: { username, password }
    }
}