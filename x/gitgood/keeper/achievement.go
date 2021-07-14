package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"strconv"
)

// GetAchievementCount get the total number of achievement
func (k Keeper) GetAchievementCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementCountKey))
	byteKey := types.KeyPrefix(types.AchievementCountKey)
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

// SetAchievementCount set the total number of achievement
func (k Keeper) SetAchievementCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementCountKey))
	byteKey := types.KeyPrefix(types.AchievementCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendAchievement appends a achievement in the store with a new id and update the count
func (k Keeper) AppendAchievement(
	ctx sdk.Context,
	achievement types.Achievement,
) uint64 {
	// Create the achievement
	count := k.GetAchievementCount(ctx)

	// Set the ID of the appended value
	achievement.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&achievement)
	store.Set(GetAchievementIDBytes(achievement.Id), appendedValue)

	// Update achievement count
	k.SetAchievementCount(ctx, count+1)

	return count
}

// SetAchievement set a specific achievement in the store
func (k Keeper) SetAchievement(ctx sdk.Context, achievement types.Achievement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	b := k.cdc.MustMarshalBinaryBare(&achievement)
	store.Set(GetAchievementIDBytes(achievement.Id), b)
}

// GetAchievement returns a achievement from its id
func (k Keeper) GetAchievement(ctx sdk.Context, id uint64) types.Achievement {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	var achievement types.Achievement
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAchievementIDBytes(id)), &achievement)
	return achievement
}

// HasAchievement checks if the achievement exists in the store
func (k Keeper) HasAchievement(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	return store.Has(GetAchievementIDBytes(id))
}

// GetAchievementOwner returns the creator of the achievement
func (k Keeper) GetAchievementOwner(ctx sdk.Context, id uint64) string {
	return k.GetAchievement(ctx, id).Creator
}

// RemoveAchievement removes a achievement from the store
func (k Keeper) RemoveAchievement(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	store.Delete(GetAchievementIDBytes(id))
}

// GetAllAchievement returns all achievement
func (k Keeper) GetAllAchievement(ctx sdk.Context) (list []types.Achievement) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AchievementKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Achievement
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAchievementIDBytes returns the byte representation of the ID
func GetAchievementIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAchievementIDFromBytes returns ID in uint64 format from a byte array
func GetAchievementIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
