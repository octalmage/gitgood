package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"github.com/stretchr/testify/assert"
)

func createNGoal(keeper *Keeper, ctx sdk.Context, n int) []types.Goal {
	items := make([]types.Goal, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendGoal(ctx, items[i])
	}
	return items
}

func TestGoalGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNGoal(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetGoal(ctx, item.Id))
	}
}

func TestGoalExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNGoal(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasGoal(ctx, item.Id))
	}
}

func TestGoalRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNGoal(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveGoal(ctx, item.Id)
		assert.False(t, keeper.HasGoal(ctx, item.Id))
	}
}

func TestGoalGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNGoal(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllGoal(ctx))
}

func TestGoalCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNGoal(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetGoalCount(ctx))
}
