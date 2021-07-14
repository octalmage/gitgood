// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateStat } from "./types/gitgood/tx";
import { MsgDeleteGoal } from "./types/gitgood/tx";
import { MsgCreateTeam } from "./types/gitgood/tx";
import { MsgUpdateTeam } from "./types/gitgood/tx";
import { MsgUpdateGoal } from "./types/gitgood/tx";
import { MsgDeleteTeam } from "./types/gitgood/tx";
import { MsgUpdateStat } from "./types/gitgood/tx";
import { MsgCreateGoal } from "./types/gitgood/tx";
import { MsgDeleteStat } from "./types/gitgood/tx";


const types = [
  ["/octalmage.gitgood.gitgood.MsgCreateStat", MsgCreateStat],
  ["/octalmage.gitgood.gitgood.MsgDeleteGoal", MsgDeleteGoal],
  ["/octalmage.gitgood.gitgood.MsgCreateTeam", MsgCreateTeam],
  ["/octalmage.gitgood.gitgood.MsgUpdateTeam", MsgUpdateTeam],
  ["/octalmage.gitgood.gitgood.MsgUpdateGoal", MsgUpdateGoal],
  ["/octalmage.gitgood.gitgood.MsgDeleteTeam", MsgDeleteTeam],
  ["/octalmage.gitgood.gitgood.MsgUpdateStat", MsgUpdateStat],
  ["/octalmage.gitgood.gitgood.MsgCreateGoal", MsgCreateGoal],
  ["/octalmage.gitgood.gitgood.MsgDeleteStat", MsgDeleteStat],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateStat: (data: MsgCreateStat): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgCreateStat", value: data }),
    msgDeleteGoal: (data: MsgDeleteGoal): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgDeleteGoal", value: data }),
    msgCreateTeam: (data: MsgCreateTeam): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgCreateTeam", value: data }),
    msgUpdateTeam: (data: MsgUpdateTeam): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgUpdateTeam", value: data }),
    msgUpdateGoal: (data: MsgUpdateGoal): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgUpdateGoal", value: data }),
    msgDeleteTeam: (data: MsgDeleteTeam): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgDeleteTeam", value: data }),
    msgUpdateStat: (data: MsgUpdateStat): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgUpdateStat", value: data }),
    msgCreateGoal: (data: MsgCreateGoal): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgCreateGoal", value: data }),
    msgDeleteStat: (data: MsgDeleteStat): EncodeObject => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgDeleteStat", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
