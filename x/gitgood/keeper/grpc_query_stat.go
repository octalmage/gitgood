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

func (k Keeper) StatAll(c context.Context, req *types.QueryAllStatRequest) (*types.QueryAllStatResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stats []*types.Stat
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	statStore := prefix.NewStore(store, types.KeyPrefix(types.StatKey))

	pageRes, err := query.Paginate(statStore, req.Pagination, func(key []byte, value []byte) error {
		var stat types.Stat
		if err := k.cdc.UnmarshalBinaryBare(value, &stat); err != nil {
			return err
		}

		stats = append(stats, &stat)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStatResponse{Stat: stats, Pagination: pageRes}, nil
}

func (k Keeper) Stat(c context.Context, req *types.QueryGetStatRequest) (*types.QueryGetStatResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var stat types.Stat
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasStat(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetStatIDBytes(req.Id)), &stat)

	return &types.QueryGetStatResponse{Stat: &stat}, nil
}
