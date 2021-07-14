package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"strconv"
)

// GetGoalCount get the total number of goal
func (k Keeper) GetGoalCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalCountKey))
	byteKey := types.KeyPrefix(types.GoalCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetGoalCount set the total number of goal
func (k Keeper) SetGoalCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalCountKey))
	byteKey := types.KeyPrefix(types.GoalCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendGoal appends a goal in the store with a new id and update the count
func (k Keeper) AppendGoal(
	ctx sdk.Context,
	goal types.Goal,
) uint64 {
	// Create the goal
	count := k.GetGoalCount(ctx)

	// Set the ID of the appended value
	goal.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&goal)
	store.Set(GetGoalIDBytes(goal.Id), appendedValue)

	// Update goal count
	k.SetGoalCount(ctx, count+1)

	return count
}

// SetGoal set a specific goal in the store
func (k Keeper) SetGoal(ctx sdk.Context, goal types.Goal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	b := k.cdc.MustMarshalBinaryBare(&goal)
	store.Set(GetGoalIDBytes(goal.Id), b)
}

// GetGoal returns a goal from its id
func (k Keeper) GetGoal(ctx sdk.Context, id uint64) types.Goal {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	var goal types.Goal
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetGoalIDBytes(id)), &goal)
	return goal
}

// HasGoal checks if the goal exists in the store
func (k Keeper) HasGoal(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	return store.Has(GetGoalIDBytes(id))
}

// GetGoalOwner returns the creator of the goal
func (k Keeper) GetGoalOwner(ctx sdk.Context, id uint64) string {
	return k.GetGoal(ctx, id).Creator
}

// RemoveGoal removes a goal from the store
func (k Keeper) RemoveGoal(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	store.Delete(GetGoalIDBytes(id))
}

// GetAllGoal returns all goal
func (k Keeper) GetAllGoal(ctx sdk.Context) (list []types.Goal) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.GoalKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Goal
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetGoalIDBytes returns the byte representation of the ID
func GetGoalIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetGoalIDFromBytes returns ID in uint64 format from a byte array
func GetGoalIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
