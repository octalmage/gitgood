package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

func (k msgServer) CreateStat(goCtx context.Context, msg *types.MsgCreateStat) (*types.MsgCreateStatResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var stat = types.Stat{
		Creator:  msg.Creator,
		StatType: msg.StatType,
		Initial:  msg.Initial,
		Final:    msg.Final,
		Owner:    msg.Owner,
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
