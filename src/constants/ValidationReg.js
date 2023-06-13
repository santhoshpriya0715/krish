import { T } from "./T";

export const usernameReg = /^[a-zA-Z][a-zA-Z0-9]+[0-9]*$/;
export const charOnly = /^[a-zA-Z]*$/;
export const PasswordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-\"!@#%&\/,><\':;|_~`])\S{8,99}$/;
export const EmailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export const varCharOnly = /^[a-zA-Z0-9- ]*$/;
export const nameCaseReg = /^[a-zA-Z][a-zA-Z\s]*$/;
export const NumberCaseReg = /(?=.*[0-9])/;

export const ValidateData = (text, validateType) => {
    if (!text) {
        return validateType + T.err_enter
    }
    switch (validateType) {
        case 'Email':
            if (!EmailReg.test(text)) {
                return T.err_email
            }
            break;
        case 'Password':
            if (!(text.length >= 8)) {
                return T.err_must_eight
            }
            if (!PasswordReg.test(text)) {
                return T.err_pass
            }
            break;
        case 'Username':
            if (!varCharOnly.test(text)) {
                return T.err_user_name_chat
            }
            if (!usernameReg.test(text)) {
                return T.err_user_name_start
            }
            if (!(text.length >= 8)) {
                return T.err_must_eight
            }
            break;
        case 'Full Name':
            if (!nameCaseReg.test(text)) {
                return T.err_char_only
            }
            break;
        case 'Mobile Number':
            if (!(text.length >= 10)) {
                return T.err_valid_number
            }
            if (!NumberCaseReg.test(text)) {
                return T.err_valid_number
            }
        default:
            break;
    }
    return ''
}