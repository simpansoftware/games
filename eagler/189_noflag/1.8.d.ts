import { Buffer } from "./buffer";
import { BytesWriter, Compressor, Decompressor } from "./connection/framer";
import { Decryptor, Encryptor } from "./connection/crypto";
import "./auth";
import { type AuthStore } from ".";
declare enum State {
    Handshaking = 0,
    Status = 1,
    Login = 2,
    Play = 3
}
export declare class EaglerProxy {
    serverAddress: string;
    serverPort: number;
    authStore: AuthStore;
    loggedIn: boolean;
    handshook: boolean;
    decompressor: Decompressor;
    compressor: Compressor;
    decryptor: Decryptor;
    encryptor: Encryptor;
    state: State;
    net: BytesWriter;
    eagler: WritableStreamDefaultWriter<Buffer | string>;
    offlineUsername: string;
    offlineUuid: string;
    isPremium: boolean;
    constructor(eaglerOut: BytesWriter, epoxyOut: BytesWriter, serverAddress: string, serverPort: number, authStore: AuthStore);
    eaglerRead(packet: Buffer): Promise<void>;
    epoxyRead(packet: Buffer): Promise<void>;
    ping(): Promise<void>;
}
export {};
