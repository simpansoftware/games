import { Buffer } from "../buffer";
export type BytesReader = ReadableStreamDefaultReader<Buffer>;
export type BytesWriter = WritableStreamDefaultWriter<Buffer>;
export declare function writeTransform<I, O>(writer: WritableStreamDefaultWriter<I>, transformer: (val: O) => I | Promise<I>): WritableStream<O>;
export declare function bufferTransformer(): TransformStream<Uint8Array, Buffer>;
export declare function bufferWriter(write: WritableStreamDefaultWriter<Uint8Array>): WritableStream<Buffer>;
export declare function lengthTransformer(): TransformStream<Buffer>;
export declare class Decompressor {
    compressionThresh: number;
    transform: TransformStream<Buffer>;
    constructor();
}
export declare class Compressor {
    compressionThresh: number;
    transform(chunk: Buffer): Promise<Buffer>;
}
export declare function eagerlyPoll<T>(reader: ReadableStreamDefaultReader, buffer: number, cb: () => void): ReadableStream<T>;
