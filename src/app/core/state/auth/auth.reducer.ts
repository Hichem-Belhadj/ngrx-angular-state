import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./auth.state";
import { autoLogout, loginSuccess, setErrorMessage, signupSuccess } from "./auth.actions";

const _authReducer = createReducer(initialState,
    on(loginSuccess, (state: any, action: any) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(setErrorMessage, (state: any, action: any) => {
        return {
            ...state,
            errorMessage: action.message
        }
    }),
    on(signupSuccess, (state: any, action: any) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(autoLogout, (state: any) => {
        return {
            ...state,
            user: null
        }
    })
)

export function authReducer(state: any, action: Action) {
    return _authReducer(state, action);
}