import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
export interface Stat {
    creator: string;
    id: number;
    statType: number;
    initial: number;
    final: number;
    owner: string;
}
export declare const Stat: {
    encode(message: Stat, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Stat;
    fromJSON(object: any): Stat;
    toJSON(message: Stat): unknown;
    fromPartial(object: DeepPartial<Stat>): Stat;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
