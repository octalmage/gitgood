package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

func (k msgServer) CreateAchievement(goCtx context.Context, msg *types.MsgCreateAchievement) (*types.MsgCreateAchievementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var achievement = types.Achievement{
		Creator:       msg.Creator,
		AchievementID: msg.AchievementID,
		Owner:         msg.Owner,
		CreatedAt:     msg.CreatedAt,
	}

	id := k.AppendAchievement(
		ctx,
		achievement,
	)

	return &types.MsgCreateAchievementResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateAchievement(goCtx context.Context, msg *types.MsgUpdateAchievement) (*types.MsgUpdateAchievementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var achievement = types.Achievement{
		Creator:       msg.Creator,
		Id:            msg.Id,
		AchievementID: msg.AchievementID,
		Owner:         msg.Owner,
		CreatedAt:     msg.CreatedAt,
	}

	// Checks that the element exists
	if !k.HasAchievement(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetAchievementOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetAchievement(ctx, achievement)

	return &types.MsgUpdateAchievementResponse{}, nil
}

func (k msgServer) DeleteAchievement(goCtx context.Context, msg *types.MsgDeleteAchievement) (*types.MsgDeleteAchievementResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasAchievement(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetAchievementOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveAchievement(ctx, msg.Id)

	return &types.MsgDeleteAchievementResponse{}, nil
}
