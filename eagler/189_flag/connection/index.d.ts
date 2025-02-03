import { EaglerProxy } from "../1.8";
import { BytesReader, BytesWriter } from "./framer";
import type { AuthStore } from "..";
export declare class Connection {
    private authStore;
    eaglerIn: BytesWriter;
    eaglerOut: BytesReader;
    processIn: BytesReader;
    processOut: BytesWriter;
    url: URL;
    impl?: EaglerProxy;
    rawEpoxy?: BytesWriter;
    constructor(uri: string, authStore: AuthStore);
    forward(connectcallback: () => void): Promise<void>;
    ping(): void;
}
