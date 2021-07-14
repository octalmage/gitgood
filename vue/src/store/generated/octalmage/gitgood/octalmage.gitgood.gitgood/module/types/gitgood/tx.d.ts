import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateGoal {
    creator: string;
    label: string;
    comparison: number;
    exp: number;
    createdAt: number;
}
export interface MsgCreateGoalResponse {
    id: number;
}
export interface MsgUpdateGoal {
    creator: string;
    id: number;
    label: string;
    comparison: number;
    exp: number;
    createdAt: number;
}
export interface MsgUpdateGoalResponse {
}
export interface MsgDeleteGoal {
    creator: string;
    id: number;
}
export interface MsgDeleteGoalResponse {
}
export interface MsgCreateStat {
    creator: string;
    statType: number;
    initial: number;
    final: number;
    owner: string;
}
export interface MsgCreateStatResponse {
    id: number;
}
export interface MsgUpdateStat {
    creator: string;
    id: number;
    statType: number;
    initial: number;
    final: number;
    owner: string;
}
export interface MsgUpdateStatResponse {
}
export interface MsgDeleteStat {
    creator: string;
    id: number;
}
export interface MsgDeleteStatResponse {
}
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
export declare const MsgCreateGoal: {
    encode(message: MsgCreateGoal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGoal;
    fromJSON(object: any): MsgCreateGoal;
    toJSON(message: MsgCreateGoal): unknown;
    fromPartial(object: DeepPartial<MsgCreateGoal>): MsgCreateGoal;
};
export declare const MsgCreateGoalResponse: {
    encode(message: MsgCreateGoalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateGoalResponse;
    fromJSON(object: any): MsgCreateGoalResponse;
    toJSON(message: MsgCreateGoalResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateGoalResponse>): MsgCreateGoalResponse;
};
export declare const MsgUpdateGoal: {
    encode(message: MsgUpdateGoal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGoal;
    fromJSON(object: any): MsgUpdateGoal;
    toJSON(message: MsgUpdateGoal): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGoal>): MsgUpdateGoal;
};
export declare const MsgUpdateGoalResponse: {
    encode(_: MsgUpdateGoalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGoalResponse;
    fromJSON(_: any): MsgUpdateGoalResponse;
    toJSON(_: MsgUpdateGoalResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateGoalResponse>): MsgUpdateGoalResponse;
};
export declare const MsgDeleteGoal: {
    encode(message: MsgDeleteGoal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteGoal;
    fromJSON(object: any): MsgDeleteGoal;
    toJSON(message: MsgDeleteGoal): unknown;
    fromPartial(object: DeepPartial<MsgDeleteGoal>): MsgDeleteGoal;
};
export declare const MsgDeleteGoalResponse: {
    encode(_: MsgDeleteGoalResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteGoalResponse;
    fromJSON(_: any): MsgDeleteGoalResponse;
    toJSON(_: MsgDeleteGoalResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteGoalResponse>): MsgDeleteGoalResponse;
};
export declare const MsgCreateStat: {
    encode(message: MsgCreateStat, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStat;
    fromJSON(object: any): MsgCreateStat;
    toJSON(message: MsgCreateStat): unknown;
    fromPartial(object: DeepPartial<MsgCreateStat>): MsgCreateStat;
};
export declare const MsgCreateStatResponse: {
    encode(message: MsgCreateStatResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStatResponse;
    fromJSON(object: any): MsgCreateStatResponse;
    toJSON(message: MsgCreateStatResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateStatResponse>): MsgCreateStatResponse;
};
export declare const MsgUpdateStat: {
    encode(message: MsgUpdateStat, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStat;
    fromJSON(object: any): MsgUpdateStat;
    toJSON(message: MsgUpdateStat): unknown;
    fromPartial(object: DeepPartial<MsgUpdateStat>): MsgUpdateStat;
};
export declare const MsgUpdateStatResponse: {
    encode(_: MsgUpdateStatResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStatResponse;
    fromJSON(_: any): MsgUpdateStatResponse;
    toJSON(_: MsgUpdateStatResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateStatResponse>): MsgUpdateStatResponse;
};
export declare const MsgDeleteStat: {
    encode(message: MsgDeleteStat, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStat;
    fromJSON(object: any): MsgDeleteStat;
    toJSON(message: MsgDeleteStat): unknown;
    fromPartial(object: DeepPartial<MsgDeleteStat>): MsgDeleteStat;
};
export declare const MsgDeleteStatResponse: {
    encode(_: MsgDeleteStatResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStatResponse;
    fromJSON(_: any): MsgDeleteStatResponse;
    toJSON(_: MsgDeleteStatResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteStatResponse>): MsgDeleteStatResponse;
};
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
    CreateGoal(request: MsgCreateGoal): Promise<MsgCreateGoalResponse>;
    UpdateGoal(request: MsgUpdateGoal): Promise<MsgUpdateGoalResponse>;
    DeleteGoal(request: MsgDeleteGoal): Promise<MsgDeleteGoalResponse>;
    CreateStat(request: MsgCreateStat): Promise<MsgCreateStatResponse>;
    UpdateStat(request: MsgUpdateStat): Promise<MsgUpdateStatResponse>;
    DeleteStat(request: MsgDeleteStat): Promise<MsgDeleteStatResponse>;
    CreateTeam(request: MsgCreateTeam): Promise<MsgCreateTeamResponse>;
    UpdateTeam(request: MsgUpdateTeam): Promise<MsgUpdateTeamResponse>;
    DeleteTeam(request: MsgDeleteTeam): Promise<MsgDeleteTeamResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateGoal(request: MsgCreateGoal): Promise<MsgCreateGoalResponse>;
    UpdateGoal(request: MsgUpdateGoal): Promise<MsgUpdateGoalResponse>;
    DeleteGoal(request: MsgDeleteGoal): Promise<MsgDeleteGoalResponse>;
    CreateStat(request: MsgCreateStat): Promise<MsgCreateStatResponse>;
    UpdateStat(request: MsgUpdateStat): Promise<MsgUpdateStatResponse>;
    DeleteStat(request: MsgDeleteStat): Promise<MsgDeleteStatResponse>;
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
