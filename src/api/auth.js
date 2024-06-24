import { appInstance } from "./base";

export const SignupAction = (payload) => {
    return appInstance.post('/api/v1/admin/create', payload)
}

// const LoginAction = (data) => {
//     return appInstance.
// }