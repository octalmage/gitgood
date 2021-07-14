package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

func (k msgServer) CreateGoal(goCtx context.Context, msg *types.MsgCreateGoal) (*types.MsgCreateGoalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var goal = types.Goal{
		Creator:    msg.Creator,
		Label:      msg.Label,
		Comparison: msg.Comparison,
		Exp:        msg.Exp,
	}

	id := k.AppendGoal(
		ctx,
		goal,
	)

	return &types.MsgCreateGoalResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateGoal(goCtx context.Context, msg *types.MsgUpdateGoal) (*types.MsgUpdateGoalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var goal = types.Goal{
		Creator:    msg.Creator,
		Id:         msg.Id,
		Label:      msg.Label,
		Comparison: msg.Comparison,
		Exp:        msg.Exp,
		CreatedAt:  msg.CreatedAt,
	}

	// Checks that the element exists
	if !k.HasGoal(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetGoalOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetGoal(ctx, goal)

	return &types.MsgUpdateGoalResponse{}, nil
}

func (k msgServer) DeleteGoal(goCtx context.Context, msg *types.MsgDeleteGoal) (*types.MsgDeleteGoalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasGoal(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetGoalOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveGoal(ctx, msg.Id)

	return &types.MsgDeleteGoalResponse{}, nil
}
