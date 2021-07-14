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

func (k Keeper) AchievementAll(c context.Context, req *types.QueryAllAchievementRequest) (*types.QueryAllAchievementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var achievements []*types.Achievement
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	achievementStore := prefix.NewStore(store, types.KeyPrefix(types.AchievementKey))

	pageRes, err := query.Paginate(achievementStore, req.Pagination, func(key []byte, value []byte) error {
		var achievement types.Achievement
		if err := k.cdc.UnmarshalBinaryBare(value, &achievement); err != nil {
			return err
		}

		achievements = append(achievements, &achievement)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAchievementResponse{Achievement: achievements, Pagination: pageRes}, nil
}

func (k Keeper) Achievement(c context.Context, req *types.QueryGetAchievementRequest) (*types.QueryGetAchievementResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var achievement types.Achievement
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasAchievement(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAchievementIDBytes(req.Id)), &achievement)

	return &types.QueryGetAchievementResponse{Achievement: &achievement}, nil
}
