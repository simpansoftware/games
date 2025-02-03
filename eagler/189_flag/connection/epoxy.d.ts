import { EpoxyIoStream, EpoxyWebSocket, EpoxyHandlers } from "@mercuryworkshop/epoxy-tls";
export declare function initWisp(wisp: string): Promise<void>;
export declare function epoxyFetch(url: string, opts?: any): Promise<Response>;
export declare function epoxyWs(handlers: EpoxyHandlers, uri: string, protocols?: string | string[]): Promise<EpoxyWebSocket>;
export declare function connect_tcp(socket: string): Promise<EpoxyIoStream>;
export declare function set_wisp_server(wisp_url: string): void;
export declare function reconnect(): Promise<void>;
