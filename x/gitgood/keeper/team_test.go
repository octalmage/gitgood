package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/stretchr/testify/assert"
)

func createNTeam(keeper *Keeper, ctx sdk.Context, n int) []types.Team {
	items := make([]types.Team, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendTeam(ctx, items[i])
	}
	return items
}

func TestTeamGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTeam(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetTeam(ctx, item.Id))
	}
}

func TestTeamExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTeam(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasTeam(ctx, item.Id))
	}
}

func TestTeamRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTeam(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTeam(ctx, item.Id)
		assert.False(t, keeper.HasTeam(ctx, item.Id))
	}
}

func TestTeamGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTeam(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllTeam(ctx))
}

func TestTeamCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNTeam(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetTeamCount(ctx))
}
