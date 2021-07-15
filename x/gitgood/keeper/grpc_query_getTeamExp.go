package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/tendermint/tendermint/crypto"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetTeamExp(goCtx context.Context, req *types.QueryGetTeamExpRequest) (*types.QueryGetTeamExpResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	teamAcct := sdk.AccAddress(crypto.AddressHash([]byte(req.Team)))

	balance := k.bankKeeper.GetBalance(ctx, teamAcct, "exp")

	return &types.QueryGetTeamExpResponse{balance.Amount.Int64()}, nil
}
