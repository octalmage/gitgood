import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
export interface Achievement {
    creator: string;
    id: number;
    achievementID: string;
    owner: string;
    createdAt: number;
}
export declare const Achievement: {
    encode(message: Achievement, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Achievement;
    fromJSON(object: any): Achievement;
    toJSON(message: Achievement): unknown;
    fromPartial(object: DeepPartial<Achievement>): Achievement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
