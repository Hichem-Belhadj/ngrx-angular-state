import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

const getAuthState = createFeatureSelector<AuthState>('auth');

export const getErrorMessage = createSelector(getAuthState, state => state.errorMessage);
export const isAuthenticated = createSelector(getAuthState, state => !!state.user);