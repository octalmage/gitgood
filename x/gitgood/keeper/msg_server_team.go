package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

func (k msgServer) CreateTeam(goCtx context.Context, msg *types.MsgCreateTeam) (*types.MsgCreateTeamResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var team = types.Team{
		Creator:          msg.Creator,
		Name:             msg.Name,
		Users:            msg.Users,
		SlackIntegration: msg.SlackIntegration,
	}

	id := k.AppendTeam(
		ctx,
		team,
	)

	return &types.MsgCreateTeamResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateTeam(goCtx context.Context, msg *types.MsgUpdateTeam) (*types.MsgUpdateTeamResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var team = types.Team{
		Creator:          msg.Creator,
		Id:               msg.Id,
		Name:             msg.Name,
		Users:            msg.Users,
		SlackIntegration: msg.SlackIntegration,
	}

	// Checks that the element exists
	if !k.HasTeam(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetTeamOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetTeam(ctx, team)

	return &types.MsgUpdateTeamResponse{}, nil
}

func (k msgServer) DeleteTeam(goCtx context.Context, msg *types.MsgDeleteTeam) (*types.MsgDeleteTeamResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasTeam(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetTeamOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveTeam(ctx, msg.Id)

	return &types.MsgDeleteTeamResponse{}, nil
}
