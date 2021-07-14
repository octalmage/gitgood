import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
export interface Goal {
    creator: string;
    id: number;
    label: string;
    comparison: number;
    exp: number;
    createdAt: number;
}
export declare const Goal: {
    encode(message: Goal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Goal;
    fromJSON(object: any): Goal;
    toJSON(message: Goal): unknown;
    fromPartial(object: DeepPartial<Goal>): Goal;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
