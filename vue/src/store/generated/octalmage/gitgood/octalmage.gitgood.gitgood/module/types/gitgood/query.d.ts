import { Reader, Writer } from 'protobufjs/minimal';
import { Stat } from '../gitgood/stat';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Team } from '../gitgood/team';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetStatRequest {
    id: number;
}
export interface QueryGetStatResponse {
    Stat: Stat | undefined;
}
export interface QueryAllStatRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllStatResponse {
    Stat: Stat[];
    pagination: PageResponse | undefined;
}
export interface QueryGetTeamRequest {
    id: number;
}
export interface QueryGetTeamResponse {
    Team: Team | undefined;
}
export interface QueryAllTeamRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTeamResponse {
    Team: Team[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetStatRequest: {
    encode(message: QueryGetStatRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStatRequest;
    fromJSON(object: any): QueryGetStatRequest;
    toJSON(message: QueryGetStatRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetStatRequest>): QueryGetStatRequest;
};
export declare const QueryGetStatResponse: {
    encode(message: QueryGetStatResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStatResponse;
    fromJSON(object: any): QueryGetStatResponse;
    toJSON(message: QueryGetStatResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStatResponse>): QueryGetStatResponse;
};
export declare const QueryAllStatRequest: {
    encode(message: QueryAllStatRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStatRequest;
    fromJSON(object: any): QueryAllStatRequest;
    toJSON(message: QueryAllStatRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllStatRequest>): QueryAllStatRequest;
};
export declare const QueryAllStatResponse: {
    encode(message: QueryAllStatResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStatResponse;
    fromJSON(object: any): QueryAllStatResponse;
    toJSON(message: QueryAllStatResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllStatResponse>): QueryAllStatResponse;
};
export declare const QueryGetTeamRequest: {
    encode(message: QueryGetTeamRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTeamRequest;
    fromJSON(object: any): QueryGetTeamRequest;
    toJSON(message: QueryGetTeamRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTeamRequest>): QueryGetTeamRequest;
};
export declare const QueryGetTeamResponse: {
    encode(message: QueryGetTeamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTeamResponse;
    fromJSON(object: any): QueryGetTeamResponse;
    toJSON(message: QueryGetTeamResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTeamResponse>): QueryGetTeamResponse;
};
export declare const QueryAllTeamRequest: {
    encode(message: QueryAllTeamRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTeamRequest;
    fromJSON(object: any): QueryAllTeamRequest;
    toJSON(message: QueryAllTeamRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTeamRequest>): QueryAllTeamRequest;
};
export declare const QueryAllTeamResponse: {
    encode(message: QueryAllTeamResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTeamResponse;
    fromJSON(object: any): QueryAllTeamResponse;
    toJSON(message: QueryAllTeamResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTeamResponse>): QueryAllTeamResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a stat by id. */
    Stat(request: QueryGetStatRequest): Promise<QueryGetStatResponse>;
    /** Queries a list of stat items. */
    StatAll(request: QueryAllStatRequest): Promise<QueryAllStatResponse>;
    /** Queries a team by id. */
    Team(request: QueryGetTeamRequest): Promise<QueryGetTeamResponse>;
    /** Queries a list of team items. */
    TeamAll(request: QueryAllTeamRequest): Promise<QueryAllTeamResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Stat(request: QueryGetStatRequest): Promise<QueryGetStatResponse>;
    StatAll(request: QueryAllStatRequest): Promise<QueryAllStatResponse>;
    Team(request: QueryGetTeamRequest): Promise<QueryGetTeamResponse>;
    TeamAll(request: QueryAllTeamRequest): Promise<QueryAllTeamResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
