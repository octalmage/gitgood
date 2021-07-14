import { Writer, Reader } from 'protobufjs/minimal';
import { Goal } from '../gitgood/goal';
import { Stat } from '../gitgood/stat';
import { Team } from '../gitgood/team';
export declare const protobufPackage = "octalmage.gitgood.gitgood";
/** GenesisState defines the gitgood module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    goalList: Goal[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    goalCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    statList: Stat[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    statCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    teamList: Team[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    teamCount: number;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
