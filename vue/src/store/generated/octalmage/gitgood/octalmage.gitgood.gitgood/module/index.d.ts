import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateAchievement } from "./types/gitgood/tx";
import { MsgDeleteGoal } from "./types/gitgood/tx";
import { MsgUpdateTeam } from "./types/gitgood/tx";
import { MsgDeleteStat } from "./types/gitgood/tx";
import { MsgUpdateAchievement } from "./types/gitgood/tx";
import { MsgCreateTeam } from "./types/gitgood/tx";
import { MsgUpdateStat } from "./types/gitgood/tx";
import { MsgCreateGoal } from "./types/gitgood/tx";
import { MsgDeleteTeam } from "./types/gitgood/tx";
import { MsgDeleteAchievement } from "./types/gitgood/tx";
import { MsgUpdateGoal } from "./types/gitgood/tx";
import { MsgCreateStat } from "./types/gitgood/tx";
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
    msgCreateAchievement: (data: MsgCreateAchievement) => EncodeObject;
    msgDeleteGoal: (data: MsgDeleteGoal) => EncodeObject;
    msgUpdateTeam: (data: MsgUpdateTeam) => EncodeObject;
    msgDeleteStat: (data: MsgDeleteStat) => EncodeObject;
    msgUpdateAchievement: (data: MsgUpdateAchievement) => EncodeObject;
    msgCreateTeam: (data: MsgCreateTeam) => EncodeObject;
    msgUpdateStat: (data: MsgUpdateStat) => EncodeObject;
    msgCreateGoal: (data: MsgCreateGoal) => EncodeObject;
    msgDeleteTeam: (data: MsgDeleteTeam) => EncodeObject;
    msgDeleteAchievement: (data: MsgDeleteAchievement) => EncodeObject;
    msgUpdateGoal: (data: MsgUpdateGoal) => EncodeObject;
    msgCreateStat: (data: MsgCreateStat) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
