import { UserInfo } from "./auth";
export declare const VERSION: any;
export declare const COMMITHASH: any;
export declare let wispUrl: string;
export type AuthStore = {
    user: UserInfo | null;
    yggToken: string;
    msToken: string;
};
export type TokenStore = {
    username: string;
    token: string;
    ms: string;
};
export declare let authstore: AuthStore;
export declare function setWispUrl(wisp: string): void;
