// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateTeam } from "./types/gitgood/tx";
import { MsgDeleteTeam } from "./types/gitgood/tx";
import { MsgCreateTeam } from "./types/gitgood/tx";
const types = [
    ["/octalmage.gitgood.gitgood.MsgUpdateTeam", MsgUpdateTeam],
    ["/octalmage.gitgood.gitgood.MsgDeleteTeam", MsgDeleteTeam],
    ["/octalmage.gitgood.gitgood.MsgCreateTeam", MsgCreateTeam],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateTeam: (data) => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgUpdateTeam", value: data }),
        msgDeleteTeam: (data) => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgDeleteTeam", value: data }),
        msgCreateTeam: (data) => ({ typeUrl: "/octalmage.gitgood.gitgood.MsgCreateTeam", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
