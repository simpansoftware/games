import { Buffer } from "../buffer";
export declare function offlineUUID(name: string): number[];
export declare function bytesToUuid(byteArray: number[]): string;
export declare class Decryptor {
    private aesCfb;
    transform: TransformStream<Buffer>;
    seed(iv: Uint8Array): void;
    constructor();
}
export declare class Encryptor {
    private aesCfb;
    constructor();
    seed(iv: Uint8Array): void;
    transform(chunk: Buffer): Buffer;
}
export declare function makeSharedSecret(): Uint8Array;
export declare function loadKey(keyBytes: Uint8Array): Promise<[bigint, bigint]>;
export declare function encryptRSA(data: Uint8Array, n: bigint, e: bigint): Uint8Array;
export declare function mchash(input: Uint8Array): Promise<string>;
