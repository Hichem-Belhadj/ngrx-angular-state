import { AuthResponseData } from "./auth-response-data.model";

export class User {
    private email: string;
    private idToken: string;
    private refreshToken?: string;
    private localId: string;
    private expireAt: Date;

    constructor(user: AuthResponseData) {
        this.email = user.email;
        this.refreshToken = user.refreshToken;
        this.idToken = user.idToken;
        this.localId = user.localId;
        this.expireAt = new Date(new Date().getTime() + +user.expiresIn * 1000);
    }

    get expireDate() {
        return this.expireAt;
    }

    get userToken() {
        return this.idToken;
    }

    set expireDate(date: Date) {
        this.expireAt = date; 
    }
}