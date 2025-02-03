export declare class Buffer {
    inner: Uint8Array;
    static new(): Buffer;
    constructor(inner: Uint8Array | number[], copy?: boolean);
    copy(): Buffer;
    take(cnt: number): Buffer;
    resize(newlen: number): void;
    extend(buf: Buffer): void;
    get(idx: number): number;
    toArray(): number[];
    toStr(): string;
    get length(): number;
    readString(): string;
    writeString(str: string): void;
    readUShort(): number;
    writeUShort(num: number): void;
    readLong(): number;
    writeLong(num: number): void;
    readVarInt(take?: boolean): number;
    readVariableData(): Buffer;
    writeVarInt(num: number): void;
    writeVariableData(data: Buffer): void;
    writeBytes(data: number[]): void;
}
