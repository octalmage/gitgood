import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteTeam } from "./types/gitgood/tx";
import { MsgCreateGoal } from "./types/gitgood/tx";
import { MsgUpdateAchievement } from "./types/gitgood/tx";
import { MsgCreateStat } from "./types/gitgood/tx";
import { MsgUpdateTeam } from "./types/gitgood/tx";
import { MsgCreateTeam } from "./types/gitgood/tx";
import { MsgUpdateStat } from "./types/gitgood/tx";
import { MsgCreateAchievement } from "./types/gitgood/tx";
import { MsgDeleteAchievement } from "./types/gitgood/tx";
import { MsgDeleteStat } from "./types/gitgood/tx";
import { MsgUpdateGoal } from "./types/gitgood/tx";
import { MsgDeleteGoal } from "./types/gitgood/tx";
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
    msgDeleteTeam: (data: MsgDeleteTeam) => EncodeObject;
    msgCreateGoal: (data: MsgCreateGoal) => EncodeObject;
    msgUpdateAchievement: (data: MsgUpdateAchievement) => EncodeObject;
    msgCreateStat: (data: MsgCreateStat) => EncodeObject;
    msgUpdateTeam: (data: MsgUpdateTeam) => EncodeObject;
    msgCreateTeam: (data: MsgCreateTeam) => EncodeObject;
    msgUpdateStat: (data: MsgUpdateStat) => EncodeObject;
    msgCreateAchievement: (data: MsgCreateAchievement) => EncodeObject;
    msgDeleteAchievement: (data: MsgDeleteAchievement) => EncodeObject;
    msgDeleteStat: (data: MsgDeleteStat) => EncodeObject;
    msgUpdateGoal: (data: MsgUpdateGoal) => EncodeObject;
    msgDeleteGoal: (data: MsgDeleteGoal) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
