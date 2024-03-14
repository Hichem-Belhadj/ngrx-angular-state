import { User } from "../../models/user.mode"

export interface AuthState {
    user: User | null;
    errorMessage: string;
}

export const initialState: AuthState = {
    user: null,
    errorMessage: ''
}