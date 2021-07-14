import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTeam {
    creator: string;
    name: string;
    users: string[];
}
export interface MsgCreateTeamResponse {
    id: number;
}
export interface MsgUpdateTeam {
    creator: string;
    id: number;
    name: string;
    users: string[];
}
export interface MsgUpdateTeamResponse {
}
export interface MsgDeleteTeam {
    creator: string;
    id: number;
}
export interface MsgDeleteTeamResponse {
}
export declare const MsgCreateTeam: {
    encode(message: MsgCreateTeam, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTeam;
    fromJSON(object: any): MsgCreateTeam;
    toJSON(message: MsgCreateTeam): unknown;
    fromPartial(object: DeepPartial<MsgCreateTeam>): MsgCreateTeam;
};
export declare const MsgCreateTeamResponse: {
    encode(message: MsgCreateTeamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateTeamResponse;
    fromJSON(object: any): MsgCreateTeamResponse;
    toJSON(message: MsgCreateTeamResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateTeamResponse>): MsgCreateTeamResponse;
};
export declare const MsgUpdateTeam: {
    encode(message: MsgUpdateTeam, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTeam;
    fromJSON(object: any): MsgUpdateTeam;
    toJSON(message: MsgUpdateTeam): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTeam>): MsgUpdateTeam;
};
export declare const MsgUpdateTeamResponse: {
    encode(_: MsgUpdateTeamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTeamResponse;
    fromJSON(_: any): MsgUpdateTeamResponse;
    toJSON(_: MsgUpdateTeamResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTeamResponse>): MsgUpdateTeamResponse;
};
export declare const MsgDeleteTeam: {
    encode(message: MsgDeleteTeam, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTeam;
    fromJSON(object: any): MsgDeleteTeam;
    toJSON(message: MsgDeleteTeam): unknown;
    fromPartial(object: DeepPartial<MsgDeleteTeam>): MsgDeleteTeam;
};
export declare const MsgDeleteTeamResponse: {
    encode(_: MsgDeleteTeamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteTeamResponse;
    fromJSON(_: any): MsgDeleteTeamResponse;
    toJSON(_: MsgDeleteTeamResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteTeamResponse>): MsgDeleteTeamResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse>;
    UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse>;
    DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse>;
    UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse>;
    DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
