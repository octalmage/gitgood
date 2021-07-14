import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
export interface Team {
    creator: string;
    id: number;
    name: string;
    users: string[];
}
export declare const Team: {
    encode(message: Team, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Team;
    fromJSON(object: any): Team;
    toJSON(message: Team): unknown;
    fromPartial(object: DeepPartial<Team>): Team;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
