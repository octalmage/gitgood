package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/stretchr/testify/assert"
)

func createNStat(keeper *Keeper, ctx sdk.Context, n int) []types.Stat {
	items := make([]types.Stat, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendStat(ctx, items[i])
	}
	return items
}

func TestStatGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNStat(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetStat(ctx, item.Id))
	}
}

func TestStatExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNStat(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasStat(ctx, item.Id))
	}
}

func TestStatRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNStat(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStat(ctx, item.Id)
		assert.False(t, keeper.HasStat(ctx, item.Id))
	}
}

func TestStatGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNStat(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllStat(ctx))
}

func TestStatCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNStat(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetStatCount(ctx))
}
