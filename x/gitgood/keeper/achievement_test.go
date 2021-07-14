package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/stretchr/testify/assert"
)

func createNAchievement(keeper *Keeper, ctx sdk.Context, n int) []types.Achievement {
	items := make([]types.Achievement, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendAchievement(ctx, items[i])
	}
	return items
}

func TestAchievementGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAchievement(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetAchievement(ctx, item.Id))
	}
}

func TestAchievementExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAchievement(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasAchievement(ctx, item.Id))
	}
}

func TestAchievementRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAchievement(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAchievement(ctx, item.Id)
		assert.False(t, keeper.HasAchievement(ctx, item.Id))
	}
}

func TestAchievementGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAchievement(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllAchievement(ctx))
}

func TestAchievementCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNAchievement(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetAchievementCount(ctx))
}
