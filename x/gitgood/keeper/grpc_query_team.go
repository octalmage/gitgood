package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) TeamAll(c context.Context, req *types.QueryAllTeamRequest) (*types.QueryAllTeamResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var teams []*types.Team
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	teamStore := prefix.NewStore(store, types.KeyPrefix(types.TeamKey))

	pageRes, err := query.Paginate(teamStore, req.Pagination, func(key []byte, value []byte) error {
		var team types.Team
		if err := k.cdc.UnmarshalBinaryBare(value, &team); err != nil {
			return err
		}

		teams = append(teams, &team)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllTeamResponse{Team: teams, Pagination: pageRes}, nil
}

func (k Keeper) Team(c context.Context, req *types.QueryGetTeamRequest) (*types.QueryGetTeamResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var team types.Team
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasTeam(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTeamIDBytes(req.Id)), &team)

	return &types.QueryGetTeamResponse{Team: &team}, nil
}
