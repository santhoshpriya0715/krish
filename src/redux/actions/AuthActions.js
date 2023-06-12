import { Actions } from "./constants";

export const AuthUpdate = (props) => {
    return {
        type: Actions.authUpdate,
        payload: { ...props },
    };
};

export const AuthLogout = () => {
    return {
        type: Actions.authLogout,
        payload: null,
    };
};