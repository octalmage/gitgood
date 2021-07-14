import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTeam } from "./types/gitgood/tx";
import { MsgDeleteStat } from "./types/gitgood/tx";
import { MsgDeleteTeam } from "./types/gitgood/tx";
import { MsgCreateStat } from "./types/gitgood/tx";
import { MsgUpdateStat } from "./types/gitgood/tx";
import { MsgCreateTeam } from "./types/gitgood/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdateTeam: (data: MsgUpdateTeam) => EncodeObject;
    msgDeleteStat: (data: MsgDeleteStat) => EncodeObject;
    msgDeleteTeam: (data: MsgDeleteTeam) => EncodeObject;
    msgCreateStat: (data: MsgCreateStat) => EncodeObject;
    msgUpdateStat: (data: MsgUpdateStat) => EncodeObject;
    msgCreateTeam: (data: MsgCreateTeam) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
