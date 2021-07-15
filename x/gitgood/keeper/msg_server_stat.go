package keeper

import (
	"context"
	"errors"
	"fmt"
	"time"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/bech32"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	minttypes "github.com/cosmos/cosmos-sdk/x/mint/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/tendermint/tendermint/crypto"
)

func (k msgServer) CreateStat(goCtx context.Context, msg *types.MsgCreateStat) (*types.MsgCreateStatResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	goals := k.GetAllGoal(ctx)

	var goal types.Goal
	var found bool

	for _, v := range goals {
		if int32(v.Id) == msg.StatType {
			goal = v
			found = true
		}
	}

	if !found {
		return nil, errors.New("bad goal")
	}

	var comparison bool

	if goal.Comparison == 0 {
		comparison = msg.Final >= msg.Initial
	} else if goal.Comparison == 1 {
		comparison = msg.Final > msg.Initial
	}

	if comparison {
		feeCoins, err := sdk.ParseCoinsNormalized(fmt.Sprintf("%dexp", goal.Exp))
		if err != nil {
			return nil, err
		}

		// mint fresh exp to the mint module.
		if err := k.bankKeeper.MintCoins(ctx, minttypes.ModuleName, feeCoins); err != nil {
			return nil, err
		}

		// TODO: Use team name instead of team ID.
		teamAcct := sdk.AccAddress(crypto.AddressHash([]byte(msg.Owner)))

		bech32PrefixAccAddr := sdk.GetConfig().GetBech32AccountAddrPrefix()

		add, err := bech32.ConvertAndEncode(bech32PrefixAccAddr, crypto.AddressHash([]byte(msg.Owner)))
		if err != nil {
			return nil, err
		}
		fmt.Println(add)

		// exp to team
		if err := k.bankKeeper.SendCoinsFromModuleToAccount(ctx, minttypes.ModuleName, teamAcct, feeCoins); err != nil {
			return nil, err
		}
	}

	var stat = types.Stat{
		Creator:   msg.Creator,
		StatType:  msg.StatType,
		Initial:   msg.Initial,
		Final:     msg.Final,
		Owner:     msg.Owner,
		CreatedAt: time.Now().Unix(),
	}

	id := k.AppendStat(
		ctx,
		stat,
	)

	return &types.MsgCreateStatResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateStat(goCtx context.Context, msg *types.MsgUpdateStat) (*types.MsgUpdateStatResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var stat = types.Stat{
		Creator:  msg.Creator,
		Id:       msg.Id,
		StatType: msg.StatType,
		Initial:  msg.Initial,
		Final:    msg.Final,
		Owner:    msg.Owner,
	}

	// Checks that the element exists
	if !k.HasStat(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetStatOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetStat(ctx, stat)

	return &types.MsgUpdateStatResponse{}, nil
}

func (k msgServer) DeleteStat(goCtx context.Context, msg *types.MsgDeleteStat) (*types.MsgDeleteStatResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasStat(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetStatOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveStat(ctx, msg.Id)

	return &types.MsgDeleteStatResponse{}, nil
}
