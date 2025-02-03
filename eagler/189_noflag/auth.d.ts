export interface UserInfo {
    id: string;
    name: string;
    skins: SkinInfo[];
    capes: CapeInfo[];
}
export interface AccessoryInfo {
    id: string;
    state: "ACTIVE" | "INACTIVE";
    url: string;
}
export interface SkinInfo extends AccessoryInfo {
    variant: string;
}
export interface CapeInfo extends AccessoryInfo {
    alias: string;
}
export declare function deviceCodeAuth(): Promise<{
    url: string;
    code: string;
    token: Promise<string>;
}>;
export declare function checkOwnership(mcToken: string): Promise<boolean>;
export declare function getProfile(mcToken: string): Promise<UserInfo>;
export declare function minecraftAuth(msToken: string): Promise<string>;
export declare function joinServer(mcToken: string, digest: string, uuid: string): Promise<void>;
