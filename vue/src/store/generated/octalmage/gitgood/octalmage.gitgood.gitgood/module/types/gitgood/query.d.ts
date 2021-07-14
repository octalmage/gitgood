import { Reader, Writer } from 'protobufjs/minimal';
import { Team } from '../gitgood/team';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
/** this line is used by starport scaffolding # 3 */
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
    /** Queries a team by id. */
    Team(request: QueryGetTeamRequest): Promise<QueryGetTeamResponse>;
    /** Queries a list of team items. */
    TeamAll(request: QueryAllTeamRequest): Promise<QueryAllTeamResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
